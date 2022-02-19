// past, present, future

import {deck} from './../main.js'


deck.on( 'history', (e) => {
    console.log('✨');
    // remove auto layout

} );

deck.off( 'history', (e) => {
    console.log('history off');
    // remove auto layout

} );

deck.on( 'slidechanged', event => {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    let slide = event.currentSlide;
    let year = slide.querySelector(".year");
    let view = deck.getRevealElement();
    if (year) {
        slide.style = "display: block;" // remove autostyling

        year.style.display = "none";
        let container = view.querySelector("#year");
        if (!container) {
            container = document.createElement('div');
            container.setAttribute("id", "year");
            view.appendChild(container);
        }
        container.style.display = "block";
        animateValue(container, parseInt(container.innerHTML), parseInt(year.innerHTML), 1000);
        //container.innerHTML = year.innerHTML;

        // trigger animation
        container.style.animation = 'none';
        container.offsetHeight; /* trigger reflow */
        container.style.animation = null; 
    } else {
        let container = view.querySelector("#year");
        if (container) {
            container.style.display = "none";
        }
    }
} );

// https://easings.net/#easeInOutQuad
function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function animateValue(obj, start, end, duration) {
    if (isNaN(start)) start = 0;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        let progress = Math.min((timestamp - startTimestamp) / duration, 1);
        progress = easeInOutQuad(progress);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}