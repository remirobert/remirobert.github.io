$(document).ready(function() {

  // Video
  var iframe = document.getElementById('video');
  var player = $f(iframe);

  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.api("play");
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.api("pause");
  });

  // Hacky stuff
  // setInterval(function() {
  //   var el = $('#featureOne .screen');
  // }, 16);

  $('#play-button').click(function(){
    $('.remodal-overlay').show();
  });

  // Local scroll
  $('#header').localScroll({
     target:'body'
  });

  // Waypoints
  if ($(window).width() > 960) {
    $('body').addClass('large');
  } else {
    $('body').removeClass('large');
    $('.title, .info').show();
  }


  // Arrow
  var currentFrame = 1;
  var totalFrames = 59;
  setInterval(function() {
    var previousFrame = currentFrame - 1;
    if(currentFrame === 1) {
      previousFrame = 59;
    }

    $('.arrow').removeClass('arrow' + previousFrame).addClass('arrow' + currentFrame);
    currentFrame++;
    if(currentFrame > totalFrames) {
      currentFrame = 1;
    }
  }, 35);

  $(window).resize(function() {
    if ($(window).width() > 960) {
       $('body').addClass('large');
    } else {
      $('body').removeClass('large');
      $('.title, .info').show();
    }
  });

  $('.large .feature')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this)
          .removeClass('fadeOut')
          .addClass('fadeIn')
          .find('.title, .info').show();
      }
    }, { offset: '50%' })
    .waypoint(function(direction) {
      if (direction === 'up') {
        $(this)
          .removeClass('fadeIn')
          .addClass('fadeOut')
          .find('.title, .info').delay(750).hide(0);
      }
    }, { offset: '20%' });


});

