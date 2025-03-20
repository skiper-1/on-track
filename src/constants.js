import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { ChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline';

const PAGE_TIMELINE = 'timeline';
const PAGE_ACTIVITIES = 'activities';
const PAGE_PROGRESS = 'progress';

const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};

const MIDNIGHT_HOUR = 0;
const HOURS_IN_DAY = 24;

export {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  NAV_ITEMS,
  MIDNIGHT_HOUR,
  HOURS_IN_DAY,
};
