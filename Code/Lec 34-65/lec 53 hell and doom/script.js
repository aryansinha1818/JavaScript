function gd(error, src) {
  if (error) {
    console.log(error);
    sendAlert();
    return;
  }
  console.log("Good Morning" + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
  gd
);
