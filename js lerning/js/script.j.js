$(document).ready(function() {

    $('li').mousedown(function(){

        $(this).css({"color":"#4b3049"});

    })

    $('#Product').click(function(){

        $('.pro-dropdown').toggleClass('active');

    })

    $('#Pages').click(function(){

        $('.page-dropdown').toggleClass('active');

    })

    $('.menu-icon').click(function () {

        $('#menuDropdwon').slideToggle();
    })
})
