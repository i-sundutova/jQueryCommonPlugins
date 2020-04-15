(function ($) {
    $.fn.menuDropdown = function (options) {
        if (this.length === 0) return this;

        var settings = $.extend(true, {}, $.fn.menuDropdown.defaults, options);

        return this.each(function () {
            var $this = $(this);

            $this.click(function (e) {
                var $target = $(e.target);
                if ($target.closest(settings.trigger + settings.dropDownContent).length > 0) return; // prevent closing on click on inner content

                if (!$this.is('.' + settings.openedClass)) {
                    $(settings.trigger).removeClass(settings.openedClass); // if this element is not only one

                    $this.addClass(settings.openedClass);
                }
                else {
                    $this.removeClass(settings.openedClass);
                }
            });

            $(window).on('click', function (e) {  // close when click outside the menu on window
                if (!$(settings.trigger).is('.opened')) return;

                if ($(e.target).closest(settings.trigger).length <= 0) {
                    $(settings.trigger).removeClass(settings.openedClass);
                }
            });
        });
    };

    $.fn.menuDropdown.defaults = {
        trigger: '.language-switcher',
        dropDownContent: '> ul',
        openedClass: 'opened'
    };
})(jQuery);
