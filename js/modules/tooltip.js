export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = createTooltipBox(this);

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };

    const onMouseLeave = {
      tooltipBox: "",
      element: "",
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    onMouseMove.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
