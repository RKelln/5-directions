import 'reveal.js/dist/reveal.css';
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/blood.css';
import './style.css';


import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import AudioSlideshow from 'reveal.js-plugins/audio-slideshow/plugin.js';
//import AudioRecorder from 'reveal.js-plugins/audio-slideshow/recorder.js'

// non-reveal plugins and libraries
import {init as wikiInit} from 'wikipedia-preview/src/index.js'; // wikipedia link popups

import {vtt_parser} from './vtt.js';

export const deck = new Reveal();
let paused = false;

deck.initialize({
  hash: true,
  navigationMode: 'linear', // removes up down arrows

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ Notes, Markdown, Search, AudioSlideshow ],

  // turn off scaling and centering
  //disableLayout: true,

  // preloading distance
  viewDistance: 4,
  mobileViewDistance: 4,

  // view config
  width: 1280,
  height: 720,

  // Factor of the display size that should remain empty around
  // the content
  margin: 0.04,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0,

  // disable autoplay of media, audio-slideshow will start the background videos
  autoPlayMedia: false,

  // audio slideshow/recorder init options
  audio: {
    prefix: 'audio/', 	// audio files are stored in the "audio" folder
    suffix: '.ogg',		// audio files have the ".ogg" ending
    textToSpeechURL: null,  // the URL to the text to speech converter
    defaultNotes: false, 	// use slide notes as default for the text to speech converter
    defaultText: false, 	// use slide text as default for the text to speech converter
    advance: 0, 		// advance to next slide after given time in milliseconds after audio has played, use negative value to not advance
    autoplay: true,	// automatically start slideshow
    defaultDuration: 0.1,	// default duration in seconds if no audio is available
    defaultAudios: false,	// try to play audios with names such as audio/1.2.ogg
    playerOpacity: 0.05,	// opacity value of audio player if unfocused
    playerStyle: 'position: fixed; bottom: 4px; left: 25%; width: 50%; height:75px; z-index: 33;', // style used for container of audio controls
    startAtFragment: false, // when moving to a slide, start at the current fragment or at the start of the slide
  }
}).then( () => {

  // init wikipedia popups
  wikiInit({
    detectLinks: true, // auto detect wikipedia links
    //debug: true
  });
});


deck.addKeyBinding( { keyCode: 32, key: ' ', description: 'Pause/resume' }, (event) => {
  // two functionaliies: if no audio playing then advance the slide
  // if audio playing then pause/resume video and audio
  
  event.preventDefault();

  const [background_video, video, audio] = getMedia(); 

  // handle next slide action:
  if (!background_video || !background_video.ended) {
    if (!audio) {
      deck.next();
      return;
    }
    let is_silence = audio.currentSrc.substring(0,4) == 'blob' && 
      (background_video && (background_video.loop || background_video.muted));
    if (is_silence || audio.ended || !audio.duration || audio.duration - audio.currentTime < 1 ) {
      deck.next();
      return;
    }
  }
  
  togglePause();

  return false;
} )


function handleVTT(slide) {
  if (!slide) {
    console.warn("No slide passed to handleVTT");
    return;
  }
  let vtt = slide.querySelector('script[type="text/vtt"]');
  if (vtt) {
    const [_bgvideo, _video, audio] = getMedia(); 
    //console.log("vtt", vtt, audio);

    // get or create dynamic-text element
    let dynamic_text = slide.querySelector('.dynamic-text');
    if (!dynamic_text) {
      dynamic_text = document.createElement('div');
      dynamic_text.classList.add('dynamic-text');
      slide.appendChild(dynamic_text);
    }
    dynamic_text.style.opacity = 0;

    if (audio && (!audio.textTracks || audio.textTracks.length == 0)) {
      var track = audio.addTextTrack('captions', "English", "en");
      track.mode = "showing"; // doesn't show with audio, argh
      vtt_parser(vtt.innerHTML).map( (cue) => {
        track.addCue(cue);
      });

      track.addEventListener('cuechange', event => {
        let cues = event.target.activeCues;
        if (cues.length == 1) {
          dynamic_text.innerText = cues[0].text;
          let fadeDuration = 0.2;
          let animDelay = cues[0].endTime - cues[0].startTime - fadeDuration;
          if (animDelay < 0) animDelay = fadeDuration;
          //console.log(cues[0].text, animDelay);
          // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
          dynamic_text.animate(
            [
              { opacity: 0},
              { opacity: 1}
            ], {
              fill: 'forwards',
              duration: fadeDuration * 1000
            }
          );
          dynamic_text.animate(
            [
              { opacity: 1},
              { opacity: 0}
            ], {
              fill: 'forwards',
              duration: fadeDuration * 1000,
              delay: animDelay * 1000
            }
          );
        }
      });
    }
  }
}

function handleAttribution(slide) {
  if (!slide) {
    console.warn("No slide passed to handleAttribution");
    return;
  }
  let credits = slide.querySelector(".notes .attribution + ul");
  let vp = deck.getRevealElement();
  //let vp = document.body;
  if (credits) {
    let attribution = vp.querySelector("#attribution");
    if (!attribution) {
      attribution = document.createElement('div');
      attribution.setAttribute("id", "attribution");
    }
    attribution.style.display = "block";
    attribution.innerHTML = credits.outerHTML;
    vp.appendChild(attribution);
  } else {
    let attribution = vp.querySelector("#attribution");
    if (attribution) {
      attribution.style.display = "none";
      attribution.innerHTML = "";
    }
  }
}


