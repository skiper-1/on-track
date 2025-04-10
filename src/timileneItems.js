import { ref } from 'vue';
import { activities } from './activities';
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

const hasActivity = (timelineItem, activity) =>
  timelineItem.activityId === activity.id;

const scrollToCurrentHour = (isSmooth = true) => {
  scrollToHour(currentHour(), isSmooth);
};

const scrollToHour = (hour, isSmooth = true) => {
  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemsRefs.value[hour - 1].$el;

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' });
};

const updateTimelineItem = (timelineItem, fields) =>
  Object.assign(timelineItem, fields);

const resetTimelineItemActivities = (activity) => {
  timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity.id))
    .forEach((timelineItem) =>
      updateTimelineItem(timelineItem, { activityId: null, activitySeconds: 0 })
    );
};

const initializeTimelineItems = () => {
  timelineItems.value = generateTimelineItems();
};

setTimeout(initializeTimelineItems, 0);

const getTotalActivitySeconds = (activity) => {
  return timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity))
    .reduce(
      (totalSeconds, timelineItem) =>
        Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    );
};

export {
  timelineItems,
  timelineItemsRefs,
  resetTimelineItemActivities,
  getTotalActivitySeconds,
  updateTimelineItem,
  scrollToHour,
  scrollToCurrentHour,
};
