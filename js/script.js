$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    // window.onclick = function(event) {
    //     if (!(event.target.matches('.dropdown-btn') || event.target.matches(".heart-icon") || event.target.matches(".dropdown-content-share-it"))) {
    //         $(".dropdown-content").fadeOut();
    //     }
    // }
    $(".section-1-text").cycle("fade");
    const refreshRate = 1000 / 60;
    const maxXPosition = 4000;
    let rect = $('.bubble');
    let speedX = 1;
    let positionX = 0;
    window.setInterval(() => {
        $('.bubble').each(function(){
            positionX = positionX + speedX;
            if (positionX > maxXPosition || positionX < 0) {
                speedX = speedX * (-1);
            }
            $(this).css("left", positionX + 'px');
        });
    }, refreshRate);
});