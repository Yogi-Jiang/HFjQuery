/**
 * Created by Administrator on 2015/6/21.
 */
$(document).ready(function() {
    var FREQ = 10000;
    var repeat = true;
    var int1;

    function startAjaxcalls() {
        if (repeat) {
            int1 = setTimeout(function() {
                getXMLRacers();
                startAjaxcalls();
            }, FREQ);
        };
    }

    function getXMLRacers() {
        $.ajax({
            url: "finishers.xml",
            cache: false,
            dataType: "xml",
            success: function(xml) {
                $("#finishers_m").empty();
                $("#finishers_f").empty();
                $("#finishers_all").empty();
                $(xml).find("runner").each(function() {
                    var info = '<li>Name: ' + $(this).find("fname").text() + ' ' + $(this).find("lname").text()
                                             + '.Time: ' +$(this).find("time").text() + '</li>';
                    if ($(this).find("gender").text() == "m") {
                        $("#finishers_m").append(info);
                    } else if ($(this).find("gender").text() == "f") {
                        $("#finishers_f").append(info);
                    };
                    $("#finishers_all").append(info);
                });
                getTimeAjax();
            }
        });
    }

    function showFrequency() {
        $("#freq").html("Page refreshes every " + FREQ/1000 + " seconds.");
    }

    showFrequency();

    function getTimeAjax() {
        console.log("1");
        $('#updatedTime').load("time.php",function(response, status, xhr) {
            console.log("status:" + status);
            console.log("response:" + response);
        });
        console.log("3");
    }

    getXMLRacers();
    startAjaxcalls();

    $("#btnStop").click(function() {
        repeat = false;
        clearTimeout(int1);
        $("#freq").html("Updates paused.");
    });

    $("#btnStart").click(function() {
        repeat = true;
        startAjaxcalls();
        showFrequency();
    })
})






















































