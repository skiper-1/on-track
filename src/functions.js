import {
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from '@/constants';
import { isNull } from './validators';

const id = () => Math.random().toString(36).slice(2);

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

const currentHour = () => new Date().getHours();

export {
  id,
  normalizeSelectValue,
  generatePeriodSelectOptions,
  formatSeconds,
  currentHour,
};
