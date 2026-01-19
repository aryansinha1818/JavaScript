//callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading with script");
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

function fun1(error, src) {
  if (error) {
    console.log("Error");
    return;
  }
  console.log("hello 1" + src);
}
function fun2(error, src) {
  console.log("hello 2" + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  fun1
);
