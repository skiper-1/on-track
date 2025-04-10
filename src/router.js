import { ref } from 'vue';
import { isPageValid } from './validators';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constants';

const routes = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress,
};

const normalizePageHash = () => {
  let page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  }
  window.location.hash = PAGE_TIMELINE;
  return PAGE_TIMELINE;
};

const currentPage = ref(normalizePageHash());

const navigate = (page) => {
  document.body.scrollIntoView();
  currentPage.value = page;
};

export { currentPage, navigate, normalizePageHash, routes };
