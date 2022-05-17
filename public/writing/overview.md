<!-- .slide: data-background-image="../images/Co-AI-xistence_still.jpg" data-background-size="contain" -->
# Machine Learning and Art <!-- .element: class="r-fit-text fadeout" -->
(A 15 minute introduction) <!-- .element: class="fadeout" -->

Notes:
The other thing you'll be learning is making art using artificial intelligence (AI) or machine learning (ML) tools. Most of these tools have been focused on basic research or commercial applications, but there is a growing number of artists repurposing them for art. 


<!-- .slide: data-background-image="../images/ai-and-compute-all-openai.webp" data-background-size="contain" -->
Notes:
The research and development of these tools has a long history, but is dramatically accelerating, and we are now at a point where major advances happen a few times a year. 


<!-- .slide: data-background-image="../images/cyspe_schoffer.jpg" -->
Notes:
Artists and makers starting getting involved around the late 60s with the cybernetics movement and what came to be called generative art, generally requiring some form of software programming or robot or other hardware construction. 


<!-- .slide: data-background-image="../images/DALLE2-robots.webp" data-background-size="contain" -->

Notes:
50 years later advanced tools are becoming accessible to artists that do not require any programming skill, although I highly encourage learning to code regardless.

We will be focusing the workshop on the most accessible tools so that you can start exploring and making things quickly. There is still a lot to learn, so we'll be taking two routes, one though interactively playing and exploring through making, and another slower, more thoughtful look at the history, principles, criticism, ethics, dangers and opportunities of these tools.

