import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initWorkHour from "./modules/work-hour.js";
import fetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('.js_menu a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion(".js_accordion dt");
accordion.init();

const tabNav = new TabNav(".js_tabMenu li", ".js_tabContent section");
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initAnimaScroll();
initDropDownMenu();
initMenuMobile();
initWorkHour();
initFetchBitcoin();

fetchAnimals("../../animals-api.json", ".grid_numbers");
