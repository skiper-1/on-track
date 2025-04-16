import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
} from '@/constants';
import { ref, computed } from 'vue';

const today = () => {
  const today = new Date();

  today.setHours(0, 0);

  return today;
};

const tomorrow = () => {
  const tomorrow = today();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0);
  return tomorrow;
};

const isToday = (date) => today().toDateString() === date.toDateString();

const now = ref(today());

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0));

const secondsSinceMidnight = computed(
  () => now.value - midnight.value / MILLISECONDS_IN_SECOND
);

const secondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
);

let currentDateTimer = null;

const startCurrentDateTimer = () => {
  now.value = today();

  currentDateTimer = setInterval(() => {
    now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND);
  }, MILLISECONDS_IN_SECOND);
};

const stopCurrentDateTimer = () => clearInterval(currentDateTimer);

const endOfHour = (date) => {
  const endOfHour = new Date(date);

  endOfHour.setTime(
    endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND
  );

  endOfHour.setMinutes(0, 0, 0);

  return endOfHour;
};

const toSeconds = (milliseconds) =>
  Math.round(milliseconds / MILLISECONDS_IN_SECOND);

export {
  secondsSinceMidnightInPercentage,
  startCurrentDateTimer,
  stopCurrentDateTimer,
  now,
  today,
  tomorrow,
  isToday,
  endOfHour,
  toSeconds,
};
