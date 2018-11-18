// init popovers
$(function () {
    $('[data-toggle="popover"]').popover();
});

// Enable .js-anchor links to specific tab for tab menus
var url = document.location.toString();
if (url.match('#')) {
    $('a.js-anchor[href="#' + url.split('#')[1] + '"]').tab('show');
}
// Change hash for .js-anchor links
$('a.js-anchor').on('click', function (e) {
    window.location.hash = e.target.hash;
});
