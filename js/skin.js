$(document).ready(function() {
    fullSizeBodySection();
})

$(window).scroll(function() {
    
});

$(window).resize(function() {
    
});

function fullSizeBodySection() {
    $("#body section").css("height", $(window).height());
}