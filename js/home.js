




/////////////////////////////////////////////////////////////////////
//EXCUSE OUR MESS THE HAMSTERS ARE WORKING TO CLEAN EVERYTHING ASAP//
/////////////////////////////////////////////////////////////////////












var matrixElement;
var matrixHelp;


var accidents = [
    ['location1', -12.994404, -38.468390, 1, 'A new alert was added 1'],
    ['location2', -12.978040, -38.488300, 2, 'A new alert was added 2'],
    ['location3', -12.990573, -38.516932, 3, 'A new alert was added 3'],
    ['location4', -13.006607, -38.530465, 4, 'A new alert was added 4'],
    ['location5', -12.967201, -38.499458, 5, 'A new alert was added 5'],
    ['location6', -12.984547, -38.528237, 6, 'A new alert was added 6'],
    ['locationBonus1', -52.574714, 169.156221, 7, 'A new alert was added 6'],
    ['locationBonus2', -52.597107, 169.157614, 8, 'A new alert was added 6'],
    ['locationBonus3', -52.587615, 169.137662, 9, 'A new alert was added 6']
];

var graphStep1;
var graphStep2;
var graphStep3;

function refreshGraph() {

    $(".graphArea").append("<div class='graphReload'>Data is being updated, Please wait a few seconds</div>")

    setTimeout(function () {
        $(".graphReload").fadeOut(300, function () {

            initGraph();

        });
       

    }, 5000)

}



var idLoadBar;
var loadingProgress = 0;

function loadSystem () {

    idLoadBar = setInterval("loadingProcess()",100);

}


function loadingProcess() {
    loadingProgress += 5
    

    console.log(loadingProgress);


    if(loadingProgress <= 100) {

        $(".loginLoadBar").css("width",""+loadingProgress+"%");
        $(".loadPercent").text(loadingProgress + "%");
        $(".loadPercentGhost").text(loadingProgress + "%");

    } else {

        clearInterval(idLoadBar);
        console.log("loaded!");
        applicationAccess();


    }


}


function applicationAccess() {

    $(".logoLoginBox").fadeOut();
    $(".titleTextLogin").fadeOut();

    $(".loadPercent").fadeOut();
    $(".loadPercentGhost").fadeOut();


    $(".loginLoadBar").addClass("finishedBar");

    if ($(".loginLoadBar").hasClass("finishedBar")) {

        $(".loginLoadBar").fadeOut(1400, function () {

            
            $(".graphArea").show();
                $(".loginBgUp").css("height", "0%");
                $(".loginBgDown").css("height", "0%");


            




        });

    }



}


var loadingTimer;


//jquery scrollbar detect plugin//////////////

(function ($) {
    $.fn.has_scrollbar = function () {
        var divnode = this.get(0);
        if (divnode.scrollHeight > divnode.clientHeight)
            return true;
    }
})(jQuery);


////////////////////////////////////////////


