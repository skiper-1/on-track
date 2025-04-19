import { computed, ref } from 'vue';
import { HUNDRED_PERCENT } from './constants';

const activities = ref([]);

const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
);

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const initializeActivities = (state) => {
  activities.value = state.activities || [];
};

const createActivity = (activity) => activities.value.push(activity);

const updateActivity = (activity, fields) => Object.assign(activity, fields);

const deleteActivity = (activity) =>
  activities.value.splice(activities.value.indexOf(activity), 1);

const calculateActivityCompletionPercentage = (
  { secondsToComplete },
  trackedSeconds
) => Math.round((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete);

const calculateCompletionPercentage = (totalTrackedSeconds) =>
  Math.round(
    (totalTrackedSeconds * HUNDRED_PERCENT) /
      totalActivitySecondsToComplete.value
  );

const totalActivitySecondsToComplete = computed(() =>
  trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
);

const capitalize = (text) => text.slice(0, 1).toUpperCase() + text.slice(1);

const generateActivitySelectOptions = (activities) =>
  activities.map((activity) => ({
    label: capitalize(activity.name),
    value: activity.id,
  }));

export {
  activities,
  initializeActivities,
  createActivity,
  updateActivity,
  deleteActivity,
  activitySelectOptions,
  trackedActivities,
  calculateActivityCompletionPercentage,
  calculateCompletionPercentage,
};
