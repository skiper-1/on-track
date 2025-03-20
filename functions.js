import {
  NAV_ITEMS,
  HOURS_IN_DAY,
  PAGE_TIMELINE,
  MIDNIGHT_HOUR,
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

export { normalizePageHash, generateTimelineItems };
