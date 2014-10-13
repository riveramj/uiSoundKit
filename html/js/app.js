$(document).ready(function() {
  $('#samples').smoothScroll();

  $("section.sound-list").click(function(){
    $('#full-sound-list').slideUp();

    if(!$('#full-sound-list').is(":visible")) {
      $('#full-sound-list').slideDown();
    }
  });
});

function play(sound){
  var name = $(sound).text().split(" ").join("");
  var audio = document.getElementById(name);
  audio.play();
};
