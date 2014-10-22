$(document).ready(function() {
  $('#samples').smoothScroll();

  $("section.sound-list").click(function(){
    $('#full-sound-list').slideUp();

    if(!$('#full-sound-list').is(":visible")) {
      $('#full-sound-list').slideDown();
    }
  });
});

function startVideo(video) {
  var soundVideo = document.getElementById(video);
  soundVideo.addEventListener("ended", resetVideo, false);
  soundVideo.play();
};

function resetVideo() {
    // resets the video element by resetting the source
    this.src = this.src
}

function play(sound){
  var name = $(sound).text().split(" ").join("");
  var audio = document.getElementById(name);
  audio.play();
};
