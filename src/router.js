import { ref } from 'vue';
import { PAGE_TIMELINE } from './constants';
import { isPageValid } from './validators';

const normalizePageHash = () => {
  let page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  }
  window.location.hash = PAGE_TIMELINE;
  return PAGE_TIMELINE;
};

const currentPage = ref(normalizePageHash());

const timelineRef = ref();

const navigate = (page) => {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour();
  } else if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView();
  }

  currentPage.value = page;
};

export { currentPage, timelineRef, navigate, normalizePageHash };
