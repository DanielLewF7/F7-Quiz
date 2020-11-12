$(document).ready(function() {
    var punkte = 0;
    $(".quizbtn").click(function () {
        $(".NewQ").addClass("Stage1");
    });
    $(".back").click(function () {
        location.reload();
        location.reload(true);
    });
    $(".btn-box2 .interface-1").click(function () {
        if ($(this).text() == "7") {
            $(".right").show();
            punkte++;
            $(".false").hide();
        } else {
            $(".false").show();
            $(".right").hide();
        }
        $(".nextq").show();
    });
    $(".nextq").click(function () {
        $('.firstq').html('Wer hat JavaScript erfunden ?');
        $(".interface-1").hide();
        $(".interface-2").show();
        $(".right").hide();
        $(".false").hide();
    });
    $(".interface-2").click(function () {
        $(".false").hide();
        $(".right").hide();
        if ($(this).text() == "Brendan-Eich") {
            $(".right").show();
            punkte++;

        } else {
            $(".false").show();
        }
        $(".nextq2").show();
        $(".nextq").hide();
    });
    $(".interface-3").click(function () {
        $(".false").hide();
        $(".right").hide();
        if ($(this).text() == "Hypertext Markup Language") {
            $(".right").show();
            punkte++;
        } else {
            $(".false").show();
        }

    });
    $(".point").click(function () {
        $(".point").text(punkte);
    });
    $(".a3-4").click(function () {
        $(".interface-4").show();
        $(".false").hide();
        $(".nextq").hide();
        $(".interface-3").hide();
        $(".point").show();
        $(".back").show();
        $(".right").hide();

    });
    $(".nextq2").click(function () {
        $(".interface-2").hide();
        $(".interface-3").show();
        $(".nextq2").hide();
    });
});