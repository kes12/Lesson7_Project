//Program Name: Recipe Display Application
//Author: Kyle Skidmore
//Date: 7/23/15
//Filename: script.js
/**
* Created with LIS2360_Lesson7_jQuery.
* User: kes12d
* Date: 2015-07-23
* Time: 06:57 PM
* To change this template use Tools | Templates.
*/

function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}//end of display()
    $("h3").click(display);

function display2(event){
    
    $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
    
}

$("h3").click(display2);

$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

/*
$("h3).click(display);
*/
/*
$("h3").click(display2);
*/

$("h3").hover(display2);