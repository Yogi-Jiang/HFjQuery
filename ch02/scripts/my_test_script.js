/**
 * Created by Administrator on 2015/6/15.
 */
$(document).ready(function() {
    $("#btn1").click(function() {
        $("#header").addClass("hover");
        $("#header").removeClass("no_hover");
    });
    $("#btn2").click(function() {
        $("#header").addClass("no_hover");
        $("#header").removeClass("hover");
    });
})