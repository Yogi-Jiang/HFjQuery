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
                getDBRacers();
                startAjaxcalls();
            }, FREQ);
        };
    }

    function getDBRacers() {
        $.getJSON("service.php?action=getRunners", function(json) {
            if (json.runners.length > 0) {
                $("#finishers_m").empty();
                $("#finishers_f").empty();
                $("#finishers_all").empty();
                $.each(json.runners, function() {
                    var info = '<li>Name: ' + this['fname'] + ' ' + this['lname'] + '.Time: ' +this['time'] + '</li>';
                    if (this['gender'] == "m") {
                        $("#finishers_m").append(info);
                    } else if (this['gender'] == "f") {
                        $("#finishers_f").append(info);
                    };
                    $("#finishers_all").append(info);
                });
            }
        });
        getTimeAjax();
    }
    function showFrequency() {
        $("#freq").html("Page refreshes every " + FREQ/1000 + " seconds.");
    }

    showFrequency();

    function getTimeAjax() {
        $('#updatedTime').load("time.php");
    }

    getDBRacers();
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
    });

    $("#btnSave").click(function() {
        var data = $("#addRunner :input").serializeArray();
        $.post($("#addRunner").attr("action"), data, function(json) {
            if (json.status == "fail") {
                alert(json.message);
            };
            if (json.status == "success") {
                alert(json.message);
               clearInputs();
            }
        }, "json");
    });

    function clearInputs() {
        $("#txtFirstName").val('');
        $("#txtLastName").val('');
        $("#ddlGender").val('');
        $("#txtMinutes").val('');
        $("#txtSeconds").val('');
    }

    $("#addRunner").submit(function() {
        return false;
    })
})






















































