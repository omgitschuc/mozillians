var app = {
    Profiles: null
}; // Let's namespace our app's functions in here.

(function($) {
    $().ready(function() {
        $('html').removeClass('no-js').addClass('js');

        // Return the current locale (found in the body attribute
        // as a data attribute).
        app.locale = $('body').data('locale');

        // Return a localized URL.
        app.localeUrl = function(url) {
            return '/' + app.locale + '/' + url.toString();
        };

        // Apply language change once another language is selected
        $('#language').change(function() {
            $('#language-switcher').submit();
        });

        // Footer hovers when window width is greater than 480px
        var getWinWidth = $(window).width();
        if(getWinWidth > 480){
	  var footerH = $("footer").height();
          var footContainerH = $("footer .container").height();
          $("#main.container").css("padding-bottom", footerH);
          $("footer").css({"bottom":-footContainerH, position:"fixed"});
          $("footer").hover(function() {
            $(this).animate({bottom:"0"}, 1000);
          }, function() {
            $(this).animate({"bottom":-footContainerH}, 1000);
          });
        }
        $("footer").css({visibility:"visible"});
    });
})(jQuery);
