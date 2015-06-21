/**
 * Created by Administrator on 2015/6/16.
 */
$(document).ready(function() {
    var clix = [0, 0, 0, 0];


    goLightning();
    window.onfocus = goLightning;
    window.onblur = stopLightning;
    var int1, int2, int3;
    function goLightning() {
        //code for starting lightning.
        int1 = setInterval(function(){
            lightning_one();
        }, 4000);

        int2 = setInterval(function(){
            lightning_two();
        }, 5000);

        int3 = setInterval(function(){
            lightning_three();
        }, 7000);
    }
    function stopLightning() {
        //code for stopping lightning.
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    }

    function moveMe(i, obj) {
        if (clix[i] < 9) {
            $(obj).animate({left:"-=367px"}, 500);
            clix[i]++;
        } else {
            $(obj).animate({left:"0px"}, 500);
            clix[i] = 0;
        }
    }
    $("#head").click(function() {
        moveMe(0, this);
    });

    $("#eyes").click(function() {
        moveMe(1, this);
    });

    $("#nose").click(function() {
        moveMe(2, this);
    });

    $("#mouth").click(function() {
        moveMe(3, this);
    });

    function lightning_one() {
        $("#lightning1").fadeIn(250).fadeOut(250);
    }

    function lightning_two() {
        $("#lightning2").fadeIn("fast").fadeOut("fast");
    }

    function lightning_three() {
        $("#lightning3").fadeIn("fast").fadeOut("fast");
    }

    var width = 367;
    $("#mix").click(function() {
        $(".face").each(function(i) {
            var randNum = Math.floor(Math.random() * 10);
            clix[i] = (clix[i] + randNum) % 10;
            var left = clix[i] * (-width) + "px";
            $(this).animate({left:left}, 500);
        });
    });

    $("#restart").click(function() {
        clix = [0, 0, 0, 0];
        $(".face").each(function() {
            $(this).animate({left:"0px"}, 500);
        });
    });
});






























































