import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smooth_scroll from 'jquery-smooth-scroll';

class StickyHaeder{
    constructor(){
        this.lazy_images = $('.lazyload');
        this.site_header = $(".site-header");
        this.header_trigger_element = $(".large-hero__title");
        this.create_header_waypoint();
        this.page_sections = $(".page-section"); 
        this.header_links = $(".primary-nav a");
        this.create_page_section_waypoint();
        this.add_smooth_scrolling();
        this.refresh_waypoints();
    }

    refresh_waypoints(){
        this.lazy_images.on('load', function(){
            Waypoint.refreshAll();
        })
    }

    add_smooth_scrolling(){
        this.header_links.smooth_scroll;
    }

    create_header_waypoint(){
        var that = this;
        new Waypoint({
            element: this.header_trigger_element[0],
            handler: function(direction){
                if(direction == "down"){
                    that.site_header.addClass("site-header--dark");
                }else{
                    that.site_header.removeClass("site-header--dark");
                }
            }
        });
    }

    create_page_section_waypoint(){
        var that = this;
        this.page_sections.each(function(){
            var current_page_section = this;
            new Waypoint({
                element: current_page_section,
                handler: function(direction){
                    if (direction == "down"){
                        var matching_header_link = current_page_section.getAttribute("data-matching-link");
                        that.header_links.removeClass("is-current-link");
                        $(matching_header_link).addClass("is-current-link");
                    }
                    
                },
                offset: "28%"
            });

            new Waypoint({
                element: current_page_section,
                handler: function(direction){
                    if (direction == "up"){
                        var matching_header_link = current_page_section.getAttribute("data-matching-link");
                        that.header_links.removeClass("is-current-link");
                        $(matching_header_link).addClass("is-current-link");
                    }
                    
                },
                offset: "-80%"
            });
        });
    }
}

export default StickyHaeder;