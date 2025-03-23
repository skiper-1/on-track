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

const SECONDS_IN_HOUR = 3600;
const MIDNIGHT_HOUR = 0;
const HOURS_IN_DAY = 24;

const PERIOD_SELECT_OPTIONS = [
  {
    value: 15,
    label: '00:15',
  },
  {
    value: 30,
    label: '00:30',
  },
  {
    value: 45,
    label: '00:45',
  },
  {
    value: 60,
    label: '01:00',
  },
];

const BUTTON_TYPE_DANGER = 'danger';
const BUTTON_TYPE_NEUTRAL = 'neutral';
const BUTTON_TYPE_ACCEPT = 'accept';

const BUTTONS_TYPES = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
];

export {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  NAV_ITEMS,
  MIDNIGHT_HOUR,
  HOURS_IN_DAY,
  PERIOD_SELECT_OPTIONS,
  BUTTONS_TYPES,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
  SECONDS_IN_HOUR,
};
