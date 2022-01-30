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

const deck = new Reveal()
let paused = false;

deck.initialize({
  hash: true,
  navigationMode: 'linear', // removes up down arrows

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ Notes, Markdown, Search, AudioSlideshow ],

  // preloading view distance
  viewDistance: 4,
  mobileViewDistance: 4,

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
});

deck.addKeyBinding( { keyCode: 32, key: ' ', description: 'Pause/resume' }, () => {
  // two functionaliies: if no audio playing then advance the slide
  // if audio playing then pause/resume video and audio

  // audio
  let indices = deck.getIndices();
	let audio_id = "audioplayer-" + indices.h + '.' + indices.v;
	if ( indices.f != undefined && indices.f >= 0 ) audio_id = audio_id + '.' + indices.f;
	let audio = document.getElementById( audio_id );
  //console.log(audio, audio.duration, !audio.duration);
  
  let slide = deck.getCurrentSlide();
  //console.log("space pressed", paused, slide);
  let background_video = slide.slideBackgroundContentElement.querySelector('video');
  let video = slide.querySelector('video'); // FIXME: only handles a single video 

  // handle next slide action:
  if (!background_video || !background_video.ended) {
    if (!audio || audio.ended || !audio.duration) {
      deck.next();
      return;
    }
  }
  
  // handle pause / resume action:
  paused = !paused;


  // video/audio may be paused independently so we check that here and override
  if (background_video) paused = !background_video.paused;
  if (audio) paused = !audio.paused;

  if (paused) { // pause video and audio
    if (background_video) background_video.pause();
    if (video) video.pause();
    if (audio) audio.pause();
  } else { // resume video and audio
    if (background_video) background_video.play();
    if (video) video.play();
    if (audio) audio.play();
  }
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

/*
deck.on( 'fragmentshown', event => {
  if (event.fragment.dataset.backgroundImage) {
    // set the section background
    let currentSlide = deck.getCurrentSlide();

    // store the previous background image if no base background image set
    if (currentSlide.dataset.backgroundImage && !currentSlide.dataset.backgroundImageBase) {
      currentSlide.setAttribute('data-background-image-base', currentSlide.dataset.backgroundImage);
    }
    
    currentSlide.setAttribute('data-background-image', event.fragment.dataset.backgroundImage);
    deck.syncSlide();
  }
} );

deck.on( 'fragmenthidden', event => {
  // revert the background image
  let currentSlide = deck.getCurrentSlide();

  if (currentSlide.dataset.backgroundImageBase) {
    currentSlide.setAttribute('data-background-image', currentSlide.dataset.backgroundImageBase);
    currentSlide.removeAttribute('data-background-image-base');
  } else {
    currentSlide.removeAttribute('data-background-image');
  }
  
  deck.syncSlide();
} );
*/

// HACK: FIXME: to allow for using the pause button on the audio player and not
// restarting the video when starting an audio fragent we watch the stopplayback event
// and pause the background video if it exists
// HACK: pause works without this locally but not on server!!!
document.addEventListener('stopplayback', function(e) {
  //console.log("stopplayback", e);
  let slide = deck.getCurrentSlide();
  let background_video = slide.slideBackgroundContentElement.querySelector('video');
  if (background_video) background_video.pause();
} );
document.addEventListener('startplayback', function(e) {
  //console.log("stopplayback", e);
  let slide = deck.getCurrentSlide();
  let background_video = slide.slideBackgroundContentElement.querySelector('video');
  if (background_video) background_video.play();
} );


