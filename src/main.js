import './assets/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import { loadState, saveState } from './storage';
import { activeTimelineItem, startTimelineItemTimer } from './timileneItems';

loadState();

if (activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value);
}

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'hidden' ? saveState() : loadState()
);

createApp(App).mount('#app');
