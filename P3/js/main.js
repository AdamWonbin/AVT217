$(document).ready(function() {
  $('.off').click(function() {
    $('body').css('background-color', 'black');
    $('.off').css('background-color', '#B3B3B3');
    $('.on').css('background-color', 'white');
  });
  $('.on').click(function() {
    $('body').css('background-color', '#93AAED');
    $('.on').css('background-color', '#B3B3B3');
    $('.off').css('background-color', 'white');
  });
})
