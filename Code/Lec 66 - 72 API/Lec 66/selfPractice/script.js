let p = fetch("https://api.weather.gov/alerts/active?area=KS");
p.then((value1) => {
  console.log(value1.status);
  console.log(value1.ok);
  //   console.log(value1.text());
  // anyone of the above and below
  return value1.json();
}).then((value2) => {
  console.log(value2);
});
