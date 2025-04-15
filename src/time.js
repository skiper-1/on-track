import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
} from '@/constants';
import { ref, computed } from 'vue';

const date = new Date();

date.setHours(0, 0);

const now = ref(date);

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0));

const secondsSinceMidnight = computed(
  () => now.value - midnight.value / MILLISECONDS_IN_SECOND
);

const secondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
);

let timer = null;

const startTimer = () => {
  now.value = new Date();

  timer = setInterval(() => {
    now.value = new Date(now.value.getTime() * MILLISECONDS_IN_SECOND);
  }, MILLISECONDS_IN_SECOND);
};

const stopTimer = () => clearInterval(timer);

export { secondsSinceMidnightInPercentage, startTimer, stopTimer, now };
