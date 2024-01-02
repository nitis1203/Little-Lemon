document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector("body");
    var maxScroll = window.innerHeight;
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var scrollPercentage = (scrollPosition / maxScroll) * 100;
        if (scrollPercentage > 0) {
            body.style.transition = 'filter 0.5s ease-in-out';
            body.style.backdropFilter = 'grayscale(' + (scrollPercentage) + '%)';
        }
        else {
            body.style.transition = 'none';
            body.style.backdropFilter = 'none';
        }
        if(scrollPosition<=this.window.innerHeight){
            body.style.backgroundSize = 100 + scrollPosition/40 + '%';
        }
    });
});
