import { activities } from './activities';
import { APP_NAME } from './constants';
import { today, toSeconds, isToday, endOfHour } from './time';
import { timelineItems } from './timileneItems';

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

const loadState = () => {
  const serializedState = localStorage.getItem(APP_NAME);

  const state = serializedState ? JSON.parse(serializedState) : {};

  activities.value = state.activities || activities.value;

  const lastActiveAt = new Date(state.lastActiveAt);

  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value;
};

const syncIdleSeconds = (timelineItems, lastActiveAt) => {
  const activeTimelineItem = timelineItems.find(({ isActive }) => isActive);

  if (activeTimelineItem) {
    calculateIdleSeconds(lastActiveAt);
  }

  return timelineItems;
};

const calculateIdleSeconds = (lastActiveAt) =>
  lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfHour(lastActiveAt) - lastActiveAt);

export { loadState, saveState };