deck.on( 'slidechanged', event => {
  //console.log("reveal slidechanged", event);

  // handle fadeout animations
  const items = event.currentSlide.querySelectorAll('.fadeout');
  items.forEach( (item) => {
    void item.offsetWidth; // force reflow
  });

  // handle video restart and pause on start of slide
  const [background_video, video, audio] = getMedia();
  // restart video
  if (background_video) {
    background_video.currentTime = 0;
    if (audio) { background_video.pause(); }
  }
  if (video) {
    video.currentTime = 0;
    if (audio) { video.pause(); }
  }

  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  handleAttribution(event.currentSlide);

  // FIXME: there is a bug where the audio element is not loaded yet when this is called
  // so the VTT isn't set up properly
  handleVTT(event.currentSlide);

  // always start unpaused
  paused = false;
  const e = document.querySelector('div.reveal');
  e.classList.remove("movement-paused");
} );


// HACK: FIXME: to allow for using the pause button on the audio player and not
// restarting the video when starting an audio fragent we watch the stopplayback event
// and pause the background video if it exists
document.addEventListener('stopplayback', function(e) {
  //console.log("stopplayback", paused, e);
  let slide = deck.getCurrentSlide();
  if (!slide) return;
  // event e has custom attribute .paused which will be true when main pause
  // should be called (i.e. in the case where the play button was pressed)
  if (e.paused === true) {
    pause();
  }
} );

document.addEventListener('startplayback', function(e) {
  //console.log("startplayback", paused, e);
  let slide = deck.getCurrentSlide();
  if (!slide) return;
  // event e has custom attribute .paused which will be true when main pause
  // should be called (i.e. in the case where the play button was pressed)
  if (e.paused === false) {
    play();
  }
} );


// const [background_video, video, audio] = getMedia();
function getMedia() {
  // audio
  let indices = deck.getIndices();
  let audio_id = "audioplayer-" + indices.h + '.' + indices.v;
  if ( indices.f != undefined && indices.f >= 0 ) audio_id = audio_id + '.' + indices.f;
  let audio = document.getElementById( audio_id );
  if (audio) {
    //console.log(audio_id, audio, audio.duration, !audio.duration);
  }
  
  let slide = deck.getCurrentSlide();
  let background_video = null;
  let video = null;
  if (slide) {
    background_video = slide.slideBackgroundContentElement.querySelector('video');
    video = slide.querySelector('video'); // FIXME: only handles a single video 
  }

  return [background_video, video, audio];
}

// create is_playing attribute
// https://stackoverflow.com/questions/8599076/detect-if-html5-video-element-is-playing
Object.defineProperty(HTMLMediaElement.prototype, 'is_playing', {
  get: function(){
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

function pause_background(background_video = false) {
  // handle zooms and pans
  let e = document.querySelector('div.reveal');
  e.classList.add("movement-paused");

  if (background_video === false) {
    const [bg_video, video, audio] = getMedia();
    background_video = bg_video;
  }
  if (background_video && background_video.is_playing) {
    background_video.pause();
  }
}

async function play_background(background_video = false) {
  // handle zooms and pans
  let e = document.querySelector('div.reveal');
  e.classList.remove("movement-paused");

  if (background_video === false) {
    const [bg_video, video, audio] = getMedia();
    background_video = bg_video;
  }
  if (background_video && !background_video.is_playing) {
    await background_video.play();
  }

}


function pause() {
  if (paused) return;
  paused = true;
  const [background_video, video, audio] = getMedia(); 

  // NOTE: order matters because audio also tries to pause video
  if (audio && audio.is_playing) audio.pause();
  if (video && video.is_playing) video.pause();

  pause_background(background_video);

  // dynamic text
  let slide = deck.getCurrentSlide();
  let dynamic_text = slide.querySelector('.dynamic-text');
  if (dynamic_text) {
    dynamic_text.getAnimations().forEach( (animation) => {
      if (animation.playState == 'running') {
        animation.pause();
      }
    });
  }
}

async function play() {
  if (!paused) return;
  paused = false;

  // dynamic text
  let slide = deck.getCurrentSlide();
  let dynamic_text = slide.querySelector('.dynamic-text');
  if (dynamic_text) {
    dynamic_text.getAnimations().forEach( (animation) => {
      if (animation.playState == 'paused') {
        animation.play();
      }
    });
  }

  const [background_video, video, audio] = getMedia(); 

  // NOTE: order matters because audio also tries to play video
  if (audio && !audio.is_playing) { await audio.play(); }
  if (video && !video.is_playing) { await video.play(); }

  play_background(background_video);
}


function togglePause() {
  if (!paused) { // pause video and audio
    pause();
  } else { // resume video and audio
    play();
  }
}


// pause on defocus: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

// If the page is hidden, pause the video;
// if the page is shown, play the video
let prev_pause_state;
function handleVisibilityChange() { 
  if (document[hidden]) {
    prev_pause_state = paused;
    pause();
  } else {
    if (!prev_pause_state) {
      play(); 
    }
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
