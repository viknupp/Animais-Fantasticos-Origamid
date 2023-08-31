import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import ScrollAnima from "./modules/anima-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import WorkHour from "./modules/work-hour.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

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

const scrollAnima = new ScrollAnima(".js_scroll");
scrollAnima.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const workHour = new WorkHour();
workHour.init("[data-week]", "open");

fetchAnimals("./animals-api.json", ".grid_numbers");
fetchBitcoin("https://blockchain.info/ticker", ".btc_price");
