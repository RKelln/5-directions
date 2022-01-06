# Foundations

Notes: 
Foundations is the first of five tutorials in the series.

In approximately an hour we will cover some important material that is necessary to understand what machine learning and artificial intelligence are, how they came to be, and why they are important. 

---
# Foundations

* Digital
* Boolean logic
* Algorithms
* Software
* Intelligence
* Digital Intelligence

Notes:
Starting with a good understanding of the invention of digital computers and the mathematics they are based on leads us to a better conception of what software systems, like machine learning and artificial intelligence are capable of and what makes them so strange and powerful.

We'll talk about some eternal questions like the nature of intelligence and freewill; to get on the same page and explore some of the latest research and see how studying artificial intelligence helps us to understand all intelligence, including our own.

We'll wrap up with how making intelligences digital gives them the strange properties of all digital things and the great potential and dangers of digital minds.

Let's begin!

---
<!-- .slide: data-background-image="images/digital-signal-noise.svg" -->
# Digital

Notes:
We are told we live a digital world. And we gotten used to living there, and in many ways, we've really forgotten how strange it really is.

Whatever our digital world is, it cannot escape reality. And reality, at least at the level of electricity, is analog.

So at its lowest level a digital signal is still analog. Being analog it is subject to noise - it has minute fluctuations - so it is a messy or noisy signal.

The blue line in the image represents this signal. You can see it alternating between a 1 and a 0, the two possible digital values, but it is still is affected by noise - those  squiggly bits. But a digital signal is designed to overcome this noise, not to let it affect the signal. 

---
<!-- .slide: data-background-video="video/zoom_microchip.mp4" data-background-video-muted data-background-opacity="0.4" -->
### 0 and 1

The most reliably detectable of differences that allow analog signalling machines to shrink to the tiniest of scales while best avoiding problems of **noise**.
              
Notes:
Digital technology is designed to create a perfect fantasy world where noise doesn't exist. If you want to prevent noise from messing up your signal, it's easiest to distinguish between only two imperfect noisy values. The more fluctuating values you try to distinguish from each other the more likely you are to confuse one for another. If you can do this perfectly, every time, then you can have perfect lossless information storage and transfer.

This lossless information then can be copied infinitely and stored without changing or degrading in any way.