$(document).ready(function () {


    //$(".sidebarListContainer").mCustomScrollbar({
    //    theme: "light", autoHideScrollbar: true, setLeft: -10
    //});


    $(".graphArea").hide();




    //DISABLE AJAX CACHING /////////////////////
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });
    ////////////////////////////////////////////

    //LOAD D3J ///////////////////

    //External File

    initGraph();

    //$(document).on("click", ".Graph", function () {

    //    if ($(".Graph").hasClass("expandGraph")) {

    //        $(".Graph").find("svg").fadeOut(function () {
    //            $(".Graph").removeClass("expandGraph");
    //            $(".Graph").text("");
    //        });

    //        setTimeout(initGraph(), 2000);

    //    } else {
            
    //        $(".Graph").find("svg").fadeOut(function () {
    //            $(".Graph").addClass("expandGraph");
    //            $(".Graph").text("");
                
    //        });


    //        setTimeout(initGraph(), 2000);
    //    }


    //});

    /////////////////////////////

    //NEW LOGIN SCREEN STUFF///////////////////////////

    $(".loginBoxBt").on("click", function () {


        $(".loginBoxPlaceholder").slideUp(400, function () {
            loadSystem();

        });


        
       
    });

    





    //$(".loginBgUp").
    //$(".loginBgDown").
    //$(".loginBgLoadBar").
    //$(".loadPercent").
    //$(".loginBoxPlaceholder").





















    /////////////////////////////////////////////////
  
    
       




    //TIMELINE STUFF [EXPERIMENTAL!!]/////////////////////

    function loadTimeline() {

        $(".timelineIntroContainer").fadeOut(300);

    }


    $(document).on('click', '#timelineLoad', function () {

        $(".timelineContainer").fadeIn(400, function () {

        
            setTimeout(loadTimeline, 2000);



        });

















    });




    ///3D EXPERIMENTS////////////////////////////////


    $('#mapLabels').on("click", function () {
        pseudo3dInit();
    });






    ///////////////////////////////////////////////




    ////////////////////////////////////////////////////


    ////ALL ABOUT TASKS /////////////////////////////////

    $(document).on("click", ".editButtonTab", function (e) {

        if($(e.currentTarget).closest(".taskContainer").hasClass("expandTask") ) {

            $(".taskEmergentView").removeClass("expandedViewTask");
            $(e.currentTarget).closest(".taskContainer").removeClass("expandTask");

        }else{

            $(".taskEmergentView").addClass("expandedViewTask");
            $(e.currentTarget).closest(".taskContainer").addClass("expandTask");

        }




        console.log($(e.currentTarget).closest(".taskContainer").css("background-color"));


    });


    ///////////////////////////////////////////////////////




    //HEADER CASES DETAILS///////////////
    

    //$(document).on('click', '.caseHeader', function (e) {

    //        $('.caseHeader').addClass('caseHeaderExpanded');



    //});

    //$(document).on('click', '.closeCaseWindow', function (e) {

    //    $('.caseHeader').removeClass('caseHeaderExpanded');
    //    console.log("RAWR");
    //});


    //////////////////////////////////////////


    ///IMPORTANT MIRAGTE TO LOGIN ASAP!!!///


    $('.closeBox').on('click', function () {

        $(".announcementsBox").fadeOut(200);


    });










    ////////////////////////////////////////////



    ////CASES LISTS//////////////////////////////////


    $("#caseListBt").on('click', function () {



    });




    //////////////////////////////////////////////////


    /////ALERTS TESTS/////////////////////////////////


    $(".alertsContainer").on('click', function () {

        //$(".alertsBoxTest").addClass("closeAlerts");

        if ($(".alertsBoxTest").hasClass("closeAlerts")) {

            $(".alertsBoxTest").removeClass("closeAlerts");

        } else {
            $(".alertsBoxTest").addClass("closeAlerts");

        }





    });


    $(document).on("click", ".alertRemove", function () {

        $(this).parent().remove();

        if ($(this).parent() == "") {

            $(".alertsListContainer").text("You dont have alerts");

        }

        $(".alertCounter").text($(".alertList li").length);

    });

    




    ///////////////////////////////////////////////////


    /////LEGEND BOX AREA//////////////////////////////////////

    $(".legendOpenCaption").hide();
    

    $(document).on("click", ".legendOptionIcon", function () {
        $(".legendOptionIcon").css("pointer-events", "none");
        $(".legendBox").find("ul").text("");

        customLoop();

      

      

    });

    












    //////////////////////////////////////////////////////////////////

    ////////////////////

    $("tr").on('mouseover', function (e) {

        if (e.currentTarget === this) {

            $(this).find(".descLabel").css("background-color", "rgb(107, 223, 172)");
        }

    });

    $("tr").on('mouseout', function (e) {

        if (e.currentTarget === this) {

            $(this).find(".descLabel").css("background-color", "rgb(77, 138, 111)");

        }
    });


    //////////////////////////////////////


    ////////TABS////////////
    //init...

    $('.tabMenu').eq(0).addClass('selTab');
    $(".tabCases").css("display", "block");


    $(".tabMenu").on('click', function (e) {

        if (e.currentTarget === this) {
            $('.tabMenu').removeClass('selTab');
            $(this).addClass('selTab');


            var tabId = $(this).attr("id");

            console.log(tabId);

            switch (tabId) {
                case "tab01":
                    $(".tabCamera").css("display", "none");
                    $(".tabCases").css("display", "block");
                    break;

                case "tab02":
                    $(".tabCases").css("display", "none");
                    $(".tabCamera").css("display", "block");
                    break;
            }

        }

        if (e.currentTarget != this) {
            $('.tabMenu').removeClass('selTab');
        }

    });













    //////////////////////





    //GRAPH BUTTON ACTIONS/////////

    $(".graphBtIcon").on('click', function () {
        $(".Graph").show();
        refreshGraph()
    });


    $(document).on('click', '.closeFloatBox', function () {




        $(this).closest(".Graph").hide();





    });

    ///////////////////////////////






    //GRAPH////////////////

  























    ///////////////////////////////////////////////////////////

    //ADVANCED SEARCH BOX ///





    $(".advSearch").on("click", function () {

        //  $(".searchArea").addClass("openSearchBox")


        if ($(".searchArea").hasClass("openSearchBox")) {
            $(".advSearchBox").fadeOut(200, function () {
                $(".searchInput").fadeIn(function () {
                    $(".searchArea").removeClass("openSearchBox")
                });
            });
            $(".advSearch").removeClass("advSearchActive");

        } else {


            $(".searchArea").addClass("openSearchBox")
            $(".searchInput").fadeOut(200, function () {
                $(".advSearchBox").fadeIn(200);
            });
            $(".advSearch").addClass("advSearchActive");

        }











    });


    ////WIDGETS AREA /////////////////////////////////////



    $(document).on('click', '.closeFloatBox', function () {


        

        $(this).closest(".floatingBoxContainer").hide();





    });









    ///////////////////////////////////////////////////////


    ///SIDEBOX CASES /////////////////////////////////

    $(document).on("click", ".sbMoreInfo", function () {


        if ($(".sideBoxCases").hasClass('openSideBox')) {
            $(".sideBoxCases").removeClass('openSideBox');
            $(".sbExpandedBg").hide();
            
        } else {
            $(".sideBoxCases").addClass('openSideBox');
            $(".sbExpandedBg").show();
        }
        



    });
    


    ///////////////////////////////////////////////










    ////MAIN MENU////////////////////////////////////////

    $(".sideMenu").addClass("mainMenuClosed");

    $(".caption").on('click', function (e) {


        if ($(".sideMenu").hasClass("mainMenuClosed")) {

            $(".sideMenu").removeClass("mainMenuClosed");
            $(".sideMenu").addClass("mainMenuOpen");
        } else {
            $(".sideMenu").removeClass("mainMenuOpen");
            $(".sideMenu").addClass("mainMenuClosed");
        }


        e.stopPropagation();

    });


    $(".wrapper").on('click', function (e) {


        if ($(".sideMenu").hasClass("mainMenuOpen")) {

            $(".sideMenu").removeClass("mainMenuOpen");
            $(".sideMenu").addClass("mainMenuClosed");
        }



    });


    // $(".alertMap").animate({opacity:1,})

    //$(".sideMenu").css({"right":"-12%"});
    //$(".caption").on('click', function (e) {

    //    if ($('.sideMenu').css("right") != "0px" ) {

    //        $(".sideMenu").css({ "right": "0%" });

    //    } else {

    //        $(".sideMenu").css({ "right": "-12%" });

    //    }





    //});

    //$(".wrapper").on('click', function (e) {

    //    if ($(".sideMenu").css("right") != "-12%" ) {

    //        $(".sideMenu").css({ "right": "-12%" });
    //    }


    //});

    /////////////////////////////////////////////

    //TASK MATRIX AREA//////////////////////////


    $(document).on("mouseover", ".sqrFieldMaster", function () {

        matrixHelp = $(this).index();
        console.log(matrixHelp)


        switch (matrixHelp) {
            case 0: $(".matrixTitleMaster").text("Pending Tasks");  $(".matrixSubTitleMaster").text("Your pending tasks appears on this area."); break;
            case 1: $(".matrixTitleMaster").text("On-Hold Tasks");  $(".matrixSubTitleMaster").text("Shows tasks with an On-Hold status to be done later..."); break;
            case 2: $(".matrixTitleMaster").text("Urgent Tasks");  $(".matrixSubTitleMaster").text("Tasks that cannot wait any longer to be finished are here.."); break;
            case 3: $(".matrixTitleMaster").text("Ignored Tasks"); $(".matrixSubTitleMaster").text("Non-important tasks are shown on this area."); break;
        }




    });

    $(document).on("mouseout", ".squareAreaMaster", function () {

        $(".matrixTitleMaster").text("Pending Tasks List")
        $(".matrixSubTitleMaster").text("All your tasks from all your cases are represented here.")

    });




    $(document).on('click', '#appendMatrix', function () {
        console.log("RAWRA?");

        $(".taskMatrixListContainer").text("");
        


        for (var i = 0; i < 9; i++) {


                    matrixElement = "<div class='taskMatrixContainer matrixContent'><div class='squareArea'><div class='sqrField' style='opacity:" + Math.random() * 0.9 + "'>" + Math.floor(Math.random() * 34) + "</div><div class='sqrField' style='opacity:" + Math.random() * 0.9  + "'>" + Math.floor(Math.random() * 34) + "</div><div class='sqrField' style='opacity:" + Math.random() * 0.9 + "'>" + Math.floor(Math.random() * 34) + "</div><div class='sqrField' style='opacity:" + Math.random() * 0.9 + "'>" + Math.floor(Math.random() * 34) + "</div></div><div class='matrixTitle'>Tarea " + Math.floor(Math.random() * 34) + "</div><div class='matrixSubTitle'>La descripcion de la tarea...</div></div>";


            
                    $(".taskMatrixListContainer").append(matrixElement)

        }

        $(".taskMatrixListContainer").append('<div id="appendMatrix" style="cursor:pointer">Append Task</div>');


    });





    $(document).on('click', '.matrixContent', function () {
        
        loadPageExtra("matrixDashboard", 47, "light")

    });














    ////////////////////////////////////////////////













    //DYNAMIC   LOAD ///////////////////////////////
    resetScreen();
    //resetContents();



    $(document).on('click','.casePreview', function () {

        //resetContents();
        loadPageExtra("caseSectionWindow", 47, "light")

    });


    $(document).on('click', '#formCaseCreate', function () {
        e.preventDefault();
        //resetContents();
        loadPageExtra("#formCaseCreate", 47, "light")

    });


    $(document).on('click', '.expandTasks', function () {
        
        resetContents();
        loadPage("tasksMatrix", 20, "dark")

    });

    $(document).on('click', '#openTimeline', function () {

        resetContents();
        loadPage("timelineArea", 47, "light")

    });


 
    $("#caseListBt").on('click', function () {

           resetContents();
        loadPage("casesList", 20, "dark")

    });

    $("#taskListBlock").on('click', function () {

        resetScreen();
        $("#myTasksBox").show();

    });

    $("#newsListBlock").on('click', function () {

        resetScreen();
        $("#myNewsBox").show();

    });

    $("#caseListBlock").on('click', function () {

        resetScreen();
        $("#myCasesBox").show();

    });

    $("#moreCases").on('click', function () {
        $("#myCasesBox").hide();
        resetContents();
        loadPage("casesList", 20, "dark")

    });


    $(".openHeadline").on('click', function () {
        $("#myCasesBox").hide();
        resetContents();
        loadPage("casesList", 20, "dark")
        loadPageExtra("caseSectionWindow", 47, "light")

    });




    $("#closeCaseList").on('click', function () {


        resetContents();

    });

    $("#closeCaseListExtra").on('click', function () {


        resetContentsExtra();

    });




    ///////////////////////////////////////////////

    loadScript();

});

