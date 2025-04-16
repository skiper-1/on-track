import { computed, ref, watch } from 'vue';
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants';
import { now, today, toSeconds, endOfHour, isToday } from './time';

const generateTimelineItems = () =>
  [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false,
  }));

const timelineItems = ref([]);

const timelineItemsRefs = ref([]);

const activeTimelineItem = computed(() =>
  timelineItems.value.find(({ isActive }) => isActive)
);

watch(now, (after, before) => {
  if (
    activeTimelineItem.value &&
    activeTimelineItem.value.hour !== after.getHours()
  ) {
    stopTimelineItemTimer();
  }

  if (
    before.getHours() !== after.getHours() &&
    after.getHours() === MIDNIGHT_HOUR
  ) {
    resetTimelineItems();
  }
});

const resetTimelineItems = () => {
  timelineItems.value.forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activitySeconds: 0,
      isActive: false,
    })
  );
};

const initializeTimelineItems = (state) => {
  const lastActiveAt = new Date(state.lastActiveAt);

  timelineItems.value = state.timelineItems ?? generateTimelineItems();

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt);
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems(state, timelineItems);
  }
};

const syncIdleSeconds = (lastActiveAt) => {
  updateTimelineItem(activeTimelineItem.value, {
    activitySeconds:
      activeTimelineItem.value.activitySeconds +
      calculateIdleSeconds(lastActiveAt),
  });
};

const calculateIdleSeconds = (lastActiveAt) =>
  lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfHour(lastActiveAt) - lastActiveAt);

const filterTimelineItemsByActivity = (timelineItems, { id }) =>
  timelineItems.filter(({ activityId }) => activityId === id);

const scrollToCurrentHour = (isSmooth = true) => {
  scrollToHour(today().getHours(), isSmooth);
};

const scrollToHour = (hour, isSmooth = true) => {
  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemsRefs.value[hour - 1].$el;

  el.scrollIntoView({
    behavior: isSmooth ? 'smooth' : 'instant',
  });
};

const updateTimelineItem = (timelineItem, fields) =>
  Object.assign(timelineItem, fields);

const resetTimelineItemActivities = (timelineItems, activity) => {
  filterTimelineItemsByActivity(timelineItems, activity).forEach(
    (timelineItem) =>
      updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds:
          timelineItem.hour === today().getHours()
            ? timelineItem.activitySeconds
            : 0,
      })
  );
};

setTimeout(initializeTimelineItems, 0);

const calculateTrackedActivitySeconds = (timelineItems, activity) =>
  filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0);

export {
  timelineItems,
  timelineItemsRefs,
  resetTimelineItemActivities,
  calculateTrackedActivitySeconds,
  updateTimelineItem,
  scrollToHour,
  scrollToCurrentHour,
  activeTimelineItem,
  initializeTimelineItems,
  resetTimelineItems,
};
