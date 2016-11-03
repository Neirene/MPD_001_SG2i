

$(document).ready(function () {


    $(".crearDocumentoForm").focus(function () {
        console.log("touched form!");
        $(this).addClass("focusHighlight");

    });

    $(".crearDocumentoForm").blur(function () {
        console.log("clicked outside the form");
        $(this).removeClass("focusHighlight");

    });



    $(".rf-sel").find(".rf-sel-inp").focus(function () {
        console.log("touched form!");
        $(".rf-sel-inp").addClass("focusHighlight");

    });

    $(".rf-sel").find(".rf-sel-inp").blur(function () {
        console.log("clicked outside the form");
        $(".rf-sel-inp").removeClass("focusHighlight");

    });


    $(".rf-sel").on("mouseover", function () {

        console.log("orz?");
        $(this).find(".rf-sel-btn").addClass("visibleDrop");

    });

    $(".rf-sel").on("mouseout", function () {

        console.log("orz?");
        $(this).find(".rf-sel-btn").removeClass("visibleDrop");

    });



});


