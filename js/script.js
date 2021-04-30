$(window).on("load", start);

function start(){
    // $("body").css("background-color", "orange");
    $("#nav a:first").click();
}


$(document).on("click", "#nav a[href]", nav);

function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast",1);

    $("#nav_left").fadeTo(0,0);

    if (href == "work.html") {
        $("#nav_title").text("Work");
    
    } else if (href == "sandbox.html") {
        $("#nav_title").text("Search");
    
    } else if (href == "faves.html") {
        $("#nav_title").text("My favorites");
    
    } else if (href == "profile.html") {
        $("#nav_title").text("Settings");
    
    }

    
}


$(document).on("click", "#content a[href]", contentNav);

function contentNav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    
    $("#nav_left").fadeTo(0,1);
    $("#nav_title").text("Article");


}


// // media querry//

// //for dekstop
// if ($(window).width() <= 750) {
//     //top navigation disappears
//     //bottom navigation menu will be on top
//     //

// };