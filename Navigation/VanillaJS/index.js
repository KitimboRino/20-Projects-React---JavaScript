// Navigation hidden.
var navStatus = 0;

function openNav() {
    // Logic for navbar open.
    if (!navStatus) {
        $('.mainDiv').css('width', '100%')
        $('li').css('display', 'block')
        navStatus = 1;
    }
    // Logic for closing
    else {
        $('.mainDiv').css('width', '0%')
        $('li').css('display', 'none')
        navStatus = 0;
    }
}