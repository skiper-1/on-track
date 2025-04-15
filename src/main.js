import './assets/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import { loadState, saveState } from './storage';
import {
  findActiveTimelineItem,
  startTimelineItemTimer,
} from './timileneItems';

loadState();

const activeTimelineItem = findActiveTimelineItem();

if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem);
}

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'hidden' ? saveState() : loadState()
);

createApp(App).mount('#app');
