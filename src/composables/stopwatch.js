import { ref } from 'vue';

const useStopwatch = (initialSeconds) => {
  const seconds = ref(initialSeconds);

  const isRunning = ref(false);
  const temp = 120;

  const start = () => {
    isRunning.value = setInterval(() => (seconds.value += temp), 1000);
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
