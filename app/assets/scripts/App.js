import MobileMenu from './modules/mobile_menu';
import RevealOnScroll from './modules/reveal_on_scroll';
import $ from 'jquery';
import StickyHeader from './modules/sticky_header';
import Modal from './modules/modal';


var mobile_menu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var sticky_header = new StickyHeader();
var modal = new Modal();

/*___________________________________________________________________________________________________________ */



/*___________________________________________________________________________________________________________ */


