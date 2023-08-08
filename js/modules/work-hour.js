export default function initWorkHour() {
  const work = document.querySelector("[data-week]");
  const weekDays = work.dataset.week.split(",").map(Number);
  const weekHour = work.dataset.time.split(",").map(Number);

  const nowDate = new Date();
  const dayNow = nowDate.getDay();
  const timeNow = nowDate.getHours();

  const openDay = weekDays.indexOf(dayNow) !== -1;
  const openTime = timeNow >= weekHour[0] && timeNow < weekHour[1];

  if (openDay && openTime) {
    work.classList.add("open");
  }
}
