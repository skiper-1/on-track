import './assets/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import * as storage from '@/storage';
import { timelineItems } from './timileneItems';
import { activities } from './activities';

const saveState = () => {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  });
};

const loadState = () => {
  const state = storage.load();

  timelineItems.value = state.timelineItems;
  activities.value = state.activities;
};

loadState();

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'hidden' ? saveState() : loadState()
);

createApp(App).mount('#app');
