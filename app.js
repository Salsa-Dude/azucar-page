

// Load the IFrame Player API code asynchronously.
   var tag = document.createElement('script');
   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //  Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  // https://youtu.be/P-zODVq5IV4
  var player;
  // function onYouTubePlayerAPIReady() {
  //   player = new YT.Player('ytplayer', {
  //     videoId: 'P-zODVq5IV4',
  //     playerVars: {
  //       autoplay: 1,
  //       controls: 1,
  //       showinfo: 0,
  //       fs: 0, 
  //       cc_load_policy: 0, // Hide closed captions
  //       iv_load_policy: 3,  // Hide the Video Annotations
  //       autohide: 0, 
  //     },
  //     events: {
  //       onReady: function(e) {
  //         e.target.mute();
  //       }
  //     }
  //   });

  // }
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
      videoId: 'P-zODVq5IV4',
      playerVars: {
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        fs: 0, 
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0, 
            },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

 





 

  



