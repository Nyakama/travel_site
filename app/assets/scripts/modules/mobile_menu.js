import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.site_header = $(".site-header");
        this.menu_icon = $(".site-header__menu-icon");
        this.menu_content = $(".site-header__menu-content");
        this.events();         
    }

    events(){
        this.menu_icon.click(this.toggle_the_menu.bind(this));
    }

    toggle_the_menu(){
        this.menu_content.toggleClass("site-header__menu-content--is-visible");
        this.site_header.toggleClass("site-header--is-expanded");
        this.menu_icon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;