$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    window.onclick = function(event) {
        console.log(event.target);
        if (!(event.target.matches('.dropdown-btn') 
        || event.target.matches(".heart-icon") 
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
            $(".dropdown-content").fadeOut();
        }
    }
    $(".section-1-text").cycle("fade");
    const refreshRate = 1000 / 60;
    var maxXPosition = $(".section-2").css("width");
    var positionX = [];
    var positionY = [];
    var amplitude = [];
    var frequency = [];
    var startXPosition = $(".facial-sheet-with-circles-img").position().left + $(".facial-sheet-with-circles-img").width() * 0.6;
    var startYPosition = $(".facial-sheet-with-circles-img").position().top + $(".facial-sheet-with-circles-img").height() * 0.4;
    var speedX = 0.5;
    for (var i = 0; i < 9; i++) {
        positionX[i] = startXPosition + i * $(".section-2").width()/12;
        positionY[i] = startYPosition + Math.random() * 0.7 * ($(".facial-sheet-with-circles-img").height()/2);
        amplitude[i] = Math.random()*8 + 5;
        frequency[i] = Math.random()*0.03 + 0.01;
        console.log(positionX[i]);
    }
    maxXPosition = maxXPosition.substr(0, maxXPosition.length - 2);
    $(".bubble").css("left", 0);
    window.setInterval(() => {
        var newPosX, newPosY;
        $('.bubble').each(function(index){
            if ($(this).css("display") == "none") {
                $(this).show();
            }
            newPosX = positionX[index] + speedX;
            if (newPosX > maxXPosition) {
                newPosX = startXPosition;
            }
            positionX[index] = newPosX;
            newPosY = positionY[index] + amplitude[index] * Math.sin(frequency[index] * positionX[index]);
            $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
        });
    }, refreshRate);
    $(".slider").slick({
        dots: true,
        centerPadding :"50px"
    });
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();   
            $(this).children(".playpause").fadeOut();
        } else {       
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
    $('.single-item').slick();
});