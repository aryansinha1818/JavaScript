document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName(
  "nav"
)[0].firstElementChild.nextElementSibling.style.color = "green";
// let lasEle = document.querySelector("nav li:nth-child(3) ");
// lasEle.style.color = "blue";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "c";
});
