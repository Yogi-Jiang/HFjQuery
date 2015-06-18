/**
 * Created by Administrator on 2015/6/16.
 */
$(document).ready(function() {
    var headclix = 0;
    var eyesclix = 0;
    var noseclix = 0;
    var mouthclix = 0;
    setInterval(lightning_one, 3000);
    setInterval(lightning_two, 4000);
    setInterval(lightning_three, 5000);

    $("#head").click(function() {
        if (headclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            headclix++;
        } else {
            $(this).animate({left:"0px"}, 500);
            headclix = 0;
        };
    });

    $("#eyes").click(function() {
        if (eyesclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            eyesclix++;
        } else {
            $(this).animate({left:"0px"}, 500);
            eyesclix = 0;
        };
    });

    $("#nose").click(function() {
        if (noseclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            noseclix++;
        } else {
            $(this).animate({left:"0px"}, 500);
            noseclix = 0;
        };
    });

    $("#mouth").click(function() {
        if (mouthclix < 9) {
            $(this).animate({left:"-=367px"}, 500);
            mouthclix++;
        } else {
            $(this).animate({left:"0px"}, 500);
            mouthclix = 0;
        };
    });

    function lightning_one(t) {
        $("#lightning1").fadeIn(250).fadeOut(250);
    }

    function lightning_two(t) {
        $("#lightning2").fadeIn("fast").fadeOut("fast");
    }

    function lightning_three(t) {
        $("#lightning3").fadeIn("fast").fadeOut("fast");
    }
});






























































