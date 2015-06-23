/**
 * Created by wanjie on 2015/6/23.
 */
$(document).ready(function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });

    $("#type_select").buttonset();

    $("#slide_dist").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 10,
        slide: function(event, ui) {
            $("#distance").val(ui.value);
        }
    });

    $("#slide_weight").slider({
        value: 0,
        min: 0,
        max: 5000,
        step: 5,
        slide: function(event, ui) {
            $("#weight").val(ui.value);
        }
    });

    $("#slide_height").slider({
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function(event, ui) {
            $("#height").val(ui.value);
        }
    });

    $("#slide_latitude").slider({
        value: 0,
        min: -90,
        max: 90,
        step: 0.000011,
        slide: function(event, ui) {
            $("#latitude").val(ui.value);
        }
    });

    $("#slide_longitude").slider({
        value: 0,
        min: -180,
        max: 180,
        step: 0.00001,
        slide: function(event, ui) {
            $("#longitude").val(ui.value);
        }
    });

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        value: 127,
        range: "min",
        max: 255,
        slide: refreshSwatch,
        change: refreshSwatch
    });

    function refreshSwatch() {
        var red = $("#red").slider("value");
        var green = $("#green").slider("value");
        var blue = $("#blue").slider("value");
        var my_rgb = "rgb(" + red + "," + green + "," + blue + ")";
        $("#swatch").css("background-color", my_rgb);
        $("#red_val").val(red);
        $("#green_val").val(green);
        $("#blue_val").val(blue);

    }

    $("#red").slider("value", 127);
    $("#green").slider("value", 127);
    $("#blue").slider("value", 127);

    $("button:submit").button();

});





