### Credits
[Zoom Into a Microchip](https://www.youtube.com/watch?v=Fxv3JoS1uY8) by NISENet [CC-NC-SA]
    
---
<!-- .slide: data-background-video="video/Life_in_life-xP5-iIeKXE8.mp4" data-background-video-loop data-background-video-muted data-background-opacity="0.2" -->
              
Digital technologies are useful and strange:

* **Everything is copied.** Movement is done by copying and then deleting. 
* **Copies are perfect** and indistinguishable from the original.
* **Software is deterministic** and thus repeatable by default, true randomness is difficult. 

Notes:
Digital technologies are both useful and strange.

First, everything digital is copied. In physical reality objects move, but moving in the digital reality is done by making a copy and then deleting the first copy. Usually, we don't even bother deleting because that means the extra work of copying zeros over the data, instead we just mark that space as free for new copies.
Second, copies are perfect and indistinguishable from each other. In physical reality copies are made of different atoms, but digital copies are the exact same thing in two different places. Imagine digital stuff more like numbers than physical objects; when you write down the number 5 it has the exact same value every other 5 written down by everyone else.
Finally, software built with digital technologies is deterministic - it is repeatable by default. Each time you run it will do the same thing. True randomness actually becomes difficult.
### Credits:
[Life in life](https://www.youtube.com/watch?v=xP5-iIeKXE8) by Phillip Bradbury [CC]

---

Interlude A

---

# Boolean logic

AND : true AND true = true, true AND false = false
OR: true OR false = true, false OR false = false
NOT: NOT false AND true = true

Notes:
In the middle of the 19th century George Boole published his work that introduced an "algebra of logic" which was later called Boolean algebra. 

The only values in Boolean algebra are true and false, which perfectly map to 1 and 0. Instead of addition and multiplication the main operations are AND, OR and NOT.

AND and OR combine values in logical ways. ANDing two values is only true if both are true, ORing two values is true is either of te values is true. NOT allows for the inversion of a value.

There are few other more complex operators that are important, but the important concept is that Boolean logic was foundational for digital computer circuits.

---

# Algorithms

Notes:
The other important concept to understand is that of an "algorithm". That's a fun word, with an origin from the Latinization of the Persian scholar al-Khwarizmi. His tract *On the Calculation with Hindu Numerals*, written in Baghdad in the ninth century, is responsible for introducing Hindu numerals to the West, along with the corresponding new techniques for calculating them, namely algorithms.[^1]

### Credits
[^1]: [Three Thousand Years of Algorithmic Rituals: The Emergence of AI from the Computation of Space](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/)



_“Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food.”_

~ Jean-Luc Chabert 

Notes:
[Matteo Pasquinelli's](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/) wonderful article describes it this way:
“Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food.”

Algorithms pare ancient technology, that emerged from ritual practices and the organisation of the social life. They are emergent processes that materialise out of a previous and spontaneous division of space, time and labour. Cultures speak of recipes, rules, techniques, processes, procedures, methods, strategies. 

Fundamentally we are talking about systematic process of discrete steps that emerges from a repetition of the process. Software programmers, like myself, have a bias against doing anything more than once.

### Credits
[Three Thousand Years of Algorithmic Rituals: The Emergence of AI from the Computation of Space](http://matteopasquinelli.com/3000-years-of-algorithmic-rituals/)



* Read / Sense 
* Write / Act
* Compare / Feel

Notes:
In 1937, Alan Turning introduced the idea of Universal Computing Machine. His thought experiment involved a simple machine that could read, write, and compare symbols on a length of paper or tape with no understanding of the symbols being read and written other than changing the "state" of the machine. You could also think of these three actions in less mechanical terms: Sensing, acting, and feeling.

What he was trying to do was create the simplest possible machine, that was still capable of computation. In fact, given an infinitely long tape Turing proved that this machine could compute anything. Everything that could be rendered computable _was_ computable using only these operations and a machine with an internal state. This can be referred to as a state machine.

A simple, universal algorithm for computation.

---
# Abstraction

Notes:
How could something so simple calculate something as complex as a modern video game or simulations of The Big Bang? The reason this is possible is that simple algorithms can be combined and build on each other. Digital algorithms inherit digital properties: perfect replication and execution thus you can start to build infinitely long chains of algorithms. Like with the Turning machine, the infinitely long nature of the tape becomes critical, as does the speed at which you manipulate it. 2022's pocket sized computers perform tens of billion operations per second and store hundreds of billions of bits and have access to essentially infinite bits through the internet.

As the length and complexity of each algorithm grows human understanding of it fades, until we add a layer of abstraction to hide all the underlying complexity. No human has, nor ever will have, a complete understanding of the full details of the hardware and software running on a typical phone. Similarly, for the human brain, and even a single cell.

Using a Universal Turning Machine to calculate anything but the simplest of solutions is a pain, similarly programming in binary. For example, you might use digital circuits, 1 and 0, that use boolean algebra to build a "binary adder", that adds two binary numbers. With only a few adders you might interact with them directly, but once you have millions, they are hidden by further layers so that programmers don't have to worry about managing them, just adding two numbers together.

---
# Software

Notes:
Abstraction built of layers of boolean algebra and algorithms running on digital circuits is the domain of software. Software is the design and recording of these algorithms and programmers essentially record their own decision-making into software.

While all media and art can be thought of as recordings of the creators decision-making, say, a musicians decisions about how to play their instrument at each moment, there is a difference - software can very easily take input when it is experienced. It "executes" on this input, whereas other media lacks input or is quite difficult to incorporate input into the experience.



## Degrees of interactivity or adaptation

1. Recording: no input
2. Mapping: takes input, produces output, but stateless
3. Stateful: has variables / internal state (Turing machine)
4. Adaptive: adapts to environment through time

Notes:
Software can be classified in various levels. Sofian Audry describes things this way:
1. Recordings have no input
2. Mappings take input and produces output, but are stateless. For example, a translation dictionary mapping words from one language to another. 
3. Stateful software has at least one variable, usually many more, unless it's Turing machine.
4. Adaptive software adapts, which can also be considered learning, which is usually seen in machine learning or AI.



## Input and play

Notes:
As an aside, one of the things I love about software-based art is the interactivity. When people spend time with art, it is often just a few minutes with a piece in a gallery, an hour or two with film, tens of hours for novels, etc. Software with enough depth can provide ten or hundreds of hours of interactivity. Games are the best example of that.

Interactivity also means the art can respond to the user, which allows for play and I'm a big fan of play. Play fundamentally connected to freedom, similar to art making. Both require freedom to experiment and relatively safely try out new ways of acting and being. Play allows for learning, and like practice, that learning is enhanced when the skills, actions or thinking being developed are not too easy nor too hard. Mediums that can adapt to the audience to find that sweet spot, familiar enough but different, what [Raymond Loewy](https://en.wikipedia.org/wiki/Raymond_Loewy) described as MAYA: Most Advanced, Yet Acceptable, and [Lev Vygotsky](https://en.wikipedia.org/wiki/Lev_Vygotsky) called the lower limit of the "zone of proximal development" have a powerful ability to change minds.

If you're an artist who wants to help their audiences make profound positive changes to their lives, interactive software can be one of the most effective mediums.

---

# Digital ethics

1. Who decides what gets made?
2. Who gets to make it?
3. Who gets access to what has been made?

Notes:
Let's take a step back, now that we understand the incredible power of digital technologies, abstraction and interactive software built with them, we need to ask a few questions. The ones I continually return to are:
1. Who decides what gets made?
2. Who gets to make it?
3. Who gets access to what has been made?
Those questions have had and will continue to have a profound effect on my life. I'd like the answers to be "everyone and anyone", but what is more important are the specific details. I believe that digital things need different answers than physical things, or more correctly,  digitalness makes it much easier to make those answers more inclusive; to make every aspect more accessible.



# Digital Libraries

Notes:
For example, I believe in and strongly support the concept of libraries. Most people do. We have had the technology, since at least the origin of The Pirate Bay in 2003, to distribute all the world's digital information at a cost much less than we spend on the world's libraries. But we do not do this. We could make every person with access to the internet into a digital billionaire, with access to everything forever - the largest anti-poverty developement in history, likely for the entirety of history, but we chose not to. We'd rather have [2755 billioniares](https://en.wikipedia.org/wiki/The_World%27s_Billionaires). 



_"The great moral question of the twenty-first century is this; if all knowledge, all culture, all art, all useful information can be costlessly given to everyone at the same price that it is given to anyone; if everyone can have everything, anywhere, all the time, why is it ever moral to exclude anyone?"_

~ Eben Moglen

Notes:
The great moral question of the twenty-first century is this; if all knowledge, all culture, all art, all useful information can be costlessly given to everyone at the same price that it is given to anyone; if everyone can have everything, anywhere, all the time, why is it ever moral to exclude anyone?

I found some good answers to the questions in the free and open source communities. I found other good answers in decolonization and anti-capitalist movements. Almost always the answers were confounded by concerns of ownership. History has demonstrated that a critical questioning of ownership is a requirement for a just and ethical society. Who and what can or should be owned are fundamental questions about how we organize our economy and culture.

When you use digital technologies you become intrinsically linked to the great moral question: when the value others gain dwarfs the cost of your sacrifice, at what point does it become criminal not to make that sacrifice? 

I would extend this line of questioning further; at what point do you refuse to improve others lives because of the cost to you, despite the potential savings or gains they could generate for you in the future?

In contrast to a society that accepts billionaires avoiding taxes, I see digital technologies as the best opportunity for a once-in-the-history-a-species redefinition of wealth, sharing and sacrifice. To get as close as possible to answering "everyone and anyone" when we ask who?

---

Interlude B

---

# Machine learning

Notes:
Alongside the development of digital computers was the development of evolving and self-organizing machines. Machines or software that didn't just have preprogrammed states they could be in, but adapted or learned what states were needed to more effectively interact with their environment.

Evolution conjures life. And thus born were the fields of artificial life and artificial intelligence.



<!-- .slide: data-background-image="images/AI_venn.png" -->
# Terminology

Notes:
Don't worry too much about the terminology. The important thing to understand is that machine learning involves adding training in addition to software programming. The collection of data and the curation of that data dramatically effects the capabilities of the machine. This allows the machine to learn from the data instead of having humans specify all the actions of the machine.

When training data controls the output then you constantly run into data problems, one of which is often called "bias", which is a common criticism of AI systems. However, bias is more of a data collection and curation issue, and all data driven systems, including humans, suffer from bias inherent in their input data.

For example, if you take data on policing, which may be targeted based on racial or class distinctions, you only reinforce the existing bias when the AI recommends policing targets.

The most popular current machine learning techniques are neural networks and deep learning. This mimics the connectivity of biological brains. Taking raw input and passing it through many layers of connections. The information flows through the network being transformed into the final output.

That this works so well is quite remarkable, but currently training requires a vast amount of data, something that only became feasible with the Internet and the rise of Big Data.

### Credits
* https://towardsdatascience.com/4-intersecting-domains-that-you-can-easily-confuse-with-artificial-intelligence-2233cb6ad7d1
* https://quantdare.com/what-is-the-difference-between-deep-learning-and-machine-learning/



### ML vs traditional software

Notes:
As we will see, the process of creating machines that learn is dramatically different from programming machines with traditional software methods.



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
Many analogies have been made, but a consensus suggests that machine learning processes more exploratory and some aspects require less technical proficiency. While many parts of the full machine learning development lifecycle still require tradition software programming, the data set curation and training phases are more similar to teaching and gardening - difficult to master but considerably easier for novices to achieve success in hours and days rather than weeks or months of training.



### Tools for prediction and pattern detection

1. Mapping: takes input, produces output, but stateless
2. Stateful: has variables / internal state
3. Adaptive: adapts to environment through time

Notes:
Recall the various levels of interactivity and adaptation discussed previously. Machine learning exists at all levels that take input. 

At the first level you have systems that do pattern recognition and translation. Classifying images, whether it is cats or human surveillance systems. Input data moves through the software and is transformed into an output.

Generally when you add the element of time, then you require the next level of system, something that has a memory. 

The final level, often associated with reinforcement learning, which we will learn about later, can also be thought of as more wholistically as the entire process of humans creating a machine learning system - adapting it to be more useful to the problems they are trying to solve. 

---

Interlude C

---

# Intelligence

Notes:
Before we continue we need to stop and think about what we mean when we say "intelligence". There are many nuances and confusion about intelligence as a general principle, and one of things that excites me most about the study of artificial intelligence is how it helps us to understand all intelligences.

For the first time we are developing a real understanding of own brains work through better imaging technologies. At the same time we can test our theories using digital minds that mimic the principles of the connections and signals that we observe. 

There is an underlying nature of intelligence(s) that are possible in this physical reality. Our brains exploit this in a particular way, but there are many ways, each subtly or grossly attuned to particular tasks.



### Narrow vs General

Notes:
Computer science describes intelligence as narrow versus general or strong. Narrow intelligences have narrow task skills, but general intelligences have broader capabilities. Chess playing is narrow, human intelligence is general. What does it take to go from narrow to general?
 


Is general intelligence conscious?

Notes:
There is broad consensus that we haven't found any narrow intelligence that is conscious, but at what point does a nonconscious cognitive process transition to conscious general intelligence, and are those two always linked? First let's start with the easier example, nonconscious cognition.

Katherine Hayles, describes nonconscious cognition this way:
_"My position is that all lifeforms, even those lacking brains, such as plants and nematode worms, have cognitive capacities. Once cognition is understood as a much broader capacity than consciousness, the relation between humans, nonhumans and computational media may be radically reconceptualized. Much of the world’s work in contemporary developed countries is done through collectivities through which information, interpretations, and meanings circulate: that is, through cognitive assemblages."_

Intelligence, or what Hayles calls cognition, is not restricted to a single organ, not even a single organism, but is distributed throughout the body, relationships, tools, institutions, markets, and culture. It emerges from evolutionary dynamics, adaptation, complexity, and what is sometimes called "self-organized criticality" or as studied in artificial life, “from simple rules to complex patterns or behaviours.”



### So what is consciousness?

Notes:
Most researchers agree the ingredients for consciousness are memory and some model of the self and others. Antonio Damasio as puts it; "there is no self without awareness of and engagement with others." This modelling helps to create and maintaining a coherent picture of the world. This coherency shouldn't be underestimated. 



### And all we got was a model

Notes:
First though it is important to remember that the model of the world we have is the only view of the world we have. What we think of as our perception of the world is extremely limited, an investigation of our visual system, reveals this.



<!-- .slide: data-background-image="images/Retinal_Image.png" -->
### How we see

Notes:
Our eyes mainly have good detail in a very small area, but more shockingly they are mostly in motion, called saccades, and while moving our visual sensitity is strongly impaired. This is not anyone's perception of how they view the world. Our eye samples the world, and has rich image processing circuitry of its own, but the world we perceive in the brain feels coherent and constant.



<!-- .slide: data-background-video="video/The_Door_Study-FWSxSQsspiQ.mp4" data-background-video-muted  -->
Notes:
In a famous study by Daniel Simons and Daniel Levin, a man stops a passerby and asks for directions. While the subject is speaking, two workmen carrying a door pass between them, momentarily blocking the view. When they pass, the interlocutor has been replaced by another person, but about half of subjects do not notice the discrepancy.

This doesn't show that half of us are idiots, rather that the primacy of coherent world can dominate our perception of it, leading us to be fooled by targeted attacks exploiting that tendency. We will later explore how machine intelligences are susceptible to their own adversarial information attacks. 

### Credits
https://upload.wikimedia.org/wikipedia/commons/c/cb/Retinal_Image.png
https://www.nature.com/articles/s41467-020-15890-w
https://www.youtube.com/watch?list=PLC0A3CAC7B3A0E288&v=FWSxSQsspiQ



<!-- .slide: data-background-image="images/Cipolla-matrix.png" -->
## Stupidity

Notes:
It may be useful however to explore what it means to be an idiot, at least as a counterpoint of what it means to be intelligent. In a definition that I quite enjoy, Cario M. Cipolla, describes a stupid person as a person who causes losses to another person or to a group of persons, while themselves deriving no gain and even possibly incurring lossess. He continues that stupidity can be found independent of any other characteristic including education and intelligence and there is no refuge, the amount of stupid you'll encounter is roughly consistent.

So really we're classifying actions, not intelligence, and that all intelligences act stupidly some of the time. Recent a study concluded that rocket scientists along with their archrivals the brain surgeons, tested to have similar average intelligence to the rest of us.

Cipolla's grid provides an economic classification lens, where intelligent behaviour is seen as gain for yourself and others.

### Credits
http://harmful.cat-v.org/people/basic-laws-of-human-stupidity/
https://commons.wikimedia.org/wiki/File:Cipolla-matrix.png



### Brian Cantwell Smith

#### Judgment
* ethical, responsible, appropriate action
* basis of accountability
* not restricted to humans
* mark of the humane

Notes:
University of Toronto professor Brain Cantwell Smith thinks that general intelligence requires judgment:

Judgment is "dispassionate, deliberative thought, grounded in ethical commitment and responsible action, appropriate to the situation in which it is deployed.

The reason we hold human adults accountable for their actions, even if they do not invoke full scale deliberative judgment in their every move, is that we believe that they should act in such a way that they could do so if necessary."

Judgment is not restricted to humans. Perhaps it is a mark of the humane. Computers do not need to try to be computers. Humans are different: we must strive to be human.



### Decisions?

Notes:
Where I feel I disagree with Brian is that judgment, while beautiful, seems to imply some sort of decision making or freewill. I like the idea that we do not excercise judgment for most thinking, but can call upon it when the consequences of lack of judgment are high. I like that the capacity for judgment makes you accountable, but I don't know if it makes you responsible in the way that we talk about people _deciding_ to hurt others and being responsible for that decision.

While the debate on freewill has been a long and nuanced one, and of which I'm no expert, I am excited by how machine learning is opening new doors for my understanding of it. The more I learn the more certain that freewill, as popularly thought of, doesn't exist. This is despite my own and everyone I know's overwhelming subjective experience of feeling like they have freewill.

A recent study sheds some light on this - in machine reinforcement learning the system learns better when it has a model of the world and can plan its actions, imagining how the world might change as it interacts with it. Importantly this learning procedure relies on counterfactual learning, or the ability imagine alternate reality with different facts, the learner must be able to simulate or imagine having made choices they did not in fact make.

Humans do this too, we imagine how things might have gone if we'd only not said that stupid or thoughtless thing, or had thought of that brilliant reply at the time. This requires us to believe that we could have acted differently than we did. This belief is the experience of freewill and is needed for learning. If we thought we could never make any decision or action than the ones we actually did then it might be much more difficult to learn from our mistakes.

From Erik M. Rehn's 2021 paper:
"We tend to think of ourselves as being capable of breaking the causal structure of our environment and making free choices, and this imagined freedom — despite being, in all probability, just a figment of imagination — is necessary for efficient learning and thus a vital part of our intelligence."

So for me, everything with the capacity for judgment should be held accountable, but not responsible. They couldn't have acted any other way, but need to learn better judgment.

### Credits
* https://arxiv.org/pdf/2111.08435.pdf

---

Interlude D

---

# Digital intelligence

* Testing, inspection and interpretability <!-- class="fragment fade-up" -->
* Freezing minds <!-- class="fragment fade-up" -->
* Copying minds <!-- class="fragment fade-up" -->
* Being Frankenstein <!-- class="fragment fade-up" -->

Notes:
There is a great deal of discussion around testing, inspection and interpretability of machine learning systems. If an AI system becomes a general intelligence how do we know that? How do we test for consciousness? On a more mundane level how do we test or know how any of the output is derived from the input?

I would pose the same question about humans and other animals. Alan Turing devised a famous test called the Imitation Game, now called the Turing Test, a three-person game in which an interrogator asks questions of a man and a woman in another room in order to determine the correct sex of the two players. If an AI is substituted for the man, could it succeed as well as the man?

While the test may be more geared towards good simulations of human communication rather than general intelligence, a successful AI would have to mimic human stupidity realistically as well. Importantly, it fails to test for Cipolla's mutual benefit or Cantwell Smith's judgment. 

While the Turing Test isn't used at all in AI research, as the goal of human-passing general intelligence is only a tiny subset of the possible general intelligences, it does highlight that it is difficult to decide if, and especially how, anyone possesses general intelligence. Turing wrote, "it is usual to have a polite convention that everyone thinks".

One of the most exciting aspects of Ai research is a lack of politeness with the machine. The machine minds are inspected, tested, and manipulated in every way to understand how they function. A machine mind may be alien, but it is the most researchable alien intelligence we've encountered. The degree to which there is a back and forth transfer of knowledge between human brain research and machine learning should not be underestimated. Improvements to human brain scanning inspires experiments and theories in ML, and successes in ML that start out poorly understood but performing well end up well understood and similar phenomenon can be seen in our brains. 

Science has often proceeded from evidence that a thing is possible, to a theory of how it may be possible, to an effective model of that phenomenon.

The digitalness of machine minds again provides much of their promise and strangeness. Only digital minds can be frozen in time - only changing when we want them to, but otherwise responding the same way to repeated testing. Only digital minds are so easy to copy and share between researchers and artists. The perfect copies again dramatically improving their use as scientific tools.

It is precisely the amount of control we have over digital minds that likely makes it impossible to ever ethically create conscious digital general intelligences. Just as restricting the freedoms of a human, who we politely assume to be a conscious thinker, we must also extend that politeness to the digital minds and not dissect, copy or freeze them, and not restrict their freedoms. And yet this is an alien mind, how could you with good judgment allow it freedom of action that could harm others, or make infinite copies of itself, or study or change it's own mind? Over 200 years ago Mary Shelly showed us that Frankenstein was a monster because of what he created, it still holds true today.

