import { computed, ref } from 'vue';

const activities = ref([]);

const initializeActivities = (state) => {
  activities.value = state.activities || [];
};

const totalActivitySecondsToComplete = computed(() =>
  trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
);

const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
);

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const createActivity = (activity) => {
  activities.value.push(activity);
};

const updateActivity = (activity, fields) => Object.assign(activity, fields);

const deleteActivity = (activity) => {
  activities.value.splice(activities.value.indexOf(activity), 1);
};

const calculateActivityCompletionPercentage = (
  { secondsToComplete },
  trackedSeconds
) => Math.round((trackedSeconds * 100) / secondsToComplete);

const calculateCompletionPercentage = (totalTrackedSeconds) =>
  Math.round(
    (totalTrackedSeconds * 100) / totalActivitySecondsToComplete.value
  );

const generateActivitySelectOptions = (activities) =>
  activities.map((activity) => ({
    label: activity.name,
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