### Credits <!-- .element: class="attribution" -->
* [_1111101000 Robots_ - Ben Barry](https://archive.org/details/1111101000-robots/)

---
<!-- .slide: data-background-video="../video/tools_of_being_720q22.mp4" data-background-video-muted data-background-video-loop data-background-opacity="1.0" -->

Notes:
Unlike NFTs, machine learning is probably one of the most important developments in the history of our species. It is in the same league as the domestication of animals for agriculture, the development of large gas-powered machines (that also transformed agriculture but also urban areas and global commerce), and the arrival of aliens as depicted in science fiction films. Machine intelligence is something of a combination of all three. And we are the people who are going to shepherd this transformation and be most strongly affected by its changes.

It is critical that a more diverse set of thinkers and makers deeply interact and engage with these technologies. It would be best if everyone could, but least a critical engagement by artists and scientists is an achievable goal.

---

<!-- .slide: data-auto-animate data-background-image="../images/AI_venn.png" data-background-size="contain" data-background-opacity="1.0" -->
# What are AI and ML? <!-- .element: class="hidden" -->

Notes:
Artificial intelligence and machine learning are related but not exactly the same, but most people use the terms interchangeably. That's fine, we don't need to be too exact, the general concept is that the machine appears intelligent, or more generally, capable of "cognition". 


<!-- .slide: data-background-image="../images/AI_venn.png" data-background-size="contain" data-background-opacity="0.5" -->

Machine Learning (ML) is a field of research within Artificial Intelligence (AI), that investigates how algorithms can improve their performance on various tasks by learning from experience. These algorithms offer tools, to help identify complex relationships and patterns in data. In doing so, they allow us to build systems that are capable of performing tasks that we do not explicitly know how to solve or formulate. <!-- .element: class="quote" -->
_Memo Akten, "Deep Visual Instruments"_ <!-- .element: class="attribution" -->

Notes:
"Machine Learning (ML) is a field of research within Artificial Intelligence (AI), that investigates how algorithms can improve their performance on various tasks by learning from experience. These algorithms offer tools, to help identify complex relationships and patterns in data. In doing so, they allow us to build systems that are capable of performing tasks that we do not explicitly know how to solve or formulate."


<!-- .slide: data-background-video="../video/See-through brains-c-NMfp13Uug.mp4" data-background-opacity="0.6" -->

The history of AI is a history of trying to avoid unnecessary biological detail in something that so far only exists in biology. <!-- .element: class="quote" -->
_Peter Robin Hiesinger_ <!-- .element: class="attribution" -->

Notes:
Artificial intelligence is informed by and is an approximation of biological intelligence. As some have described it, "the history of AI is a history of trying to avoid unnecessary biological detail in something that so far only exists in biology." We are trying to find the fundamental essence of what it means to be intelligent. What is learning? What does it mean to understand or to know? What is good judgment and sound reasoning?

---

<!-- .slide: data-background-video="../video/digital - analog - 720.mp4" data-background-opacity="1.0" data-background-video-loop -->
## Digital intelligence

Notes:
These are profound, ancient and eternal questions and the creation of digital intelligences helps to answer them. Unlike biological intelligences made from neurons, artificial neural networks are relatively easy to copy, test and experiment with and that process is more ethical because it is done on a machine rather than a living being. Unlike the living, artificial neural networks only change or learn when we _allow them to_ and otherwise give the exact same responses to the same stimuli.

---

<!-- .slide: data-background-video="../video/network-propagation.mp4" data-background-opacity="0.8" data-background-video-loop -->
## Algorithms

Notes:
Artificial neural networks are currently mainly made of many layers of artificial neurons, and each layer is linked together such that data flows through the network. Input data flows into the first layer where it is transformed and sent to the next layer, and so on until the final layer is the output of the network, and can be interpreted in some, hopefully useful, way.


<!-- .slide: data-background-video="../video/15 Sorting Algorithms in 6 Minutes-kPRA0W1kECg.mp4" data-background-opacity="0.4" data-background-video-loop -->

Notes:
All algorithms have this basic set up, they take input, and then apply a set of rules to transform that input into an output, step by step. A neural network uses its structure to define its rules of transformation, rather than explicit rules written by humans.


<!-- .slide: data-background-image="../images/algorithm_latent-diffusion.webp" data-background-opacity="0.7" -->
Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food. <!-- .element: class="quote" -->
_Jean-Luc Chabert_ <!-- .element: class="attribution" -->

Notes:
"Algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are not confined to mathematics. The Babylonians used them for deciding points of law, ...and they have been used in all cultures for predicting the future, for deciding medical treatment, or for preparing food."

So algorithms are not new, but digital algorithms, like all things digital, are far more easily replicated and automated. Software is machine automated algorithms, and the goal of machine learning is to learn as much of those algorithms as possible directly from the data.

---

<!-- .slide: data-background-video="../video/Neural Network 3D Simulation-MLP-3JQ3hYko51Y.mp4" data-background-opacity="0.7" data-background-video-loop -->
# ML vs Software

Notes:
Current machine learning techniques are centered around deep learning - many layers of artificial neural networks connected together, all defined in software. How the input flows through these connections from start to end is updatable. The network is fed training data, say an image of a cat, and the output is compared to an expected answer, whether or not the image actually contains a cat, and the connections between the layers are slightly altered based on the correctness of the answer, slowly training the network to produce the correct output. A neural network is called a model.


<!-- .slide: data-background-video="../video/VGG16 Neural Network Visualization-RNnKtNrsrmg-training.mp4" data-background-opacity="1.0" data-background-video-loop -->
Notes:
In practice, what this looks and feels like, is writing software to define the structure of the neural net, collecting and curating a huge amount of training data, and then doing the training: creating a new randomized network, then feeding it training data and updated it according to its responses. Gradually, over millions of examples of training data it begins to provide more useful output.

---

<!-- .slide: class="panup" data-background-image="../images/DisCo-reimagine-flows.jpg" data-background-opacity="0.33" -->
# What can AI do?

* Pattern finding
* Pattern classification
* Generation
  * Images
  * Text
  * Audio
  * Video

Notes:
Like humans, machine intelligence excels at recognizing, classifying and generating patterns that it has experienced. A machine can be trained to find cats in images, references to cats in text, classify types of cats, or generate images of cats, stories about cats, audio of cat meows or even video of cats, although that is barely, if at all, currently achievable. In a year or two however, that is likely to be a reality.

---

<!-- .slide: data-background-video="../video/VGG16 Neural Network Visualization-RNnKtNrsrmg-overview.mp4" data-background-opacity="1.0" data-background-video-loop -->
# Datasets

Notes:
These capabilities all stem from training datasets. The use of digital tools, sensors and digital data has made it easy to create data that can be used for training. Typically images and video from the internet are used for training, although for art, the creation of your own dataset can be far more interesting. 

To give an example of the scope of typical datasets, [ImageNet](https://www.image-net.org/), one of the most used image datasets consists of 15 million images and a new dataset created his year has 5 billion images. The MassiveText dataset, used to train large language models, is over 10 terabytes and contains the entirety of Wikipedia, Reddit, and Github code, plus news, digitized books and terabytes of text scraped from the web.

---

# Examples

Notes:
I've put together a small number of examples of generative art related to machine learning to give an example of the wide variety of applications.


<!-- .slide: id="Jared-Tarbell" data-background-video="../video/Substrate_720.mp4" data-background-video-muted data-background-video-loop data-audio-advance="-1" -->
<div class="r-stretch artist">

* ### Jared Tarbell
* _Substrate_, 2003

</div>

Notes:
[Jared Tarbell](https://www.infinite.center/) is an American artist and coder that has done extensive work with generative geometric structures and is interested in the life-like emergent qualities of these systems. [Live code version](https://bl.ocks.org/dribnet/c2d4a99516752eefa120b6b3689843f1)

[infinite.center](https://www.infinite.center/)

### Credits <!-- .element: class="attribution" -->
* [_Substrate_ - Jared Tarbell](https://vimeo.com/208903786), 2003


<!-- .slide: data-background-video="../video/beneath_the_neural_waves_04_web-Crespo-short.mp4" data-background-size="contain" data-background-video-loop data-audio-advance="-1" data-background-color="black" -->
<div class="r-stretch artist">

* ### Sofia Crespo
* [sofiacrespo.com](https://sofiacrespo.com/)
* [Artist Talk with Sofia Crespo](https://www.youtube.com/watch?v=_mGs3tR-3HM), 2021

</div>

Notes:
Here is an exmaple of a video 
### Credits <!-- .element: class="attribution" -->
* _[Beneath the Neural Waves](https://beneaththeneuralwaves.com/)_, 2020


<!-- .slide: data-background-video="../video/Memo_learning2see-720.mp4" data-background-size="contain" data-background-video-loop data-audio-advance="-1" -->
<div class="r-stretch artist">

* ### Memo Akten
* [memo.tv](https://www.memo.tv/)
* [4 minute overview of his work](https://vimeo.com/500024622), 2020

</div>

Notes:

### Credits <!-- .element: class="attribution" -->
* _[Learning to see: Gloomy Sunday](https://www.memo.tv/works/learning-to-see/)_, 2017


<!-- .slide: data-background-video="../video/remi_durant_clip_arists-117.mp4" data-background-opacity="1.0" -->
# text2img

Notes:
One of the biggest focuses of current research is around the relationship between text and images. By using images found on the internet and the text associated with them (from titles, captions, accessibility alt text, etc) researchers are able to train neural nets that generate images from text prompts.

In April 2022, OpenAI released the best of these models called DALL-E 2, that can generate high resolution images with stunning quality.

Sadly, OpenAI is actually not very open at all, and it's models and training code are not available for our use, but we will be experimenting with similar but more open source projects.


<!-- .slide: data-background-video="../video/Introduction to Botto 720-oTYxxD4rP68.mp4" data-background-video-loop data-background-video-muted data-background-size="contain" -->

Notes:
Here as an example of NFTs and text2image ML tools being combined by Mario Klingemann. 

Reading the manifesto on the _Botto_ website, makes this sound like a parody or satire of the NFT hype, but as far as I know Klingemann's dream of an autonomous artist is quite genuine, and is reflected in the _Botto_ documentation, so it is hard to know what to make of _Botto_. 

This is very complicated project, typical of crypto art. Each week, using a number of connected state-of-the-art ML systems _Botto_ generates random text prompts which are then curated, it creates images from those using text-to-image models, then has a human community vote on which one to sell that week as an NFT. Voting privileges are tied to owning _Botto's_ own cryptocurrency, which was gifted to the creators and industry insiders at the start of the project but is now available for purchase. Like most crypto schemes it is a form of pyramid scheme where early adopters, particularly the original team, who are also paid monthly in the currency, profit if the currency increases in value. Profits from the NFT sales are used to buy back and burn the _Botto_ currency, in hopes of increasing its value.

I have a lot of issues with this project, which we can discuss during the August workshop, but it is probably the most sophisticated use of NFTs and ML that has been made yet and the idea of an autonomous artist is interesting.

---

# Homework

* Find things you like
  * Datasets
  * Artists / artworks
* Screenshot / links to show & tell (June 14)

Notes:
Before our next online session I'd like you to go investigate what sort of works are being made with ML tools and which of these intrigue you or speak to you.

Similarly, I'd like to know what sort of datasets are interesting to you? 

I'll provide you with a document with some links for you to check out to look through collections of artists and datasets and see what catches your eye. Take a note of a handful of these, take a screenshot or otherwise capture them, and then in the next session we'll briefly go over what each of you have discovered.

I'll also include in the document some links to optional extra materials that go into depth into NFTs and ML art that you can watch at any time if you want to dig deeper into this before the August workshop.


# Artists

* ML art:
  * https://mlart.co/
  * https://aiartists.org/ai-artist-directory
* NFT art:
  * https://cryptoart.io/artists
  * https://superrare.com/top-artists
  * [Feral File online gallery](https://feralfile.com/)


# Optional Homework

* Videos:
  * [Line Goes Up – The Problem With NFTs](https://www.youtube.com/watch?v=YQ_xWvX1n9g) (2h)
* Tutorials:
  * [Five Directions Tutorials: Part 5: ML Art](http://www.ryankelln.com/presentations/5_directions/ml_art/)



