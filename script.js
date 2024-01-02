document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var headerImage = document.querySelector("header>img")
    var maxScroll = window.innerHeight;
    var threshold = 30;
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var scrollPercentage = (scrollPosition / maxScroll) * 100;
        if (scrollPercentage >= 0 && scrollPercentage<=100) {
            body.style.transition = 'filter 0.5s ease-in-out';
            body.style.backdropFilter = 'grayscale(' + (scrollPercentage) + '%) blur(' + (0.5+scrollPercentage/20) + 'px)';
            header.style.backgroundColor = 'rgba(244, 206, 20,' + (0.2 + scrollPercentage/50) + ')';
        }
        if(scrollPosition<=this.window.innerHeight){
            body.style.backgroundSize = 100 + scrollPosition/40 + '%';
        }
        console.log(scrollPosition);
        if(scrollPosition > 295 - threshold) {
            header.classList.add('nav1Bar');
            headerImage.classList.remove('nav2Bar')
        }
        else if(scrollPosition <= 295 - threshold){
            header.classList.remove('nav1Bar')
            headerImage.classList.add('nav2Bar');
        }
    });
});
