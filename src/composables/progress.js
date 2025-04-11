import { computed } from 'vue';
import { calculateActivityCompletionPercentage } from '@/activities';
import { getColorClass } from '@/functions';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';

const useProgress = (activity) => {
  const colorClass = computed(() => getColorClass(percentage));

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackedSeconds.value)
  );

  const trackedSeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  );

  return {
    colorClass,
    percentage,
    trackedSeconds,
  };
};

export { useProgress };
