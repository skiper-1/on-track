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
