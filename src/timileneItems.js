import { ref } from 'vue';
import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  MILLISECONDS_IN_SECOND,
} from './constants';
import { now } from './time';
import { activities } from './activities';

const generateTimelineItems = () =>
  [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false,
  }));

const timelineItems = ref(generateTimelineItems());

const timelineItemsRefs = ref([]);

const timelineItemTimer = null;

const startTimelineItemTimer = (activeTimelineItem) => {
  timelineItemTimer = setInterval(() => {
    updateTimelineItem(activeTimelineItem, {
      activitySeconds: activeTimelineItem.activitySeconds + 1,
    });
  }, MILLISECONDS_IN_SECOND);
};

const findActiveTimelineItem = () =>
  timelineItems.value.find(({ isActive }) => isActive);

const stopTimelineItemTimer = () => clearInterval(timelineItemTimer);

const filterTimelineItemsByActivity = (timelineItems, { id }) =>
  timelineItems.filter(({ activityId }) => activityId === id);

const scrollToCurrentHour = (isSmooth = true) => {
  scrollToHour(now.value.getHours(), isSmooth);
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
          timelineItem.hour === now.value.getHours()
            ? timelineItem.activitySeconds
            : 0,
      })
  );
};

const initializeTimelineItems = () => {
  timelineItems.value = generateTimelineItems();
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
  startTimelineItemTimer,
  stopTimelineItemTimer,
  findActiveTimelineItem,
};