//////////////DOCUMENT READY END//////////////////////

//LEGEND PANEL ///////////////////////////////////

var legendNumber = 0;
function customLoop() {

    var RED = Math.floor(Math.random() * 255 - 1 + 1);
    var GREEN = Math.floor(Math.random() * 255 - 1 + 1);
    var BLUE = Math.floor(Math.random() * 255 - 1 + 1);
    var legendColor = "rgba(" + RED + ", " + GREEN + ", " + BLUE + ", 1)";

    //legendNumber = accidents.length;




    $(".legendBox").find("ul").append('<li><div class="legendColor" style="background-color:' + legendColor + '"></div>' + accidents[legendNumber][0] + '</li>');

    setTimeout(function () {
        console.log("Looping number:" + legendNumber);
        $(".legendBox").find('li:eq(' + legendNumber + ')').addClass('legendAnimation');
        legendNumber++;
        if (legendNumber < 6) {
            customLoop();

            $(".legendOptionIcon").text("Loading...");
        } else {
            $(".legendOptionIcon").css("pointer-events", "auto");
            $(".legendOptionIcon").text("");
            legendNumber = 0;
        }
    }, 200);




}






















//////////////////////////////////////////////////////











///PAGE PANELS/////////////////////////////////////

var darkSchemeBg = "rgb(76, 87, 85)";
var lightSchemeBg = "rgb(255, 255, 255)";

