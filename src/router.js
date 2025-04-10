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

const navigate = (page) => {
  document.body.scrollIntoView();
  currentPage.value = page;
};

export { currentPage, navigate, normalizePageHash };
