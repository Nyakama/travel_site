import $ from "jquery";

class Modal{
    constructor(){
        this.open_modal_button = $('.open-modal');
        this.modal = $('.modal');
        this.close_modal_button = $('.modal__close');
        this.events();
    }

    events(){
        this.open_modal_button.click(this.open_modal.bind(this));
        this.close_modal_button.click(this.close_modal.bind(this));
        $(document).keyup(this.key_press_handler.bind(this));
    }

    open_modal(){
        this.modal.addClass('modal--is-visible');
        return false;
    }

    close_modal(){
        this.modal.removeClass('modal--is-visible');
    }

    key_press_handler(e){
        if(e.keyCode == 27){
            this.close_modal();
        }
    }

}

export default Modal;