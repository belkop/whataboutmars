$(document).ready(function() {



    $("#button-1").click(function() {
        $("#sectionOnetext1").slideToggle("slow");
        $("#button-hide1").click(function() {
            $("#sectionOnetext1").hide("fast");
        });

    });

    $("#button-2").click(function() {
        $("#sectionOnetext2").slideToggle("slow");
        $("#button-hide2").click(function() {
            $("#sectionOnetext2").hide("fast");
        });
    });

    $("#button-3").click(function() {
        $("#sectionOnetext3").slideToggle("slow");
        $("#button-hide3").click(function() {
            $("#sectionOnetext3").hide("fast");
        });
    });


});

/*this function is for a carousel on the index page of the site*/


var images = [
    "assets/images/slider1.jpg",
    "assets/images/slider2.jpg",
    "assets/images/slider3.jpg",
    "assets/images/slider4.jpg",
]
var actImg = 0; //index of actual image

function changeImage(a) {
    document.getElementById("img").src=a;
}



/*on click next button display the next image in the array .*/
$("#click-imageright").click(function() {
    if (actImg < images.length-1) { // if last image is displayed, jump to first
        actImg++;
    } else {
        actImg = 0;
    }

    var imageString = "url('" + images[actImg] + "')";
    $('header').css({
        'background-image'  : "url('" + images[actImg] + "')",
        'background-repeat' : 'no-repeat',
        'transition' : 'all 0.6s ease'
    });
});

 $("#clickimageleft").click(function(){
    console.log("this click is working for button");
//on the click button I want the next image to be the last image in the array.
   if (actImg > 0){
        actImg--;
    } else {
        actImg=3;
    }

    var imageString = "url('" + images[actImg] + "')";
    $('header').css({
        'background-image'  : "url('" + images[actImg] + "')",
        'background-repeat' : 'no-repeat',
        'transition' : 'all 0.6s ease'
    });
  });