var loadingBar = '<div class="loadingBar"><div class="loadingCircle"></div>Now Loading...</div>';

var tamanoVentana = 0;

function resetScreen() {

    resetContentsExtra();
    resetContents();

}

function resetContents() {
    console.log("I've received the width of the target to reset: "+tamanoVentana)
    console.log("I'm deleting stuff...");
    $(".caseBoxInner").text("");

    if (tamanoVentana == 0) {

        $(".caseBox").css({ "width": "50%", "left": "-100%" })


    } else {

        $(".caseBox").css({ "width": "" + tamanoVentana-1 + "%", "left": "-" + tamanoVentana + "%" })

    }

    

}


function resetContentsExtra() {
    console.log("I've received the width of the target to reset: " + tamanoVentanaExtra)
    console.log("I'm deleting stuff...");
    $(".caseBoxInnerExtra").text("");

    if (tamanoVentanaTotal == 0) {

        $(".caseBoxExtra").css({ "width": "50%", "left": "-100%" })


    } else {

        $(".caseBoxExtra").css({ "width": "" + tamanoVentanaTotal - 1 + "%", "left": "-" + tamanoVentanaTotal + "%" })

    }

    $(".tabMenu").fadeIn(200);

}


var tamanoVentanaExtra = 0;
var tamanoVentanaTotal = tamanoVentanaExtra + tamanoVentana;

