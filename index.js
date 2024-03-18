$(document).ready(function () {
    $('.sidenav-toggle').hover(
        function () {
            $('#sidenav').css('width', '15%');
        },
        function () {
            $('#sidenav').mouseleave(function () {
                $(this).css('width', '0');
            });
        }
    );
});
