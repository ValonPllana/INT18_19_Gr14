$(function() {

    var $window = $(window), winheight = $window.height();

   $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            winheight = $window.height() ;

        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + winheight > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        
     }

    revealOnScroll();
});