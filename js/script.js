$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    window.onclick = function(event) {
        if (!(event.target.matches('.dropdown-btn') || (event.target.matches(".heart-icon")))) {
            $(".dropdown-content").fadeOut();
        }
      }
});;