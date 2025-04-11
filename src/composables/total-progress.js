import { computed } from 'vue';
import { calculateCompletionPercentage, trackedActivities } from '@/activities';
import { getColorClass } from '@/functions';
import {
  calculateTrackedActivitySeconds,
  timelineItems,
} from '@/timileneItems';

const useTotalProgress = () => {
  const colorClass = computed(() => getColorClass(percentage));

  const percentage = computed(() =>
    calculateCompletionPercentage(totalTrackedSeconds.value)
  );

  const totalTrackedSeconds = computed(() =>
    trackedActivities.value
      .map((activity) =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete
        )
      )
      .reduce((total, seconds) => total + seconds, 0)
  );

  return {
    colorClass,
    percentage,
  };
};

export { useTotalProgress };
