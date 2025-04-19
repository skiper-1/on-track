import { ref, computed } from 'vue';
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
} from '@/constants';

const today = () => new Date();

const now = ref(today());

const secondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
);

const secondsSinceMidnight = computed(
  () => now.value - midnight.value / MILLISECONDS_IN_SECOND
);

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0));

const tomorrow = () => {
  const tomorrow = today();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0);
  return tomorrow;
};

const endOfHour = (date) => {
  const endOfHour = new Date(date);

  endOfHour.setTime(
    endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND
  );

  endOfHour.setMinutes(0, 0, 0);

  return endOfHour;
};

const isToday = (date) => today().toDateString() === date.toDateString();

const toSeconds = (milliseconds) =>
  Math.round(milliseconds / MILLISECONDS_IN_SECOND);

const startCurrentDateTimer = () =>
  setInterval(() => (now.value = today()), MILLISECONDS_IN_SECOND);

export {
  secondsSinceMidnightInPercentage,
  startCurrentDateTimer,
  now,
  today,
  tomorrow,
  isToday,
  endOfHour,
  toSeconds,
};
