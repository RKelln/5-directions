import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/blood.css'
import './style.css'


import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import AudioSlideshow from 'reveal.js-plugins/audio-slideshow/plugin.js'
//import AudioRecorder from 'reveal.js-plugins/audio-slideshow/recorder.js'

import {init as wikiInit} from 'wikipedia-preview/src/index.js'


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


deck.addKeyBinding( { keyCode: 32, key: ' ', description: 'Pause/resume' }, () => {
  // two functionaliies: if no audio playing then advance the slide
  // if audio playing then pause/resume video and audio

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
} )


deck.on( 'slidechanged', event => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  let slide = event.currentSlide;
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
} );

// deck.on( 'slidetransitionend', event => {
// 	// add activate class to animations
//   let slide = event.currentSlide;
//   let animations = slide.querySelectorAll('.anim');

//   animations.forEach(function(e) {
//     e.classList.add('active');
//   });
// });

// HACK: FIXME: to allow for using the pause button on the audio player and not
// restarting the video when starting an audio fragent we watch the stopplayback event
// and pause the background video if it exists
// HACK: pause works without this locally but not on server!!!
document.addEventListener('stopplayback', function(e) {
  //console.log("stopplayback", e);
  let slide = deck.getCurrentSlide();
  if (!slide) return;
  let background_video = slide.slideBackgroundContentElement.querySelector('video');
  if (background_video) background_video.pause();
} );
document.addEventListener('startplayback', function(e) {
  //console.log("startplayback", e);
  let slide = deck.getCurrentSlide();
  if (!slide) return;
  let background_video = slide.slideBackgroundContentElement.querySelector('video');
  if (background_video) background_video.play();
} );


// const [background_video, video, audio] = getMedia();
function getMedia() {
  // audio
  let indices = deck.getIndices();
  let audio_id = "audioplayer-" + indices.h + '.' + indices.v;
  if ( indices.f != undefined && indices.f >= 0 ) audio_id = audio_id + '.' + indices.f;
  let audio = document.getElementById( audio_id );
  //console.log(audio, audio.duration, !audio.duration);
  
  let slide = deck.getCurrentSlide();
  let background_video = null;
  let video = null;
  if (slide) {
    background_video = slide.slideBackgroundContentElement.querySelector('video');
    video = slide.querySelector('video'); // FIXME: only handles a single video 
  }

  return [background_video, video, audio];
}


function pause() {
  const [background_video, video, audio] = getMedia(); 

  if (background_video) background_video.pause();
  if (video) video.pause();
  if (audio) audio.pause();

  let e = document.querySelector('div.reveal');
  e.classList.add("movement-paused");
}


function play() {
  const [background_video, video, audio] = getMedia(); 

  if (background_video) background_video.play();
  if (video) video.play();
  if (audio) audio.play();

  let e = document.querySelector('div.reveal');
  e.classList.remove("movement-paused");
}


function togglePause() {
  const [background_video, video, audio] = getMedia(); 

  // handle pause / resume action:
  paused = !paused;

  // video/audio may be paused independently so we check that here and override
  if (background_video) paused = !background_video.paused;
  if (audio) paused = !audio.paused;

  if (paused) { // pause video and audio
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
function handleVisibilityChange() {
  if (document[hidden]) {
    pause();
  } else {
    play();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
