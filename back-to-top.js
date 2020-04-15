(function ($) {
    $.fn.backToTop = function (options) {
        if (this.length === 0) return this;

        var settings = $.extend(true, {}, $.fn.backToTop.defaults, options);
        
        return this.each(function () {
            var $this = $(this);
            
            if ($this.data('backToTop.initialized') === true) return;
            $this.data('backToTop.initialized', true);
            
            var $window = $(window), $htmlAndBody = $("html, body");

            function onClick() {
                $this.off();
                $htmlAndBody.animate({ scrollTop: 0 }, settings.duration);
            }

            $window.scroll(function () {
                if ($window.scrollTop() > settings.offset) {
                    if (!$this.is(":visible")) {
                        $this.fadeIn();
                        $this.on("click", onClick);
                    }
                } else {
                    if ($this.is(":visible")) {
                        $this.off();
                        $this.fadeOut();
                    }
                }
            });
        });
    };
    
    $.fn.backToTop.defaults = { offset: 600, duration: 600 };
})(jQuery);
