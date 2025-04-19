import { computed } from 'vue';
import { getProgressColorClass } from '@/functions';
import { calculateActivityCompletionPercentage } from '@/activities';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';

const useProgress = (activity) => {
  const colorClass = computed(() => getProgressColorClass(percentage));

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(
      activity,
      trackedActivitySeconds.value
    )
  );

  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  );

  return {
    colorClass,
    percentage,
    trackedActivitySeconds,
  };
};

export { useProgress };
