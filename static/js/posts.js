/////////////////////////
//Javascript for Posts pages
/////////////////////////

$(function(){
    //executed when js-menu-icon is clicked
    $('.js-menu-icon').click(function(){
        //$(this): Self element,namely div.js-menu-icon
        // next() : Next to div.js-menu-icon, namely div.menu
        //toggle(): Switch show and hide 
        $(this).next().toggle();
    })
})
// alert('clicked')