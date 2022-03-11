<!-- .slide: data-audio-src="../audio/foundations/01.ogg" data-background-video="../video/2020-10-10_LakeErie_beach+waves+close_2.mp4" data-background-video-muted data-audio-advance="1500" -->
Welcome to
# Foundations

Notes: 
Welcome to Foundations, the first of five tutorials in the series.

In less than an hour we will cover some important material that will help you understand machine learning and artificial intelligence, the technologies they are built on, and why I think they are important.

---
<!-- .slide: data-audio-src="../audio/foundations/02.ogg" data-background-video="../video/erie - co_ai_existence.mp4" data-background-video-muted data-audio-advance="1500" -->
# Foundations

* Digital
* Boolean logic & Algorithms
* Software
* Intelligence
* Digital Intelligence

Notes:
We'll start this tutorial by challenging our assumptions and looking at the fundamental principles of digital technologies, leading us to a better conception of what software systems, like artificial intelligence are capable of and what makes them so strange and powerful.

We'll talk about some eternal questions like the nature of intelligence and freewill. These deep questions are being explored in some of the latest research, and we'll see how studying artificial intelligence helps us to understand all intelligence, including our own.

We'll wrap up with how making intelligence digital gives it the strange properties of all digital things and the great potential and dangers of digital minds.

Let's begin!

---
# Digital
<!-- .slide: data-audio-src="../audio/foundations/03a.ogg" data-background-video="../video/digital - analog - 720.mp4" data-background-video-muted -->
Notes:
We are told we live a digital world. And we've gotten used to living there, and in many ways, we've forgotten how strange it is.

Our understanding of what digital really is has also been clouded by powerful economic interests who have tried to make digital things act like the scarce physical things they used to sell. Indeed, at least at the level of electric signals the digital world is still analog - still part of a reality it was designed to transcend. 

So at its lowest level a digital signal is still analog. Being analog it is subject to noise - it has minute fluctuations - it is a messy or noisy signal.

