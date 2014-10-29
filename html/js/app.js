$(document).ready(function() {
  $('#samples').smoothScroll();

  $("section.sound-list").click(function(){
    $('#full-sound-list').slideUp();

    if(!$('#full-sound-list').is(":visible")) {
      $('#full-sound-list').slideDown();
    }
  });
});

$(document).on('click', '#iphone-video, #ipad-video', function (e) {
    var video = $(this).get(0);
 
    $(this).on('ended',function(){
      video.load();     
    });

    if (video.paused === false) {
        video.pause();
    } else {
        video.play();
    }

    return false;
});

function play(sound){
  var name = $(sound).text().split(" ").join("");
  var audio = document.getElementById(name);
  audio.play();
};
