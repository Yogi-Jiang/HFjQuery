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

});





























