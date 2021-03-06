$(function (){
    $('.nav').hide(); // hide main menu
    $('.menu-btn').click(function (){ // select menu-button
        $('.nav').toggle(900); // expands menu
    });

    $('.sub-menu').hide(); // hides sub-menu
    $('.nav li.expand').click(function(){ // selects button to expand menu
        $('.sub-menu').toggle(900); // shows sub-menu
    });
    
});