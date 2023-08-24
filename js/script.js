import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initWorkHour from "./modules/work-hour.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('.js_menu a[href^="#"]');
smoothScroll.init();

initAnimaScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initWorkHour();
initFetchAnimals();
initFetchBitcoin();
