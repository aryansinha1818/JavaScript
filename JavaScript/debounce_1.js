function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function search(text) {
  console.log("Searching: ", text);
}

const debouncedSearch = debounce(search, 500);

// call many times
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");

// Input handler
// input.addEventListener("keyup", (e) => {
//   debouncedSearch(e.target.value);
// });
