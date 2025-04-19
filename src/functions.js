import {
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  HUNDRED_PERCENT,
} from '@/constants';
import { isNull } from './validators';

const formatSecondsWithSign = (seconds) =>
  `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`;

const formatSeconds = (seconds) => {
  const date = new Date();

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND);

  const utc = date.toUTCString();

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6);
};

const normalizeSelectValue = (value) =>
  isNull(value) || isNaN(value) ? value : +value;

const getProgressColorClass = (percent) => {
  if (percent < LOW_PERCENT) return 'bg-red-500';
  if (percent < MEDIUM_PERCENT) return 'bg-yellow-500';
  if (percent < HUNDRED_PERCENT) return 'bg-green-500';

  return 'bg-blue-500';
};

const id = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

const generatePeriodSelectOptions = () => {
  const periodsInMinutes = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420,
    450, 480,
  ];

  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }));
};

const generatePeriodSelectOptionsLabel = (periodInMinutes) => {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0);

  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0);

  return `${hours}:${minutes}`;
};

export {
  id,
  normalizeSelectValue,
  generatePeriodSelectOptions,
  formatSeconds,
  formatSecondsWithSign,
  getProgressColorClass,
};
