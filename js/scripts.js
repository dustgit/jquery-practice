$(document).ready(function(){
  $('#hide-button').click(function(){
    $('#image-area-1').hide()
  });
  $('#show-button').click(function(){
    $('#image-area-1').show()
  });
  $('#toggle-button').click(function(){
    $('#image-area-1').toggle()
  });
  $('#fade-out-button').click(function(){
    $('#image-area-2').fadeOut(500)
  });
  $('#fade-in-button').click(function(){
    $('#image-area-2').fadeIn(500)
  });
  $('#fade-toggle-button').click(function(){
    $('#image-area-2').fadeToggle(500)
  });

  $('#slide-out-button').click(function(){
    $('#image-area-3').slideUp(500)
  });
  $('#slide-in-button').click(function(){
    $('#image-area-3').slideDown(500)
  });
  $('#slide-toggle-button').click(function(){
    $('#image-area-3').slideToggle(500)
  });
  // $('#fade-in-button').click(function(){
  //   $('#image-area-1').fadeIn()
  // });
  // $('#fade-in-button').click(function(){
  //   $('#image-area-1').fadeIn()
  // });
})
