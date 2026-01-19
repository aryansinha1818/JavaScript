//args - evrything is takes into array.

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const search = (query) => {
  console.log(`Searching for`, query);
};

const searchDebounce = debounce(search, 1000);

search("Ha");
search("Har");
search("Harr");
search("Harr");
search("Harr");
search("Harr");
