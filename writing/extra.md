

### Input: 

* Noise
* Features

Notes:
TODO



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






# Unused

* [Video by Sergey Katyshkin from Pexels](https://www.pexels.com/video/red-and-blue-lines-flowing-over-face-10740762/)

* [Cosmic Eye — Zoom through the Universe!](https://www.youtube.com/watch?v=8Are9dDbW24)