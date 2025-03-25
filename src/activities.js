import { id } from '@/functions';
import { computed, ref } from 'vue';
import { SECONDS_IN_HOUR } from './constants';

const generateActivities = () => {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name: name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }));
};

const activities = ref(generateActivities());

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
);

const deleteActivity = (activity) => {
  activities.value.splice(activities.value.indexOf(activity), 1);
};

const createActivity = (activity) => {
  activities.value.push(activity);
};

const setActivitySecondsToComplete = (activity, secondsToComplete) => {
  activity.secondsToComplete = secondsToComplete || 0;
};

const generateActivitySelectOptions = (activities) =>
  activities.map((activity) => ({ label: activity.name, value: activity.id }));

export {
  activities,
  createActivity,
  deleteActivity,
  activitySelectOptions,
  setActivitySecondsToComplete,
};
