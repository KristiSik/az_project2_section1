$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    // window.onclick = function(event) {
    //     if (!(event.target.matches('.dropdown-btn') || event.target.matches(".heart-icon") || event.target.matches(".dropdown-content-share-it"))) {
    //         $(".dropdown-content").fadeOut();
    //     }
    // }
});