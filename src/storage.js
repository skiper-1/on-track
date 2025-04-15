import { activities } from './activities';
import { APP_NAME, MILLISECONDS_IN_SECOND, SECONDS_IN_HOUR } from './constants';
import { today } from './time';
import { timelineItems } from './timileneItems';
import { isToday } from './time';

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

const calculateIdleSeconds = (lastActiveAt) => {
  let idleMilliseconds = today() - lastActiveAt;

  if (lastActiveAt.getHours() !== today().getHours()) {
    idleMilliseconds = getEndOfIdleHour(lastActiveAt) - lastActiveAt;
  }

  return idleMilliseconds / MILLISECONDS_IN_SECOND;
};

const getEndOfIdleHour = (lastActiveAt) => {
  const endOfIdleHour = new Date(lastActiveAt);

  endOfIdleHour.setTime(
    endOfIdleHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND
  );

  endOfIdleHour.setMinutes(0, 0, 0);

  return endOfIdleHour;
};

export { loadState, saveState };
