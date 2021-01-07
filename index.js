jQuery(document).ready(function($) {
    "use strict";

    var navBar = function() {
        $('.nav-varbar').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'varbar-view').appendTo('.mob-v-bod');
        });

        $('body').on('click', '.navbar-toggle', function(e){
            var $this = $(this);
            e.preventDefault();

            if($('body').hasClass('off-view')){
                $('body').removeClass('off-view');
            } else {
                $('body').addClass('off-view');
            }
        })

        $(document).mouseup(function(e) {
            var container = $('.mod-v');
            if(!container.is(e.target) && container.has(e.target).length === 0) {
                if($('body').hasClass('off-view')) {
                    $('body').removeClass('off-view');
                }
            }
        });

        $(window).resize(function() {
            var $this = $(this),
            w = $this.width();
            if(w > 768) {
                if($('body').hasClass('off-view')) {
                    $('body').removeClass('off-view');
                }
            }
        });
    }
    navBar();
});