# Style test h1

## h2 test

### h3 tet

#### h4 test

Paragraph

---
<section>
    <section data-background-image="images/test_pattern.webp" data-background-opacity="0.2">
        <h4 class="glow visible backdrop">Click / tap to start </h4>
    </section>
    <section data-background-image="images/test_pattern.webp" data-background-opacity="0.2" data-audio-src="audio/407482__loyalty-freak-music__load.ogg" data-auto-animate>
        <h4>Loading<span class="glow visible">...</span></h4>
        <p>(Remember to turn on your sound)</p>
    </section>
    <section data-background-image="images/test_pattern.webp" data-background-opacity="0.8">
        <h4 class="glow visible backdrop">Press spacebar to begin...</h4>
    </section>
</section>

---
<!-- .slide: data-audio-src="audio/foundations/25.ogg" data-background-image="images/Cipolla-matrix.svg" data-background-size="contain"-->
Notes:
It may be useful however to explore what it means to be an idiot, at least as a counterpoint of what it means to be intelligent. In a half-serious definition, Cario M. Cipolla, describes a stupid person as a person who causes losses to another person or to a group of persons, while themselves deriving no gain or even incurring losses. He continues that stupidity can be found independent of any other characteristic including education and intelligence in other areas and there is no refuge from stupidity, the amount of stupid you'll encounter is roughly consistent between social groups.

So really we're classifying actions, not intelligence, and that all intelligences could act stupidly some of the time. Cipolla's grid provides an economic classification lens, where intelligent behaviour is seen as gain for yourself and others.

### Credits
* http://harmful.cat-v.org/people/basic-laws-of-human-stupidity/
* https://commons.wikimedia.org/wiki/File:Cipolla-matrix.png

---

### Encoding, decoding and compression
Notes:
For a closer look at the differences between traditional and machine learning software let's take a look at compression. Text, images, music and video are all stored in a compressed form. Perhaps the most famous of these, at least for artists, is the good old JPEG image. JPEG is a 20 year old image format with a 10 to 1 ratio of compression and is a lossy format. That means that an image stored as a JPEG is a tenth of the size of the actual bits needed to specify the colour of each pixel, and it permanently and irretrievably loses some information when saved. 

How is this possible? Well, to start with, all information can be compressed. A random signal, imagine flipping a coin, has no information. You can't send a message with random flips. Conversely, written language is not random, and conveys information, but even if you completely ignore word order, letters have a frequency and the frequencies are highly different. You can use this to encode the most frequent letters with the smallest amount of bits (1s and 0s) and the lowest frequency with the most bits. You will save bits compared to just encoding every letter with the same amount of bits (where 26 letters would require 8 bits each).

Second, from research we learned that human vision is less sensitive to fine colour details than fine colour details, and it is more sensitive to variations in colour or brightness over large areas than smaller. That can be exploited to reduce information but in a way that is imperceptible to humans.

Computer scientists studied the research, did experiments and came up with algorithms that compressed an image's data with minimal effect on it's perceived output. Their software encodes an image as a JPEG and then decodes back to an image of typical pixel data.

Neural networks can also encode and decode information. But instead of mathematics and programming they are fed a large set of images to learn how to encode and decode them. 
TODO:

### Credits
* https://en.wikipedia.org/wiki/JPEG#JPEG_codec_example
* [Huffman Codes: An Information Theory Perspective](https://www.youtube.com/watch?v=B3y0RsVCyrw)
* [The Unreasonable Effectiveness of JPEG: A Signal Processing Approach](https://www.youtube.com/watch?v=0me3guauqOU)


# Unused

* [Video by Sergey Katyshkin from Pexels](https://www.pexels.com/video/red-and-blue-lines-flowing-over-face-10740762/)

* [Cosmic Eye — Zoom through the Universe!](https://www.youtube.com/watch?v=8Are9dDbW24)