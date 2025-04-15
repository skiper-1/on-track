import { ref } from 'vue';

const useStopwatch = (initialSeconds) => {
  const seconds = ref(initialSeconds);

  const isRunning = ref(false);

  const start = () => {
    isRunning.value = setInterval(() => {
      seconds.value++;
    }, 1000);
  };

  const stop = () => {
    clearInterval(isRunning.value);
    isRunning.value = false;
  };

  const reset = () => {
    stop();

    seconds.value = 0;
  };

  return { seconds, isRunning, start, stop, reset };
};

export { useStopwatch };