function loadPageExtra(id, targetWidth, bgColor) {

    tamanoVentanaExtra = targetWidth;
    console.log(bgColor);
    console.log(darkSchemeBg, lightSchemeBg);
    console.log("Proceeding to open the panel..")
    console.log("Initial parameter check " + id + " ," + targetWidth);

    $(".caseBoxInnerExtra").append(loadingBar);
    $(".loadingBar").hide();
    $(".tabMenu").fadeOut(200);


    if (bgColor == "dark") {

        $(".caseBoxExtra").css({ "color": "" + lightSchemeBg + "", "background-color": "" + darkSchemeBg + "", "width": "" + targetWidth + "%", "left": "" + tamanoVentana + "%" });
        $(".tabMenuExtra").addClass("selTab");
    } else {

        $(".caseBoxExtra").css({ "color": "" + darkSchemeBg + "", "background-color": "" + lightSchemeBg + "", "width": "" + targetWidth + "%", "left": "" + tamanoVentana + "%" });
        $(".tabMenuExtra").removeClass("selTab");
    }



    $(".loadingBar").fadeIn(1000, function () {


        setTimeout(loadSectionExtra(id), 3000);


    });

}



function loadPage(id, targetWidth, bgColor) {

    tamanoVentana = targetWidth;
    console.log(bgColor);
    console.log(darkSchemeBg, lightSchemeBg);
    console.log("Proceeding to open the panel..")
    console.log("Initial parameter check " + id + " ," + targetWidth);

    $(".caseBoxInner").append(loadingBar);
    $(".loadingBar").hide();

    if (bgColor == "dark") {

        $(".caseBox").css({ "color": "" + lightSchemeBg + "", "background-color": "" + darkSchemeBg + "", "width": "" + targetWidth + "%", "left": "0%" });
        $(".tabMenu").addClass("selTab");
    } else {

        $(".caseBox").css({ "color": "" + darkSchemeBg + "", "background-color": "" + lightSchemeBg + "", "width": "" + targetWidth + "%", "left": "0%" });
        $(".tabMenu").removeClass("selTab");
    }



        $(".loadingBar").fadeIn(1000,function () {


            setTimeout(loadSection(id), 3000);


    });

}



