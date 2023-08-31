export default class WorkHour {
  constructor(work, activeClass) {
    this.work = document.querySelector(work);
    this.activeClass = activeClass;
  }

  workData() {
    this.weekDays = this.work.dataset.week.split(",").map(Number);
    this.weekHour = this.work.dataset.time.split(",").map(Number);
  }

  nowData() {
    this.nowDate = new Date();
    this.dayNow = this.nowDate.getDay();
    this.timeNow = this.nowDate.getUTCHours() - 3;
  }

  isOpen() {
    const openDay = this.weekDays.indexOf(this.dayNow) !== -1;
    const openTime =
      this.timeNow >= this.weekHour[0] && this.timeNow < this.weekHour[1];
    return openDay && openTime;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.work.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.work) {
      this.workData();
      this.nowData();
      this.activeOpen();
    }
    return this;
  }
}
