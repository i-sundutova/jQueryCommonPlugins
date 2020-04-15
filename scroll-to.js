(function ($) {
    $.fn.scrollTo = function (options) {
        if (this.length === 0) return this;

        var settings = $.extend(true, {}, $.fn.scrollTo.defaults, options);

        return this.each(function () {
            var $this = $(this);

            if ($this.data('scrollTo.initialized') === true) return;
            $this.data('scrollTo.initialized', true);

            $this.click(function () {
                var $target = $($this.attr('data-scroll-to'));
                if ($target.length === 0) return true;

                $('html, body').animate({ scrollTop: $target.offset().top + settings.offset }, settings.duration);
                return false;
            });
        });
    };

    $.fn.scrollTo.defaults = { offset: -50, duration: 600 };
})(jQuery);    
