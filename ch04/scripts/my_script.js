/**
 * Created by Administrator on 2015/6/15.
 */
$(document).ready(function() {
    var v = false;
    $("button#vegOn").click(function() {
        if (v == false) {
            $f = $("li.fish").parent().parent().detach();
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
            $m = $(".meat").detach();
            $(".tofu").parent().parent().addClass("veg_leaf");
            v = true;
        };
    });
    $("button#restoreMe").click(function() {
        if (v == true) {
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            $(".tofu").each(function(i) {
                $(this).after($m[i]);
            });
            $(".tofu").remove();
            v = false;
        };
    });
})