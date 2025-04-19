import { ref } from 'vue';
import { MILLISECONDS_IN_SECOND } from './constants';
import { updateTimelineItem, activeTimelineItem } from './timileneItems';

const timelineItemTimer = ref(false);

const startTimelineItemTimer = (timelineItem) => {
  timelineItem = timelineItem ?? activeTimelineItem.value;

  updateTimelineItem(timelineItem, { isActive: true });

  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1,
    });
  }, 10);
};

const stopTimelineItemTimer = () => {
  updateTimelineItem(activeTimelineItem.value, { isActive: false });

  clearInterval(timelineItemTimer.value);

  timelineItemTimer.value = false;
};

const resetTimelineItemTimer = (timelineItem) => {
  updateTimelineItem(timelineItem, { activitySeconds: 0 });

  if (activeTimelineItem.value) {
    stopTimelineItemTimer();
  }
};

export {
  timelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
  resetTimelineItemTimer,
};
