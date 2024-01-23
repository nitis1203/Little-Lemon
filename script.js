document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var maxScroll = window.innerHeight;
    var isColorMode = false;

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var scrollPercentage = (scrollPosition / maxScroll) * 100;

        if (scrollPercentage >= 0 && scrollPercentage <= 100) {
            body.style.backdropFilter = 'blur(' + (0.5+scrollPercentage/20) + 'px)';
            header.style.backgroundColor = 'rgba(244, 206, 20,' + (scrollPercentage/50) + ')';
        }

        if(scrollPosition <= this.window.innerHeight){
            body.style.backgroundSize = 100 + scrollPosition/40 + '%';
        }

        var logo = document.getElementById("logo");
        if(scrollPosition > 50) {
            logo.style.transform = 'translateX(0)';
        } else {
            logo.style.transform = 'translateX(-150%)';
        }
    });
});
/*end*/
