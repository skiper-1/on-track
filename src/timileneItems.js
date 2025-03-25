import { ref } from 'vue';
import { activities } from './activities';
import { HOURS_IN_DAY } from './constants';

const generateTimelineItems = () => {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4].includes(hour)
      ? activities.value[hour % 3].id
      : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 300 : 0,
  }));
};

const timelineItems = ref(generateTimelineItems());

const setTimelineItemActivity = (timelineItem, activityId) =>
  (timelineItem.activityId = activityId);

const updateTimelineItemActivitySeconds = (timelineItem, activitySeconds) => {
  timelineItem.activitySeconds = activitySeconds;
};

const resetTimelineItemActivities = (activity) => {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null;
      timelineItem.activitySeconds = 0;
    }
  });
};

const initializeTimelineItems = () => {
  timelineItems.value = generateTimelineItems();
};

setTimeout(initializeTimelineItems, 0);

const getTotalActivitySeconds = (activity) => {
  return timelineItems.value
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) =>
        Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    );
};

export {
  timelineItems,
  setTimelineItemActivity,
  resetTimelineItemActivities,
  updateTimelineItemActivitySeconds,
  getTotalActivitySeconds,
};