### Credits
* [Co(AI)xistence, Justine Emard](https://www.youtube.com/watch?v=vcdUTEpSV1s)


<!-- .slide: data-audio-src="../audio/foundations/03b.ogg" data-background-image="../images/digital-signal-noise.svg" data-audio-advance="1500" --> 
Notes:
The blue line in the image represents this signal. You can see it alternating between a 1 and a 0, the two digital values, but it is still is affected by noise - those squiggly bits. But a digital signal is designed to overcome this noise, not to let it affect the signal. 

### Credits
* [Video by Pressmaster from Pexels](https://www.pexels.com/video/digital-calculation-of-geometrical-space-3141211/)
* [Video by Luis Quintero from Pexels](https://www.pexels.com/video/abstract-video-4990321/)

---
<!-- .slide: data-audio-src="../audio/foundations/04a.ogg" data-background-video="../video/zoom_microchip.mp4" data-background-video-muted data-background-opacity="0.4" -->
Digital is binary (two values):

# 0 and 1

No noise = perfect replication and transfer <!-- .element: class="fragment" data-audio-src="../audio/foundations/04b.ogg" data-audio-advance="1000" -->

Notes:
Digital technology is designed to create a fantasy world where noise doesn't exist. If you want to prevent noise from messing up your signal, it's easiest to distinguish between only two imperfect, noisy values. The more fluctuating values you try to distinguish from each other the more likely you are to confuse one for another. So two values is optimal and if you can do this perfectly, every time, then you can have perfect, lossless information storage and transfer.

This lossless information then can be copied infinitely and stored without changing or degrading in any way. Lossless information makes digital fundamentally different.

### Credits
[Zoom Into a Microchip](https://www.youtube.com/watch?v=Fxv3JoS1uY8) by NISENet [CC-NC-SA]
    
---
<!-- .slide: data-audio-src="../audio/foundations/05a.ogg" data-background-video="../video/Life_in_life-xP5-iIeKXE8 720.mp4" data-background-video-loop data-background-video-muted data-background-opacity="0.2" data-audio-advance="1000"-->
              
Digital technologies are useful and strange:

<div class="tall">

* <!-- .element: class="fragment" data-audio-src="../audio/foundations/05b.ogg" --> <strong>Everything is copied.</strong> Movement is done by copying and then deleting. 
* <!-- .element: class="fragment" data-audio-src="../audio/foundations/05c.ogg" --> <strong>Copies are perfect</strong> and indistinguishable. They act like <em>numbers</em> not things. 
* <!-- .element: class="fragment" data-audio-src="../audio/foundations/05d.ogg" --> <strong>Software is deterministic</strong> and thus repeatable by default, true randomness is difficult.

</div>

Notes:
Digital technologies are both useful and strange.

First, everything digital is copied. In physical reality objects move, but "moving" in the digital reality is done by making a second copy and then deleting the first. Usually, we don't even bother deleting because that means the extra work of copying zeros over the data, instead we just mark that space as available for new copies. Imagine the world you inhabit but every time you picked up your phone up from the table you left a copy of it sitting there.

Second, copies are perfect and indistinguishable from each other. In physical reality copies are made of different atoms, but digital copies are the exact same thing in two different places. Imagine digital stuff more like numbers than physical objects; when you write down the number 5 it has the exact same value as every other 5 written down by everyone else. Fives aren't copies, they are the same thing. Every bit of digital data, software, music, image can be thought of as just a very large number.

Finally, software built with digital technologies is deterministic - it is repeatable by default. Each time you run it will do the same thing. True randomness actually becomes difficult.

### Credits:
* [Life in life](https://www.youtube.com/watch?v=xP5-iIeKXE8) by Phillip Bradbury [CC]

---
<!-- .slide: data-background-video="../video/code - mutations - short 720.mp4" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Mutations_ - William Latham](https://www.youtube.com/watch?v=7sadS5wuOjU) (1991)
* [_Code Profiles_ - W. Bradford Paly](https://www.youtube.com/watch?v=Hs8rDvC3GZg) (2002)
* [_Hello World!_ - Iamus Computer](https://www.youtube.com/watch?v=bD7l4Kg1Rt8) (2012)

---
<!-- .slide: data-audio-src="../audio/foundations/06a.ogg" data-background-image="../images/George_Boole_color.jpg" data-background-size="contain" data-auto-animate -->
# Boolean Algebra <!-- .element: class="r-fit-text" -->

Notes:
In the middle of the 19th century George Boole published his work that introduced an "algebra of logic" which was later called Boolean algebra. 

### Credits
* https://en.wikipedia.org/wiki/George_Boole


<!-- .slide: data-audio-src="../audio/foundations/06b.ogg" data-background-image="../images/George_Boole_color.jpg" data-background-opacity="0.2" data-background-position="top" data-auto-animate -->
0 = False

1 = True

<table class="text fragment" data-audio-src="../audio/foundations/06c.ogg">
<tr>

<tr>
<tr>
<td width="33%">

### AND

<div class="fragment" data-audio-src="../audio/foundations/06d.ogg" data-audio-advance="2000">

1 AND 1 = 1

**1 AND 0 = 0**

0 AND 0 = 0

</div></td>
<td width="33%">

### OR 

<div class="fragment" data-audio-src="../audio/foundations/06e.ogg" data-audio-advance="2000">

1 OR 1 = 1

**1 OR 0 = 1**

0 OR 0 = 0

</div></td>
<td width="33%">

### NOT

<div class="fragment" data-audio-src="../audio/foundations/06f.ogg" data-audio-advance="1500">

NOT 1 = 0

NOT 0 = 1

</div></td>
</tr>
</table>

Notes:
The only values in Boolean algebra are true and false, which map to binary values 1 and 0. Instead of addition and multiplication the main operations are AND, OR and NOT. AND and OR combine values in logical ways. 
ANDing two values is only true if both are true. 
ORing two values is true if either of the values is true.
NOT allows for the inversion of a value: NOT true is false, and NOT false is true.

There are few other more complex operators that are important, but for now we just need to know that that Boolean logic was foundational for digital computer circuits.

### Credits
* https://simplycoding.in/boolean-algebra/

---
<!-- .slide: data-audio-src="../audio/foundations/07a.ogg" data-background-video="../video/Al-Khwarizmi - Father of Algebra-CaLOYlvbF9s.mp4" -->
# Algorithm

Notes:
The other important concept to understand is that of an "algorithm". That's a fun word, with an origin from the Latinization of the Persian scholar al-Khwarizmi. His tract _On the Calculation with Hindu Numerals_, written in Baghdad in the ninth century, is responsible for introducing Hindu-Arabic numerals to the West, along with the corresponding new techniques for calculating them, namely algorithms.

### Credits <!-- .element: class="attribution" -->
* [Al-Khwarizmi - Father of Algebra](https://www.youtube.com/watch?v=CaLOYlvbF9s)
  
### Credits
* [Three Thousand Years of Algorithmic Rituals: The Emergence of AI from the Computation of Space](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/)
* [The Weird Truth About Arabic Numerals](https://www.youtube.com/watch?v=Ar7CNsJUm58)


<!-- .slide: data-audio-src="../audio/foundations/07b.ogg" data-background-image="../images/algorithm_latent-diffusion.webp" data-background-opacity="0.7" -->
Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food. <!-- .element: class="quote" -->
_Jean-Luc Chabert_ <!-- .element: class="attribution" -->

Notes:
[Matteo Pasquinelli's](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/) wonderful article describes it this way:
“Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food.”

### Credits
* [Three Thousand Years of Algorithmic Rituals: The Emergence of AI from the Computation of Space](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/)


<!-- .slide: data-audio-src="../audio/foundations/07c.ogg" data-background-image="../images/Ramon Llull manuscript 2.jpg"-->
Notes:
Algorithms are ancient technology, that emerged from ritual practices and the organization of social life. They are emergent processes that materialize out of a previous and spontaneous division of space, time and labour. Cultures speak of recipes, rules, techniques, processes, procedures, methods, and strategies. 

Fundamentally we are talking about a systematic process of discrete steps that emerges from a repetition of the process. You want to be able to repeat the computation or the outcome, despite the participants or components being not quite the same. 

### Credits
* Maddox-Harle, Robert. Review of Dia-Logos: Ramon Llull’s Method of Thought and Artistic Practice ed. by Amador Vega, Peter Weibel and Siegfried Zielinski. Leonardo, vol. 53 no. 3, 2020, p. 341-342. Project MUSE https://muse.jhu.edu/article/757589


<!-- .slide: data-audio-src="../audio/foundations/07d.ogg" data-background-video="../video/W. Bradford Paley - Code Profiles-Hs8rDvC3GZg.mp4" data-background-video-loop data-background-video-muted data-audio-advance="1000" -->
Software algorithms
Notes:
Our society is now inundated by software algorithms. Software programmers, like myself, have a bias against doing anything manually more than once. I often get the feeling that humans are terrible at following algorithms correctly, that software is a much more willing, accurate, reliable and quick comrade for my algorithms.

### Credits <!-- .element: class="attribution" -->
* [_Code Profiles_ - W. Bradford Paley](https://www.youtube.com/watch?v=Hs8rDvC3GZg)


<!-- .slide: data-audio-src="../audio/foundations/08a.ogg" -->
<table><tr><td width="50%">

<img data-src="../images/Alan_Turing.jpg">

</td>
<td> 

### Universal Computing Machine <!-- .element: class="left left-margin" -->

* Read / Sense 
* Write / Act
* Compare / Feel

</td><tr></table>

Notes:
In 1937, Alan Turing introduced the idea of the Universal Computing Machine. His thought experiment involved a simple machine that could read, write, and compare symbols on a length of paper or tape with no understanding of the symbols being read and written other than changing the "state" of the machine. You could also think of these three actions in less mechanical terms: sensing, acting, and feeling. 
### Credits
* https://www.reddit.com/r/ColorizedHistory/comments/e6ugox/alan_turing_the_father_artificial_intelligence/


<!-- .slide: data-audio-src="../audio/foundations/08b.ogg" data-background-video="../video/turing_machine.mp4" data-background-video-loop data-audio-advance="1000" -->

Notes:
What he was trying to do was create the simplest possible machine, that was still capable of computation. In fact, given an infinitely long tape Turing proved that this machine could compute anything. Everything that could be rendered computable _was_ computable using only these operations and a machine with an internal state or what is called a state machine. Each state has a rule for how to read, write, compare, move the tape and change to another state.

This creates a simple, universal algorithm for computation. And if sensing, acting and feeling are all that is necessary then perhaps all things capable of those properties that have in some sense an ability to compute anything.

### Credits <!-- .element: class="attribution" -->
* [_Turing Machines Explained_ - Computerphile](https://www.youtube.com/watch?v=dNRDvLACg5Q)


<!-- .slide: data-audio-src="../audio/foundations/09a.ogg" data-background-image="../images/computation_theory_of_mind_RealESRGAN-pbaylies-hr-paintings.webp" -->
Computation and Rule 110

Notes:
And what is it to compute? The transformation of inputs to outputs that follows an algorithm. There are competing theories about the physical phenomenon of computation, and an ongoing debate on the computational theory of mind, or computationalism, that holds that the human mind is an information processing system.

### Credits
* https://en.wikipedia.org/wiki/Computation
* https://en.wikipedia.org/wiki/Computational_theory_of_mind


<!-- .slide: data-audio-src="../audio/foundations/09b.ogg" data-background-image="../images/One-d-cellular-automaton-rule-110.gif" data-background-size="contain" -->
Notes:
I'm going to set that aside and instead show you Rule 110. Rule 110 is an elementary cellular automaton explored by Stephen Wolfram in 1985 and proved to be Turing complete, or capable of universal computation in 2004 by Matthew Cook (which resulted in legal action that blocked the proof for several years).

There are 88 possible unique cellular automata, which are one-dimensional patterns of 0s and 1s that evolves according to a simple algorithm. Here the ones are black and the zeros are white. Similar to how a Turing machine functions, using Rule 110 you can iteratively create new lines of ones and zeros, the next line determined by the previous, by reading the left, current, and right positions and writing out a new value below, given the rules, which look like Tetris triangle pieces. Three values in, a new value writes to the line below, then move one step over.

### Credits
* https://en.wikipedia.org/wiki/Rule_110 


<!-- .slide: data-audio-src="../audio/foundations/09c.ogg" data-background-video="../video/Rule 110 Simple Implementation Visual-RaZinCdrwRg 720.mp4" data-background-video-muted data-background-opacity="0.4" -->
Notes:
The patterns of 1s and 0s created by this evolution are neither completely stable nor completely chaotic. Structures appear and interact with each other in complex ways. Cook was able to prove that Rule 110 could emulate another known universal computation by use of "spaceships" and other structures. What the heck do spaceships have anything to do with this? Spaceships are just the common name for a self-contained structure that can move through the environment. In this case, the environment is a repeating stable pattern and the spaceship is a structure that can move amongst it. Once you have spaceships then you can start transmitting information. Once you can transmit then you can build read, write and compare... and universal computation.

### Credits <!-- .element: class="attribution" -->
* [_Rule 110 Simple Implementation Visual_ - Ryan Edwards](https://www.youtube.com/watch?v=RaZinCdrwRg)


<!-- .slide: data-audio-src="../audio/foundations/09d.ogg" data-background-image="../images/Animated_spaceships.gif" data-audio-advance="1500" -->
Notes:
Rule 110 is arguably the simplest known Turing complete system. The essential takeaway is that complex algorithms are not required, instead there are particular forms of algorithms that surf on the boundary of stability and chaos that "come alive" with computational possibilities. 

### Credits <!-- .element: class="attribution" -->
* [Spaceships from Conway's _Game of Life_](https://en.wikipedia.org/wiki/Spaceship_(cellular_automaton))

---
<!-- .slide: data-audio-src="../audio/foundations/10a.ogg" data-background-video="../video/zoom-out-brain-chip.mp4" data-audio-advance="1000" -->

Notes:
How could something as simple as a Turing machine calculate something as complex as a modern video game or simulations of The Big Bang? The reason this is possible is that simple algorithms can be combined and built on each other. Digital algorithms inherit digital properties: perfect replication and execution thus you can start to build infinitely long chains of algorithms. Like with the Turning machine, the infinitely long nature of the tape becomes critical, as does the speed at which you manipulate it. Today's pocket sized computers perform tens of billion operations per second and store hundreds of billions of bits. They have access to essentially infinite bits through the internet.

As the length and complexity of each algorithm grows, human understanding of it fades, until we add a layer of abstraction to hide all the underlying complexity. No human has, nor ever will have, a complete understanding of the full details and interactions of the hardware and software running on a typical phone. We are similarly ignorant of the human brain and even a single neuron in the brain.

### Credits <!-- .element: class="attribution" -->
* [_Zoom Into a Microchip_](https://www.youtube.com/watch?v=Fxv3JoS1uY8&t=1s)
* [_Allen Institute for Brain Science_](https://www.youtube.com/watch?v=e74pCJmd07s)


<!-- .slide: data-audio-src="../audio/foundations/10b.ogg" data-background-video="../video/2 Bit Relay Adder-m5-iaR-awzg.mp4" -->
Notes:
Using a Universal Turing Machine to calculate anything but the simplest of solutions is a pain, and so is programming machines in binary. For example, you might use digital circuits, 1 and 0, that use boolean algebra to build a "binary adder", that adds two binary numbers. With only a few adders you might interact with them directly, but once you have millions, they are hidden by further layers so that programmers don't have to worry about managing them, but just write a program to add two decimal numbers.

### Credits <!-- .element: class="attribution" -->
* [2 Bit Relay Adder](https://www.youtube.com/watch?v=m5-iaR-awzg)


<!-- .slide: data-audio-src="../audio/foundations/10c.ogg" data-background-image="../images/CLIP_neuron.webp" data-background-size="contain" data-background-color="white" data-audio-advance="1500" -->
Notes:
We've also found abstraction in the brain at the level of individual neurons. There are neurons that respond to abstract semantic concepts around a high-level theme, rather than specific visual features. A famous example was the "Halle Berry" multi-modal neuron that responded to photographs, sketches and the literal text, "Halle Berry". OpenAI's CLIP-system also contains similar artificial digital neurons. We can see here the "Spider-Man" neuron.

Thus abstraction isn't just something we do because of complexity, it arises from complexity and computation. It is an important part of "knowing" or "understanding" or more specifically, semantic clustering, where lower level patterns are invariant to the conditions of measurement. For example, rotated images of Spider-Man will trace different neural paths but still always travels through the Spider-Man neuron. That the path to the Spider-Man can include text, and presumably audio in human brains points to the physicality of conceptual representations in minds.

### Credits
* https://openai.com/blog/multimodal-neurons/
* https://www.youtube.com/watch?v=dNRDvLACg5Q
---
<!-- .slide: data-audio-src="../audio/foundations/11.ogg" data-background-video="../video/15 Sorting Algorithms in 6 Minutes-kPRA0W1kECg.mp4" data-background-opacity="0.2" data-audio-advance="1500" -->
# Software

Notes:
Abstraction built of layers of boolean algebra and algorithms running on digital circuits is the domain of software. Traditional software, written by programmers using programming languages, is the design and recording of these algorithms. Programmers essentially record their own decision-making into software.

While all media and art can be thought of as recordings of the creators decision-making, say, a musicians decisions about how to play their instrument at each moment, there is a difference - software can very easily take input when it is experienced. It "executes" on this input, whereas other media lacks input or is quite difficult to incorporate input into the experience. Certainly many performers would say an audience's reactions affects their performance, but it is rare for the input to really drive the art. Software is algorithmic by nature.

### Credits <!-- .element: class="attribution" -->
* [_15 Sorting Algorithms in 6 Minutes_ - Timo Bingmann](https://www.youtube.com/watch?v=kPRA0W1kECg)
  
---
<!-- .slide: data-background-video="../video/life in life - mr computer image - combiantes - binary 720.mp4" data-audio-advance="1000" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Mr. Computer Image_](https://www.youtube.com/watch?v=Lkyhkz_huLw) (1968)
* [_Cambiantes_ - Analivia Cordeiro](https://www.youtube.com/watch?v=XYY7oMiWxaw) (1976)
* [_Life in Life_ - Phillip Bradbury](https://www.youtube.com/watch?v=xP5-iIeKXE8) (2012) 
---
<!-- .slide: data-audio-src="../audio/foundations/12.ogg" data-background-video="../video/4_types_of_software.mp4" data-background-video-loop data-background-opacity="0.4" -->
1. **Recording**: no input after initial recording
2. **Mapping**: takes input, produces output, but stateless
3. **Stateful**: has variables / internal state (Turing machine)
4. **Adaptive**: adapts to environment through time

Notes:
Software can be classified in various categories. Sofian Audry, in his book _Art in the Age of Machine Learning_ has a nice classification that includes:
1. Recordings, like a digital image or video, that don't accept input when you view them.
2. Mappings, which take input and produces output, but are stateless. For example, inputting a photo to software that transforms it to a painting.
3. Stateful software has at least one variable, usually many more. Like a game. 
4. Adaptive software adapts, which can also be considered learning, which is usually seen in machine learning or AI. Generally this learning is done before the software is used rather than the software learning as it is used.

### Credits
* https://dsgiitr.com/work/neural_style_transfer/
* https://www.flickr.com/photos/mvives/albums/72157625126300997/
* [MIT Robot Learns How to Play Jenga](https://www.youtube.com/watch?v=o1j_amoldMs)


<!-- .slide: data-audio-src="../audio/foundations/13a.ogg" data-background-image="../images/art_forms_RealESRGAN-pbaylies-hr-paintings.webp" -->
## Input and play <!-- .element: class="backdrop" -->

Notes:
As an aside, one of the things I love about software-based art is the interactivity. When people spend time with art, it is often just a few minutes with a piece in a gallery, an hour or two with film, tens of hours for novels, etc. Software with enough depth can provide ten or hundreds of hours of interactivity. Games are the best example of that.


<!-- .slide: data-audio-src="../audio/foundations/13b.ogg" data-background-image="../images/play.jpg"-->
## Play

Notes:
Interactivity also means the art can respond to the user, which allows for play and I'm a big fan of play. Play is fundamentally connected to freedom, as is art making. Both require freedom to experiment and relative safety to try out new ways of acting, thinking and being. 

### Credits
* https://pxhere.com/en/photo/692638 [CC0]


<!-- .slide: data-audio-src="../audio/foundations/13c.ogg" data-audio-advance="1200" -->
## The Goldilocks Zone
<table class="text"><tr><td width="55%">

**M**ost **A**dvanced, 
**Y**et **A**cceptable

<img data-src="../images/Loewy_starliner_coupe.jpg">

</td>
<td> 

Zone of proximal development

<img data-src="../images/Zone_of_proximal_development.png">

</td><tr></table>

Notes:
Play allows for learning, and like practice, that learning is enhanced when the skills, actions or thinking being developed are not too easy nor too hard. Mediums that can adapt to the audience to find that sweet spot, familiar enough but different, what [Raymond Loewy](https://en.wikipedia.org/wiki/Raymond_Loewy) described as MAYA: Most Advanced, Yet Acceptable, and [Lev Vygotsky](https://en.wikipedia.org/wiki/Lev_Vygotsky) called the lower limit of the "zone of proximal development" have a powerful ability to change minds. I call it the Goldilocks zone or the next best thing to learn.

If you're an artist who wants to help their audiences make profound positive changes to their lives, interactive software can be one of the most effective mediums.

### Credits
* https://en.wikipedia.org/wiki/Raymond_Loewy
* https://en.wikipedia.org/wiki/Zone_of_proximal_development
  
---
<!-- .slide: data-audio-src="../audio/foundations/14a.ogg" data-background-video="../video/American1958.mp4" data-background-opacity="0.4"-->
# Digital ethics

1. Who decides what, and how, things get made? <!-- .element: class="fragment" data-audio-src="../audio/foundations/14b.ogg" -->
2. Who gets to make it? <!-- .element: class="fragment" data-audio-src="../audio/foundations/14c.ogg" -->
3. Who gets access to what has been made? <!-- .element: class="fragment" data-audio-src="../audio/foundations/14d.ogg" data-audio-advance="1200" -->

Notes:
Let's take a step back, now that we understand the incredible power of digital technologies, abstraction and interactive software built with them, we need to ask a few questions. What are the economic, cultural and ethical implications of digitization? Anytime economics is involved, I like to boil it down to three "who" questions:

1. Who decides what, and how, things get made?
2. Who gets to make it?
3. Who gets access to what has been made?
Those questions have had, and will continue to have, a profound effect on my life. My favourite pithy answer to all three questions is "everyone and anyone", but that is really just a guiding principle and it is actually the specific details that are important. I believe that digital things need different answers than physical things, or more correctly, "digitalness" makes it much easier to make those answers more inclusive; to make every aspect more accessible and democratic.

### Credits
* https://archive.org/details/American1958_2


<!-- .slide: data-audio-src="../audio/foundations/15a.ogg" data-background-image="../images/Sacred_Library_Ryan_Moulton_latent-diffusion.webp" data-background-size="contain" -->
# Digital Libraries

Notes:
Some artists and many corporations, don't agree with me, particularly in regard to digital things. For example, I believe in and strongly support the concept of libraries. Most people do. 

### Credits <!-- .element: class="attribution" -->
* [_Tour of the Sacred Library_ - Ryan Moulton](https://moultano.wordpress.com/2021/07/20/tour-of-the-sacred-library/) (2021)


<!-- .slide: data-audio-src="../audio/foundations/15b.ogg" data-background-image="../images/TPB.png" data-background-size="contain" data-background-color="rgb(180,180,180)"-->
Notes:
We have had the technology, since at least the origin of The Pirate Bay in 2003, to distribute all the world's digital information at a cost much less than we spend on the world's libraries. But we have decided to not do this. We could make every person with access to the internet into a digital billionaire, with access to everything forever - the largest anti-poverty action in history, likely for the entirety of history, but we choose not to. 


<!-- .slide: data-audio-src="../audio/foundations/15c.ogg" data-background-image="../images/Forbes_bilionaires_headshots_2021.jpg" data-background-size="contain" data-audio-advance="1000" -->
Notes:
We'd rather have only [2755 billionaires](https://en.wikipedia.org/wiki/The_World%27s_Billionaires). 

### Credits
* https://en.wikipedia.org/wiki/The_World%27s_Billionaires
* https://www.forbes.com/sites/kerryadolan/2021/04/06/forbes-35th-annual-worlds-billionaires-list-facts-and-figures-2021/


<!-- .slide: data-audio-src="../audio/foundations/15d.ogg" data-background-image="../images/Eben_Moglen_side_full.webp" data-audio-advance="1500" -->
The great moral question of the twenty-first century is this; if all knowledge, all culture, all art, all useful information can be costlessly given to everyone at the same price that it is given to anyone; if everyone can have everything, anywhere, all the time, why is it ever moral to exclude anyone? <!-- .element: class="quote" -->
_Eben Moglen_ <!-- .element: class="attribution" -->

Notes:
The great moral question of the twenty-first century is this; if all knowledge, all culture, all art, all useful information can be costlessly given to everyone at the same price that it is given to anyone; if everyone can have everything, anywhere, all the time, why is it ever moral to exclude anyone?

### Credits
* https://commons.wikimedia.org/wiki/File:Eben_Moglen_(7141739723).jpg
* re:publica from Germany, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons


<!-- .slide: data-audio-src="../audio/foundations/15e1.ogg" data-background-image="../images/open.webp" data-background-size="contain" -->
Notes:
I found some good answers to these questions in the free and open source software communities. 

### Credits
* https://www.fsf.org
* https://eff.org


<!-- .slide: data-audio-src="../audio/foundations/15e2.ogg" data-background-video="../video/ownership.mp4" data-background-size="contain" data-audio-advance="1500" -->
Notes:
I found other good answers in decolonization and anti-capitalist movements. Almost always the answers were confounded by concerns of ownership. History has demonstrated that a critical questioning of ownership is a requirement for a just and ethical society. Who and what can or should be owned are fundamental questions about how we organize our economy and culture.

### Credits <!-- .element: class="attribution" -->
* [_in Pursuit of Venus [infected]_ - Lisa Reihana](https://www.youtube.com/watch?v=WmMRF5nw9UI)


<!-- .slide: data-audio-src="../audio/foundations/15f.ogg" data-background-video="../video/candles.mp4" data-audio-advance="1000" -->
Notes: 
When you use digital technologies you become intrinsically linked to the great moral question: when the value others gain dwarfs the cost of your sacrifice, at what point does it become criminal not to make that sacrifice? 

I would extend this line of questioning further; at what point do you refuse to improve others lives because of the cost to you, despite the potential savings or gains they could generate for you in the future?

Put more simply, would you pay people enough to create new art and culture so that everyone could have access to what has been made?


<!-- .slide: data-audio-src="../audio/foundations/15g.ogg" data-background-video="../video/candles_for_everyone.mp4" data-audio-advance="1000" -->
1. Who decides what, and how, things get made? 
2. Who gets to make it?
3. Who gets access to what has been made?
   
Notes:
In contrast to a society that accepts billionaires avoiding taxes from their sales of virtual goods that could be copied for free, I see digital technologies as the best opportunity for a once-in-the-history-a-species redefinition of wealth, sharing and sacrifice. To get as close as possible to answering "everyone and anyone" when we ask - who?

---
<!-- .slide: data-background-video="../video/frank - patterns of life.mp4" data-audio-advance="2000" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_February: In the style of Frank Sinatra_ - OpenAI Jukebox](https://soundcloud.com/openai_audio/frank-sinatra) (2019)
* [_Patterns of Life_ excerpt - Julien Prévieux](https://vimeo.com/141794173) (2015)
---
<!-- .slide: data-audio-src="../audio/foundations/16.ogg" data-background-video="../video/Karl Sims Evolved Virtual Creatures compilation-mA8z0GndiYI.mp4" data-audio-advance="2000" -->
Notes:
Alongside the development of digital computers was the development of evolving and self-organizing machines. Machines or software that didn't just have preprogrammed states they could be in, but adapted or learned what states were needed to more effectively interact with their environment. Machines that evolved.

Evolution conjures life. And thus were born the fields of artificial life and artificial intelligence.

### Credits <!-- .element: class="attribution" -->
* [_Karl Sims' Evolved Virtual Creatures_ compilation](https://www.youtube.com/watch?v=mA8z0GndiYI)


<!-- .slide:  data-audio-src="../audio/foundations/17a.ogg"  data-background-image="../images/AI_venn.png" data-background-size="contain" data-audio-advance="1000" -->
Notes:
Don't worry too much about the terminology. The important thing to understand is that machine learning or ML adds a training process in addition to traditional software programming. The software is trained on numerous examples or data. The collection and selection or curation of that data dramatically effects the capabilities learned by the machine. This allows the machine to learn from the data instead of having humans specify all the actions of the machine.


<!-- .slide:  data-audio-src="../audio/foundations/17b.ogg" data-background-video="../video/Coded Bias-jZl55PsfZJQ.mp4" data-audio-advance="1500" -->
Notes:
When training data controls the output then you end up constantly running into data problems, one of which is called "bias", which is a common criticism of AI systems. However, bias is more of a data collection and curation issue, and all data driven systems, including humans, suffer from bias inherent in their input data.

### Credits <!-- .element: class="attribution" -->
* [_Coded Bias_ trailer excerpts](https://www.youtube.com/watch?v=jZl55PsfZJQ)


<!-- .slide:  data-audio-src="../audio/foundations/17c.ogg" data-background-image="../images/PredPol.jpg" data-background-size="contain" data-audio-advance="1000" -->
Notes:
For example, if you take data on policing, which may be targeted based on existing racial or class distinctions made by the officers, based of their own experiences, which in turn were formed inside a particular (mainstream and policing) culture, you only reinforce the existing bias when the AI recommends policing targets. The machine has no access to reality, only the data it was given to learn from.

### Credits
* https://geolitica.com/public-safety/#accountability


<!-- .slide:  data-audio-src="../audio/foundations/17d.ogg"  data-background-video="../video/network-propagation.mp4" data-background-size="contain" --data-background-video-loop data-audio-advance="1500" -->
Notes:
The most popular current ML technique is deep learning using artificial neural networks. These networks mimic the connectivity of biological brains - taking raw input and passing it through many layers of connections. The information flows through the network being transformed into the final output. These networks, called models, are made up many layers of neurons connected together. The first layer is the input, then there are what is called the "hidden" layers of neurons that process the input, and finally an output layer. How the input signal flows through the hidden layers and gets transformed until reaching the output is the computation of the neural net. We'll cover this in detail in Part 3: Neural Nets and Data.

That this works so well is quite remarkable, but currently training requires a vast amount of data, something that only became feasible with the Internet and the rise of Big Data.

### Credits
* https://towardsdatascience.com/4-intersecting-domains-that-you-can-easily-confuse-with-artificial-intelligence-2233cb6ad7d1
* https://quantdare.com/what-is-the-difference-between-deep-learning-and-machine-learning/


<!-- .slide: data-audio-src="../audio/foundations/18.ogg" data-background-video="../video/Transition_Toronto_small.mp4" data-background-opacity="0.6" data-audio-advance="1500" -->
<table>
<thead>
<tr><td>Traditional software</td><td>Machine learning</td></tr>
</thead>
<tbody>
<tr><td>Engineering</td><td>Scientific observation</td></tr>
<tr><td>Architecture</td><td>Scientific experimentation</td></tr>
<tr><td>Construction</td><td>Trial & error</td></tr>
<tr><td>Design</td><td>Curation</td></tr>
<tr><td>Craft</td><td>Gardening</td></tr>
<tr><td>Control</td><td>Teach & collaborate</td></tr>
</tbody>
</table>

Notes:
As we will see, the process of creating machines that learn is dramatically different from programming machines with traditional software methods.

There are many analogies, but a consensus suggests that machine learning processes are more exploratory and some aspects require less technical proficiency. While many parts of the full machine learning development lifecycle still require tradition software programming, the curation of datasets and the training phases are more similar to teaching and gardening - certainly difficult to master but considerably easier for novices to achieve success. Hours and days rather than weeks or months of education. At least, for the sake of this tutorial I'll pretend that is the case.


<!-- .slide: data-audio-src="../audio/foundations/19a.ogg" data-background-image="../images/feature_visualization.png" data-background-size="contain" data-audio-advance="1000" -->
Notes:
Machine learning excels at pattern recognition and prediction. Input to software is almost always noisy and filled with extraneous or non-useful data. Detecting the signal or useful information is difficult. Unlike traditional software where humans study patterns in the data, then create equations that try to detect or isolate those patterns, modern ML systems accept all the input and are trained to find the needed information. It is hard for humans, with our own sophisticated perceptual system that we're not very conscious of, to understand how to filter the input usefully. Indeed, after training, ML systems can have structures resembling our perceptual system at the start of their layered network.

### Credits
* https://distill.pub/2017/feature-visualization/


<!-- .slide: data-audio-src="../audio/foundations/19b.ogg" data-visibility="hidden" -->
1. Mapping: takes input, produces output, but stateless
2. Stateful: has variables / internal state
3. Adaptive: adapts to environment through time

Notes: 
Recall the various levels of interactivity and adaptation discussed previously. Machine learning exists at all levels that take input. 


<!-- .slide: data-audio-src="../audio/foundations/19c.ogg" data-background-image="../images/face_recog_summary_openface.jpg" data-background-size="contain" data-visibility="hidden" -->
Notes:
At the first level you have systems that do pattern recognition and translation. For example, classifying images, such as facial recognition surveillance systems. Input data, an image, moves through the software that was trained on pairs of images and names, and is transformed into an output, a name.

### Credits
* https://cmusatyalab.github.io/openface/


<!-- .slide: data-audio-src="../audio/foundations/19d.ogg" data-background-image="../images/neural_music_architecture.svg" data-background-size="contain" data-background-color="rgb(100,100,100)" data-visibility="hidden" -->
Notes:
Generally when you add the element of time, then you require the next level of system, something that has a memory. For language, music and video input, this memory becomes critical for learning. These inputs have correlations between events at different times, so the system must be able to remember what has happened previously.

### Credit
* https://jongwook.kim/blog/Neural-Music-Synthesis.html


<!-- .slide: data-audio-src="../audio/foundations/19e.ogg" data-background-image="../images/deepmind_games.webp" data-background-size="contain" data-visibility="hidden" -->
Notes:
The final level, adaptive, is often associated with reinforcement learning used for things like playing games or robots interacting with their environment. It can also be thought of more wholistically as the entire process of humans creating a machine learning system - adapting it to be more useful to the problems they are trying to solve.

### Credits
* https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules

---
<!-- .slide: data-background-video="../video/learning to - rock.mp4" data-audio-advance="1000" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Robot's Rock_ - The Three Sirens by Nicolas Baginsky](https://www.youtube.com/watch?v=RcxuXYE9UeY) (2008)
* [_Learning to see - We are made of star dust_ - Memo Akten](https://vimeo.com/242498070) (2018)

---
<!-- .slide: data-audio-src="../audio/foundations/20a.ogg" data-background-video="../video/Zebrafish Brain-YLVdRPVj-XM.mp4" data-background-size="contain" data-audio-advance="1000" -->
# Intelligence

Notes:
Can software be intelligent? Certainly software that learns seems to be intelligent is some way. What about just following a sophisticated algorithm? How sophisticated does an algorithm have to be before it is considered intelligent?

Before we continue we need to stop and think about what we mean when we say "intelligence". There are many nuances and disagreements about what constitutes intelligence, and one of things that excites me most about the study of _artificial_ intelligence is how it helps us to understand _all_ intelligences.

We are in the midst of developing a real understanding of own brains through better imaging technologies. Just recently we saw that associative memories seem to be formed by the removal and addition of neural synapses. At the same time we can test our theories using digital minds that mimic the principles of the connections and signals that we observe. 

### Credits <!-- .element: class="attribution" -->
* [_Zebrafish Brain_](https://www.youtube.com/watch?v=YLVdRPVj-XM)

### Credits
* https://theconversation.com/where-are-memories-stored-in-the-brain-new-research-suggests-they-may-be-in-the-connections-between-your-brain-cells-174578


<!-- .slide: data-audio-src="../audio/foundations/20b.ogg" data-background-video="../video/illustris_movie_dmdens_z0_slicing.mp4" data-audio-advance="1000" -->
Notes:
There is an underlying nature of intelligence(s) that are possible in this physical reality. Our brains exploit this in a particular way, but there are many ways, each subtly or grossly attuned to particular tasks.

To see the range of intelligence let's explore a few examples of intelligence very different from ours.

### Credits <!-- .element: class="attribution" -->
* [_Animated projection of the dark matter density distribution_ - Illustris](https://www.illustris-project.org/media/)


<!-- .slide: data-audio-src="../audio/foundations/20c.ogg" data-background-video="../video/Experienced bumblebee pulling string to solve the coiled-string task-4skDs7y_nVU.mp4" data-background-size="contain" data-audio-advance="700" -->
Notes:
Honey bees have a hivemind, and approximately a million nerve cells each. They can count up to 5, choose the smaller or larger number from a group, and even choose "zero" when choosing "less than 1", but they do this without numerical concepts, and researchers were able to create a 4 neuron artificial neural net to replicate this. Bees dance to convey direction and distance to sources of flowers to each other and can solve simple object manipulation problems and learn to solve those problems by watching each other.

### Credits <!-- .element: class="attribution" -->
* [_Experienced bumblebee pulling string to solve the coiled-string task_](https://www.youtube.com/watch?v=4skDs7y_nVU) (2016)
  
### Credits
* https://en.wikipedia.org/wiki/List_of_animals_by_number_of_neurons
* https://phys.org/news/2018-12-bees-nerve-cells-brains.html


<!-- .slide: data-audio-src="../audio/foundations/20d.ogg" data-background-video="../video/The Amazing Journey of the Monarch Butterfly-YEXhI8VQ9W4.mp4"-->
Notes:
Monarch butterflies have a lifecycle that is shorter than their migration pattern. In the summer they live in the northern US, and have a 2-6 week adult lifecycle, and then migrate to a very specific location in central Mexico for the winter and have a 9 month adult lifecycle. Their brain is able to navigate to places they have never been before, indeed, only every 5th generation migrates. Research is still ongoing as to how they navigate using a combination of the sun, magnetic fields, and instinct, but we have identified 536 genes that appear to be associated with migration.

### Credits <!-- .element: class="attribution" -->
* [_The Amazing Journey of the Monarch Butterfly_ - Facts in Motion](https://www.youtube.com/watch?v=YEXhI8VQ9W4) (2020)

### Credits
* https://monarchjointventure.org/monarch-biology/monarch-migration


<!-- .slide: data-audio-src="../audio/foundations/20e1.ogg" data-background-image="../images/cognitive assemblages_latent-diffusion.webp" data-background-opacity="0.8" -->
<div class="r-stack">

<img class="fragment fade-out" data-src="../images/Hayles_Unthought.webp" data-audio-advance="100">

<div class="fragment" data-audio-src="../audio/foundations/20e2.ogg" data-audio-advance="1500">

My position is that all lifeforms, even those lacking brains, such as plants and nematode worms, have cognitive capacities. Once cognition is understood as a much broader capacity than consciousness, the relation between humans, nonhumans and computational media may be radically reconceptualized. Much of the world’s work in contemporary developed countries is done through collectivities through which information, interpretations, and meanings circulate: that is, through cognitive assemblages. <!-- .element: class="quote" -->
_Katherine Hayles_ <!-- .element: class="attribution" -->

</div>
</div>

Notes:
Katherine Hayles, describes this sort of intelligence as nonconscious cognition:
_"My position is that all lifeforms, even those lacking brains, such as plants and nematode worms, have cognitive capacities. Once cognition is understood as a much broader capacity than consciousness, the relation between humans, nonhumans and computational media may be radically reconceptualized. Much of the world’s work in contemporary developed countries is done through collectivities through which information, interpretations, and meanings circulate: that is, through cognitive assemblages."_


<!-- .slide: data-audio-src="../audio/foundations/20f.ogg" data-background-video="../video/cosmic_zoom_out 720.mp4" data-background-video-muted data-audio-advance="1500" -->
Notes:
Intelligence, or what Hayles calls cognition, is not restricted to a single organ, not even a single organism, but is distributed throughout the body, relationships, tools, institutions, markets, and culture. It emerges from evolutionary dynamics, adaptation, complexity, and what is sometimes called "self-organized criticality" or as studied in artificial life, “from simple rules to complex patterns or behaviours.”

As we saw with Rule 110, simple rules that lead to complex patterns allow for computation or some level of cognitive capacity. We see with the butterflies that learning is not always required. We see with bees that even relatively simple cognitive systems can learn, share knowledge, and learn from watching each other.

### Credits <!-- .element: class="attribution" -->
* [_Cosmic Eye — Zoom through the Universe!_](https://www.youtube.com/watch?v=8Are9dDbW24)


<!-- .slide: data-audio-src="../audio/foundations/21.ogg" data-background-image="../images/narrow_vs_general_RealESRGAN-pbaylies-hr-paintings.webp" data-audio-advance="1500" -->
### Narrow vs General

Notes:
Computer science describes intelligence as narrow or weak versus general or strong. Narrow intelligences have narrow task skills, but general intelligences have broader capabilities. Chess playing is narrow, human intelligence is general. Humans adults are capable of lifelong learning, very quickly adapting to novel challenges and learning new skills. What does it take to go from narrow to general?

There is broad consensus that we haven't yet found any narrow intelligence that is considered conscious, but at what point does a nonconscious cognitive process transition to conscious general intelligence, and are those two always linked?


<!-- .slide: data-audio-src="../audio/foundations/22a1.ogg" data-background-image="../images/no_self_without_others_RealESRGAN-pbaylies-hr-paintings.webp" -->
### So what is consciousness?

There is no self without awareness of, and engagement with, others.<!-- .element: class="quote fragment" data-audio-src="../audio/foundations/22a2.ogg" data-audio-advance="500" -->
_Antonio Damasio_<!-- .element: class="attribution" -->

Notes:
Most researchers agree the ingredients for consciousness are memory and some model of the self and others. The neuroscientist Antonio Damasio as puts it; "there is no self without awareness of and engagement with others." This modelling helps to create and maintaining a coherent picture of the world. This coherency shouldn't be underestimated, we even have trouble remembering foreign concepts.


<!-- .slide: data-audio-src="../audio/foundations/22b.ogg" data-background-video="../video/Piaget’s Schema - Accommodation and Assimilation of New Information-EYbCE1udazw.mp4" data-audio-advance="800" -->
Conscious experiences are highly informative (differentiated) and always part of a cohesive experience (integrated). <!-- .element: class="quote" -->
_Anil Seth_ <!-- .element: class="attribution" -->

Notes:
Another neuroscientist, Anil Seth, uses the terms differentiation and integration: conscious experiences are highly informative (differentiated) and always part of a cohesive experience (integrated). We perceive the world as made up of things that behave like things - taking up space and moving through space and time. Moving instead of being copied. Things that are separate and different from each other.

We base these models of the world on our experiences, but what we think of as our perception of the world is extremely limited, as an investigation of our visual system reveals.

### Credits <!-- .element: class="attribution" -->
* [_Piaget’s Schema: Accommodation and Assimilation of New Information_ - Sprouts](https://www.youtube.com/watch?v=EYbCE1udazw)

### Credits
* [The Neuroscience of Consciousness – with Anil Seth](https://www.youtube.com/watch?v=xRel1JKOEbI)


<!-- .slide: data-audio-src="../audio/foundations/23a.ogg" data-background-image="../images/Retinal_Image.webp" -->
### How we see

Notes:
Our eyes mainly have good detail in a very small area, but more shockingly they are often in motion, and while moving our visual sensitivity is strongly impaired. This is not anyone's perception of how they view the world. Rather than a constant stream of visual input, our eye takes visual samples of the world and combines them with motion and orientation signals in a rich image processing circuitry of its own. This information is used to build the world we perceive in the brain which feels coherent and constant.

### Credits
* https://upload.wikimedia.org/wikipedia/commons/c/cb/Retinal_Image.png
* [Perceptual saccadic suppression starts in the retina](https://www.nature.com/articles/s41467-020-15890-w)


<!-- .slide: data-audio-src="../audio/foundations/23b.ogg" data-background-image="../images/9_bottom_Eye_Nerve_cell_Wei_Li_NEI_720.jpg" -->
Notes:
Our brain is locked inside our skull with no direct access to the outside world. It only receives signals which have already gone through a bunch of processing (for examples the retina has about 100 million neurons of 5 different types). It gets a noisy, meaningless signal that it interprets according to prior expectation or beliefs.

### Credits
* http://lightexhibit.org/bio_image84.html


<!-- .slide: data-audio-src="../audio/foundations/23c.ogg" data-background-image="../images/Simplified-scheme-of-the-hierarchical-predictive-coding-framework-Friston-2005-2008_big.jpg" -->
Notes:
What we see is our brains best guess at what is happening. Other research has investigated "predictive coding" where the brains predictions and the sensory information flow in opposite directions and only errors in the prediction are propagated. 

### Credits
* https://www.researchgate.net/figure/Simplified-scheme-of-the-hierarchical-predictive-coding-framework-Friston-2005-2008_fig1_266401430


<!-- .slide: data-background-image="../images/natural image reconstruction.webp" data-audio-src="../audio/foundations/23d1.ogg" -->

<div class="r-stack">

<img class="fragment fade-out" data-src="../images/Surfing_Uncertainty.jpg" data-audio-advance="100" >

<div class="fragment" data-audio-src="../audio/foundations/23d2.ogg" data-audio-advance="1500">

Our brains actually generate sensory data to match what’s coming in, using internal models of the world and of our bodies. These “generative models” give rise to multiple hypotheses about the sources of the incoming sensory data, and the most likely hypothesis becomes a perception. 
But this is an ongoing process. The brain compares generated with incoming data, identifies any errors and updates its internal models as necessary, so that it can predict and thus perceive more accurately the next time around. <!-- .element: class="quote" -->
_Andy Clark_ <!-- .element: class="attribution" -->

</div>
</div>

Notes:
In _Surfing Uncertainty: Prediction, action, and the embodied mind_, Andy Clark puts it this way, 
"our brains actually generate sensory data to match what’s coming in, using internal models of the world and of our bodies. These “generative models” give rise to multiple hypotheses about the sources of the incoming sensory data, and the most likely hypothesis becomes a perception.

But this is an ongoing process. The brain compares generated with incoming data, identifies any errors and updates its internal models as necessary, so that it can predict and thus perceive more accurately the next time around."

### Credits
* https://www.newscientist.com/article/mg23030681-300-do-our-dynamic-brains-predict-the-world/
* [Deep image reconstruction from human brain activity](https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1006633#sec021)


<!-- .slide: data-audio-src="../audio/foundations/24a.ogg" data-background-video="../video/The_Door_Study-FWSxSQsspiQ.mp4" data-background-video-muted  -->
Notes:
In a famous study by Daniel Simons and Daniel Levin, a man stops a passerby and asks for directions. While the subject is speaking, two workmen carrying a door pass between them, momentarily blocking the view. When they pass, the interlocutor has been replaced by another person, but about half of subjects do not notice the discrepancy.

This doesn't show that half of us are clueless, rather that the primacy of a coherent world can dominate our perception of it, leading us to be fooled by targeted attacks exploiting that tendency.

### Credits <!-- .element: class="attribution" -->
* [_The Door Study_ - Daniel Simons and Daniel Levin](https://www.youtube.com/watch?v=FWSxSQsspiQ)


<!-- .slide: data-audio-src="../audio/foundations/24b.ogg" data-background-video="../video/selective attention test-vJG698U2Mvo.mp4" data-background-video-loop data-audio-advance="1200" -->
How many passes do you count?
Notes:
Another way to conceive of the "information attack" of the door switcheroo, is that our thinking isn't just inside our brain and body, it extends into to the world around us. This is more obvious in acts of memory amplification, for example, if you write down a note to yourself, but we are constantly letting the world compute or hold information for us until we need it. It could be in the case of the switcheroo the brain let the world "hold" the information of the identity of the lost person to focus on how to help them, at least until the identity of person was somehow needed to direct them. Our attention mechanisms in general can be characterized as a shift in what information is being actively, or at least consciously, processed. 

### Credits <!-- .element: class="attribution" -->
* [_Selective attention test_ - Daniel Simons and Daniel Levin](https://www.youtube.com/watch?v=vJG698U2Mvo)


<!-- .slide: data-audio-src="../audio/foundations/26.ogg" data-background-image="../images/brian_cantwell-smith_big.jpg" data-background-size="contain" data-audio-advance="1000" -->
### Brian Cantwell Smith

#### Judgment
* Ethical, responsible, appropriate action <!-- .element: class="pushright" -->
* Basis of accountability <!-- .element: class="pushright" -->
* Not restricted to humans <!-- .element: class="pushright" -->
* Mark of the humane <!-- .element: class="pushright" -->

Notes:
University of Toronto professor Brain Cantwell-Smith thinks that general intelligence requires judgment:

According to him judgment is "dispassionate, deliberative thought, grounded in ethical commitment and responsible action, appropriate to the situation in which it is deployed. 

The reason we hold human adults accountable for their actions, even if they do not invoke full scale deliberative judgment in their every move, is that we believe that they should act in such a way that they could do so if necessary.

Judgment is not restricted to humans. Perhaps it is a mark of the humane. Computers do not need to try to be computers. Humans are different: we must strive to be human."


<!-- .slide: data-audio-src="../audio/foundations/27a.ogg" data-background-image="../images/freewill_is_a_figment_of_our_imagination_latent-diffusion.webp" -->
### Decisions?

Notes:
Where I feel I disagree with Brian is that judgment, while beautiful, seems to imply some sort of decision making or freewill. I like the idea that we do not exercise judgment for most thinking, but can call upon it when the consequences of lack of judgment are high. I like that the capacity for judgment makes you accountable, but I don't know if it makes you responsible in the way that we talk about people _deciding_ to hurt others and being responsible for that decision.


<!-- .slide: data-audio-src="../audio/foundations/27b.ogg" data-background-video="../video/Monty Python Philosophy Football-LfduUFF_i1A.mp4" data-audio-advance="1200" -->
Freewill

Notes:
While the debate on freewill has been a long and nuanced one, and of which I'm no expert, I am excited by how machine learning is opening new doors for my understanding of it. The more I learn, the more certain I become that freewill, as popularly thought of, doesn't exist. This is despite my own and everyone I know's overwhelming subjective experience of feeling like they have freewill.

### Credits <!-- .element: class="attribution" -->
* [Monty Python's _Philosohpy Football_](https://www.youtube.com/watch?v=LfduUFF_i1A)


<!-- .slide: data-audio-src="../audio/foundations/27c.ogg" data-background-image="../images/reinforcement_world_model.gif" data-background-size="contain" -->
Notes:
A recent study sheds some light on this - in machine reinforcement learning the system learns better when it has a model of the world and can plan its actions, imagining how the world might change as it interacts with it. Importantly this learning procedure relies on counterfactual learning, or the ability imagine alternate reality with different facts, the learner must be able to simulate or imagine having made choices they did not in fact make.

### Credits
* https://bair.berkeley.edu/blog/2020/10/05/plan2explore/


<!-- .slide: data-audio-src="../audio/foundations/27d.ogg" data-background-video="../video/Amelie.mp4" data-audio-advance="2000" -->
Notes:
Humans do this too, we imagine how things might have gone if we'd only not said that stupid or thoughtless thing, or had thought of that brilliant reply at the time. This requires us to believe that we _could_ have acted differently than we _actually_ did. This belief is the experience of freewill and is needed for learning. If we thought we could never make any decision or action than the ones we actually took then it might be much more difficult to learn from our mistakes.

### Credits <!-- .element: class="attribution" -->
* _Amelie_ excerpt (2001)


<!-- .slide: data-audio-src="../audio/foundations/27e.ogg" data-background-image="../images/freewill_is_a_figment_of_our_imagination_latent-diffusion.webp" data-audio-advance="1500" -->
We tend to think of ourselves as being capable of breaking the causal structure of our environment and making free choices, and this imagined freedom — despite being, in all probability, just a figment of imagination — is necessary for efficient learning and thus a vital part of our intelligence. <!-- .element: class="quote" -->
_Erik M. Rehn_ <!-- .element: class="attribution" -->

Notes:
Erik M. Rehn's 2021 paper describes it thus:
"We tend to think of ourselves as being capable of breaking the causal structure of our environment and making free choices, and this imagined freedom — despite being, in all probability, just a figment of imagination — is necessary for efficient learning and thus a vital part of our intelligence."

So for me, every intelligence with the capacity for judgment should be held accountable, but not responsible. They couldn't have acted any other way, but need to learn better judgment.

### Credits
* https://arxiv.org/pdf/2111.08435.pdf

---
<!-- .slide: data-background-video="../video/frankenstein - ballet.mp4" data-audio-advance="1000" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Frankenstein_](https://www.youtube.com/watch?v=MowmXsMDkY) (1910)
* [_Computer Ballet_ ](https://www.youtube.com/watch?v=dXQIUEwEGQ) (1965)
---
<!-- .slide: data-audio-src="../audio/foundations/28aa.ogg" data-background-image="../images/digital_intelligence_rudalle_1_latent-diffusion.webp" data-background-opacity="0.5" data-audio-advance="800" -->
# Digital intelligence <!-- .element: class="r-fit-text" -->

Notes:
OK, I think we're ready to talk about digital intelligence.


<!-- .slide: data-audio-src="../audio/foundations/28a.ogg" data-background-image="../images/trust_the_machine_big.webp" data-audio-advance="1000" -->
Testing, inspection and interpretability <!-- .element: class="backdrop" -->
Notes:
There is a great deal of discussion and worry around testing, inspection and interpretability of machine learning systems. Can we trust the machine? How? 

How would we know when an AI system reaches general intelligence? How do we test for consciousness? On a more mundane level how do we test or know how _any_ of the output is derived from the input? I would pose the same question about humans and other animals. 


<!-- .slide: data-audio-src="../audio/foundations/28b.ogg" data-background-video="../video/Memories of Passersby I by Mario Klingemann-298000366.mp4" data-audio-advance="800" -->
The Imitation Game <!-- .element: class="backdrop" -->

Notes:
In 1950 Alan Turing devised a famous test called the Imitation Game, now called the Turing Test, a three-person game in which an interrogator asks questions of a man and a woman in another room in order to determine the correct sex of the two players, who, in turn, are trying to fool the interrogator. If an AI is substituted for the man, could it succeed in pretending to be a woman better than the man could?

### Credits <!-- .element: class="attribution" -->
* [_Memories of Passersby I_ - Mario Klingemann](https://vimeo.com/298000366) (2018)


<!-- .slide: data-audio-src="../audio/foundations/28c.ogg" data-background-image="../images/a_woman_whispering_into_one_ear_of_robot_with_blackness_on_the_other_side_cfg_diffusion_1_latent-diffusion.webp" data-audio-advance="800" -->
Where is the judgment? <!-- .element: class="backdrop" -->

Notes:
The Turing test may be more geared towards good simulations of human communication rather than general intelligence, and an AI that could pass the test would have to mimic human failings realistically as well. Importantly, it doesn't test for Cantwell-Smith's concept of judgment. 


<!-- .slide: data-audio-src="../audio/foundations/28d.ogg" data-background-image="../images/a_woman_whispering_into_one_ear_of_robot_with_blackness_on_the_other_side_v_diffusion_0_RealESRGAN-pbaylies-hr-paintings.webp" data-audio-advance="1500" -->
A polite convention that everyone thinks <!-- .element: class="backdrop" -->

Notes:
The Turing Test isn't used in institutional AI research, as the goal of a human-passing general intelligence is only a tiny subset of the possible general intelligences, but it does highlight that it is difficult to decide if, and especially how, anyone possesses general intelligence. Turing wrote, "it is usual to have a polite convention that everyone thinks."


<!-- .slide: data-audio-src="../audio/foundations/28e.ogg" data-background-image="../images/1024px-Saltatory_Conduction.gif" data-background-size="contain" data-background-color="black" data-audio-advance="1200" -->
Brain to neural net and back again

Notes:
One of the most exciting aspects of AI research is a lack of politeness with the machine. Machine minds are inspected, tested, and manipulated in every way to understand how they function. A machine intelligence may be alien, but it is the most researchable alien intelligence we've encountered. The degree to which there is back and forth transfer of knowledge between human brain research and machine learning should not be underestimated. Improvements to human brain scanning inspires experiments and theories in ML, and successes in ML that start out poorly understood but performing well inspire research until they are understood and then linked back to similar phenomenon seen in our brains. 

Science has often proceeded from evidence that a thing is possible, to a theory of how it may be possible, to an effective model of that phenomenon.

### Credits
* https://commons.wikimedia.org/wiki/File:Saltatory_Conduction.gif
  * Dr. Jana, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons


<!-- .slide: data-audio-src="../audio/foundations/28f.ogg" data-background-image="../images/a_woman_whispering_into_one_ear_of_robot_with_blackness_on_the_other_side_v_diffusion_1_RealESRGAN-pbaylies-hr-paintings.webp" data-audio-advance="1000" -->
Copying frozen digital minds <!-- .element: class="backdrop" -->

Notes:
The digitalness of machine minds provides much of their promise and strangeness. Only digital minds can be frozen in time - only changing when we want them to, but otherwise responding the same way to repeated testing. Only digital minds are so easy to copy and share between researchers and artists. The perfect copies dramatically improving their use as scientific tools. Researchers regularly share the intelligences they have built with the world, including all the software details and data sets with which they were constructed.


<!-- .slide: data-audio-src="../audio/foundations/28g.ogg" data-background-image="../images/a_woman_whispering_into_one_ear_of_robot_with_blackness_on_the_other_side_v_diffusion_3_RealESRGAN-pbaylies-hr-paintings.webp" -->
Secret keeper <!-- .element: class="backdrop" -->
Notes:
Given open source AI that is completely inspectable and run on your own hardware, we can explore very strange and potentially powerful opportunities. These sorts of AI can be trusted more than humans, providing absolute privacy, up to and including forgetting all of your interactions with them.


<!-- .slide: data-audio-src="../audio/foundations/28h.ogg" data-background-video="../video/being_frankenstein.mp4" data-audio-advance="2000"-->
Being Frankenstein

Notes:
It is precisely the amount of control we have over our digital minds that likely makes it impossible to ever ethically create conscious digital general intelligences. Restricting the basic freedoms of a human, who we politely assume to be a conscious thinker, would be unethical. We must also extend that politeness to the conscious digital minds and not dissect, copy or freeze them, as that seems to violate their freedom to have basic privacy at the very least. And yet this is an alien mind, how could you with good judgment allow it freedom of action that could harm others, or make infinite copies of itself, or study or change its own mind? Over 200 years ago Mary Shelly showed us that Frankenstein was a monster _because of what he created_, it still holds true today.

### Credits <!-- .element: class="attribution" -->
* [_Through the haze of a machine's mind we may glimpse our collective imaginations (Blade Runner)_ - Ben Bogart](https://vimeo.com/213741599) (2017)
* [_Frankenstein_](https://www.youtube.com/watch?v=MowmXsMDkY) (1910)

---
<!-- .slide: data-audio-src="../audio/foundations/29.ogg" data-background-image="../images/Five_Directions_dark.webp" data-background-opacity="0.9" data-audio-advance="800" -->
# Thank you

<div class="backdrop">

1. **Foundations**
2. [**Past, Present, Future**](../past_present_future/) <!-- .element: class="lighten" -->
3. [Neural Nets](../neural_nets/) <!-- .element: class="lighten" -->
4. Data in Practice <!-- .element: class="low-vis" -->
5. Machine Learning Art <!-- .element: class="low-vis" -->

</div>
   
Notes:
Well, we've made it to the end of the first tutorial. Thank you for your attention. I hope you'll check out the next in the series; Past, Present, Future, where we'll look more deeply at the history of the development of these technologies, the current state-of-the-art and my guesses about the future.

See you there!

