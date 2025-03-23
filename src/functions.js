import {
  NAV_ITEMS,
  HOURS_IN_DAY,
  PAGE_TIMELINE,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
} from '@/constants';
import { isNull } from './validators';

const normalizePageHash = () => {
  let hash = window.location.hash.slice(1);

  if (Object.keys(NAV_ITEMS).includes(hash)) {
    return hash;
  }
  window.location.hash = PAGE_TIMELINE;
  return PAGE_TIMELINE;
};

const generateTimelineItems = () => {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour, activityId: null });
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

const generatePeriodSelectOptions = (periodsInMinutes) => {
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }));
};

export {
  id,
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  normalizeSelectValue,
  generatePeriodSelectOptions,
};
