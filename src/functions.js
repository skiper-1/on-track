import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from '@/constants';
import { isNull } from './validators';

const generateTimelineItems = (activities) => {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,

      activityId: [0, 1, 2, 3, 4].includes(hour)
        ? activities[hour % 3].id
        : null,
      activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 300 : 0,
    });
  }
  return timelineItems;
};

const generateActivitySelectOptions = (activities) =>
  activities.map((activity) => ({ label: activity.name, value: activity.id }));

const id = () => Math.random().toString(36).slice(2);

const generateActivities = () => {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name: name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }));
};

const normalizeSelectValue = (value) =>
  isNull(value) || isNaN(value) ? value : +value;

const generatePeriodSelectOptionsLabel = (periodInMinutes) => {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0);

  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0);

  return `${hours}:${minutes}`;
};

const generatePeriodSelectOptions = () => {
  const periodsInMinutes = [15, 30, 45, 60, 90, 120, 150, 180];

  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }));
};

const formatSeconds = (seconds) => {
  const date = new Date();

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND);

  const utc = date.toUTCString();

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6);
};

const getTotalActivitySeconds = (activity, timelineItems) => {
  return timelineItems
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) =>
        Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    );
};

const currentHour = () => new Date().getHours();

export {
  id,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  normalizeSelectValue,
  generatePeriodSelectOptions,
  formatSeconds,
  getTotalActivitySeconds,
  currentHour,
};
