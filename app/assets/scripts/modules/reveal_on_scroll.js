import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset){
        this.items_to_reveal = els;
        this.offset_percentage = offset;
        this.hide_initially();
        this.create_waypoints();        
    }

    hide_initially(){
        this.items_to_reveal.addClass("reveal-item");
    }

    create_waypoints(){
        var that = this;
        this.items_to_reveal.each(function(){            
            var current_item = this;
            new Waypoint({
                element: current_item,
                handler: function(){
                    $(current_item).addClass("reveal-item--is-visible");
                },
                offset: that.offset_percentage
            });
        });
    }

}

export default RevealOnScroll;