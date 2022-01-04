
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
import AudioRecorder from 'reveal.js-plugins/audio-slideshow/recorder.js'

const deck = new Reveal()

deck.initialize({
  hash: true,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ Notes, Markdown, Search, AudioSlideshow, AudioRecorder ],

  // audio slideshow/recorder init options
  audio: {
    prefix: 'audio/', 	// audio files are stored in the "audio" folder
    suffix: '.ogg',		// audio files have the ".ogg" ending
    textToSpeechURL: null,  // the URL to the text to speech converter
    defaultNotes: false, 	// use slide notes as default for the text to speech converter
    defaultText: false, 	// use slide text as default for the text to speech converter
    advance: 500, 		// advance to next slide after given time in milliseconds after audio has played, use negative value to not advance
    autoplay: true,	// automatically start slideshow
    defaultDuration: 3,	// default duration in seconds if no audio is available
    defaultAudios: true,	// try to play audios with names such as audio/1.2.ogg
    playerOpacity: 0.05,	// opacity value of audio player if unfocused
    playerStyle: 'position: fixed; bottom: 4px; left: 25%; width: 50%; height:75px; z-index: 33;', // style used for container of audio controls
    startAtFragment: false, // when moving to a slide, start at the current fragment or at the start of the slide
  }
});

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