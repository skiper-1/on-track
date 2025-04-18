import { today } from './time';
import { APP_NAME } from './constants';
import { activities, initializeActivities } from './activities';
import {
  startTimelineItemTimer,
  stopTimelineItemTimer,
} from './timelineitem-timer';
import {
  activeTimelineItem,
  initializeTimelineItems,
  timelineItems,
} from './timileneItems';

const syncState = (shouldLoad = true) => {
  shouldLoad ? loadState() : saveState();

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer();
  }
};

const loadState = () => {
  const state = loadFromLocalStorage();

  initializeActivities(state);
  initializeTimelineItems(state);
};

const loadFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(APP_NAME) ?? '{}');

const saveState = () => {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    })
  );
};

export { syncState };
