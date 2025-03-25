import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { ChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline';
import { generatePeriodSelectOptions } from './functions';

const PAGE_TIMELINE = 'timeline';
const PAGE_ACTIVITIES = 'activities';
const PAGE_PROGRESS = 'progress';

const NAV_ITEMS = [
  {
    page: PAGE_TIMELINE,
    icon: ClockIcon,
  },
  { page: PAGE_ACTIVITIES, icon: ListBulletIcon },
  { page: PAGE_PROGRESS, icon: ChartBarIcon },
];

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MILLISECONDS_IN_SECOND = 1000;
const MIDNIGHT_HOUR = 0;
const HOURS_IN_DAY = 24;

const BUTTON_TYPE_DANGER = 'danger';
const BUTTON_TYPE_NEUTRAL = 'neutral';
const BUTTON_TYPE_ACCEPT = 'accept';
const BUTTON_TYPE_PLAY = 'play';
const BUTTON_TYPE_PAUSE = 'pause';
const BUTTON_TYPE_RESET = 'reset';

const BUTTONS_TYPES = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
  BUTTON_TYPE_PAUSE,
  BUTTON_TYPE_PLAY,
  BUTTON_TYPE_RESET,
];

const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions();

export {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  NAV_ITEMS,
  MIDNIGHT_HOUR,
  HOURS_IN_DAY,
  BUTTONS_TYPES,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
  BUTTON_TYPE_PAUSE,
  BUTTON_TYPE_PLAY,
  BUTTON_TYPE_RESET,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  PERIOD_SELECT_OPTIONS,
};
