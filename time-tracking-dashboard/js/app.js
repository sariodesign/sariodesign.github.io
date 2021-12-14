import fetchTime from "./js/fetchTime.js";

fetchTime();

const timeTabs = document.querySelectorAll(".tab-item");

timeTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    timeTabs.forEach((el) => el.classList.remove("active"));
    let tabSelected = e.target;
    tabSelected.classList.add("active");
    let timeReference = tabSelected.dataset.timeRef;
    fetchTime(timeReference);
  });
});