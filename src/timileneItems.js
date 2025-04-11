import { ref } from 'vue';
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants';
import { currentHour } from './functions';

const generateTimelineItems = () => {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
  }));
};

const timelineItems = ref(generateTimelineItems());

const timelineItemsRefs = ref([]);

const filterTimelineItemsByActivity = (timelineItems, { id }) =>
  timelineItems.filter(({ activityId }) => activityId === id);

const scrollToCurrentHour = (isSmooth = true) => {
  scrollToHour(currentHour(), isSmooth);
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
        activitySeconds: 0,
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
};