function loadSectionExtra(id) {
    console.log("I'm loading the selection: " + id);
    $(".loadingBar").fadeOut(1000, function () {

        $(".caseBoxInnerExtra").load("ajaxtest.html #" + id + "");

    });



}




function loadSection(id) {
    console.log("I'm loading the selection: " + id);
    $(".loadingBar").fadeOut(1000, function () {
        $(".caseBoxInner").load("ajaxtest.html #" + id + "", function () {

            //LOADED

            //$(".sidebarListContainer").mCustomScrollbar({
            //    theme: "light", autoHideScrollbar: true, setLeft: -10
            //});
        });

    });

    

}




//////////////////////////////////////////

var soporteMapa = 'hybrid';

function initialize() {

    //-12.9887668, -38.530465 BAHIA

    var myLatlng = new google.maps.LatLng(-52.578047, 169.143379);
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(-52.578047, 169.143379),
        mapTypeId: soporteMapa,
        disableDefaultUI: true,
        zoomControl: true,
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var alertInfo = $('#map-canvas').append('<div class="alertMap">A new alert was added</div>');
    

    loadMarks(map, accidents);

    map.setZoom(14);
    map.setTilt(45);
    /*

        google.maps.event.addListener(marker, 'mouseover', function () {
            $(".alertMsg").text(marker.desc);
            $(".alertsArea").css({ '-webkit-filter': 'hue-rotate(200deg) saturate(200%)' });
        });

        google.maps.event.addListener(marker, 'mouseout', function () {
            $(".alertMsg").text('[20:11] Car crash accident at the main highway, requesting for support....');
            $(".alertsArea").css({ '-webkit-filter': 'hue-rotate(0deg)' });
        });

        */

}

var soporteDesc;

function loadMarks(map, loc) {

    console.log(loc);



    var iconMark = {
        url: 'img/markIcon.png',
        size: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 60),
        id: "markerTest"
    };

    var shape = {

        coord: [30, 30, 170],
        type: 'circle'


    };


    for (var i = 0; i < loc.length; i++) {

        var situation = loc[i];
        var coords = new google.maps.LatLng(situation[1], situation[2]);
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
            shape: shape,
            icon: iconMark,
            flat: true,
            title: situation[0],
            desc: situation[4],
            zIndex: situation[3]
        });



        // marker.setAnimation(google.maps.Animation.BOUNCE);
        var caseWindowOpen = false;


        google.maps.event.addListener(marker, 'click', function (e) {
            soporteDesc = marker.desc;

            resetScreen();
            loadPage("caseDetail", 30)





        });






    }



    
}


var start3d = false;
function pseudo3dInit() {

    if (start3d == true){
        start3d = false;
        console.log("3d initialization");
        $('#map-canvas').removeAttr("style");
        $('.googleMap').css({ 'overflow': 'hidden', '-webkit-transform': 'perspective(1920px) rotateX(60deg) rotateY(0deg) rotateZ(0deg) translateZ(-60px)' });

    }else{
        start3d = true;
     console.log("3d initialization");
    $('#map-canvas').removeAttr("style");
    $('.googleMap').css({ 'overflow': 'hidden', '-webkit-transform': 'perspective(1920px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)' });

    }



}



function caseWindowClose() {

    $(".caseBox").css({ left: "-100%" });
    $(".caseBox").css({ width: "38%" });
    $(".tabsArea").css({ "display": "block" });
    $(".currentCase").css({ "display": "none" });
}

function caseWindow() {


    $(".caseBox").animate({ left: 200 })


}

function alertsTicker(message, mode) {



    $(".alertMsg").find("span").fadeIn().text(message);



}




function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);

}


var numeroAlerta = 1;
function alertCount() {

    numeroAlerta++
    console.log(numeroAlerta);

    $(".alertCounter").text(numeroAlerta);



}


