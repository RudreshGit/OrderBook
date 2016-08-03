/**
 * This java script file contains functions for top right corner support functions  
 */

$(document).ready(function() {
    var colorOrig=$(".supportFunctions").css('color');
    $(".supportFunctions").hover(
    function() {
        //mouse over
        $(this).css('color', '#FF5A00')
    }, function() {
        //mouse out
        $(this).css('color', colorOrig)
    });
});