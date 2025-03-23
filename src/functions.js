import {
  NAV_ITEMS,
  HOURS_IN_DAY,
  PAGE_TIMELINE,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
} from '@/constants';

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
    timelineItems.push({ hour });
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

export {
  id,
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
};
