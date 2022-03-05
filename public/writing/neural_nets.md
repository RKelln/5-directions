<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Welcome to
# Neural Nets and Data

Notes: 
In previous tutorials we've covered the basic foundations of mathematics, statistics, computer science and information theory, and briefly touched on neural nets and their history. We're ready to take a deeper look at how neural nets are constructed and why and how they function. This isn't a hands on tutorial to get you building them yourself, but by the end you'll have some insight into how this critical piece of technology "thinks", what sort of data it learns from, and how it and its training data can be created ethically, or as Suzanne Kite puts it, created "in a Good Way".


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
# Neural Nets and Data

<div class="small">

* Perceptrons
* Components of a network: Data, model, training
* Learning algorithms: Unsupervised, Supervised, Reinforcement
* Common networks: RNNs, CNNs, GANs
* Deep learning challenges
* Data ethics and appropriation

</div>

Notes:
We'll start this tutorial with a return to the neuronal model that got things started, the Perceptron, from 1958. Then we'll go in depth into the components of modern deep learning neural nets.

The three basic components include the training data, the network, called a model, and the training procedure. Then we'll talk about the three general types of learning that can be done during training.

We'll go over some commonly used and important types of networks; the recurrent network that has looped connections, convolutional networks that are commonly used for image processing, and generative adversarial networks which often used to generate images.

Then we'll investigate the current challenges with deep learning techniques and what is being done to address them.

Finally, we'll discuss the ethics around data collection and the concept of data appropriation and how that applies to training data.

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Rosenblatt_perceptron.webp"  -->
# Perceptron

Notes:
In 1960, Frank Rosenblatt created the Mark 1 Perceptron by combining the McCulloch-Pitts neural model with Hebbian learning in a custom-built electronic machine that used 400 photocells, variable resistors (which are similar to dimmable light switches) and electric motors controlling knobs on the resistors. At the time digital computers were too slow to simulate the neurons in software. The Perceptron was designed for image recognition and the photocells were randomly connected to the neurons.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/neural_net.png" data-background-size="contain" data-background-color="grey" -->
Notes:
The perceptron was made from an input layer of pixel values, a single layer of artificial neurons, and an output layer. These are the same basic components of all networks including modern ones. Let's look a bit closer at the artificial neuron layer.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/weights_biases_layers.png" data-background-size="contain" data-background-color="grey" -->
Notes:
Each artificial McCulloch-Pitts neuron is connected to every input with a weight, where a positive weight represents an excitatory connection and a negative weight an inhibitory connection. Each neuron has a threshold or activation function which controls when it will fire. Firing means sending output of 1, while not firing sends 0. 

The activation function is a calculation that takes some input and performs some operations on it to create an output. 


<!-- .slide: data-audio-src="../audio/"  -->
_f_(x) = y

Notes:
In mathematical notion this looks like: the function, f, takes variable x and transforms it to y. The transformed x is equal to y. Usually a function is written to show where the input x is substituted into the transformation formula on the right. Like so:


<!-- .slide: data-audio-src="../audio/"  -->
_f_(x) = x - 2

Notes:
Here we see that we take the input and transform it by subtracting 2. You can think of this visually as a graph.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/linear_functions.png" data-background-size="contain" data-background-color="grey" -->
Notes:
Given a value x plotted horizontally, the line of the graph shows a mapping between every possible value of x and its corresponding value y on the vertical axis.

Lines are the output of linear functions, where the relative relationship between the variables stays constant. More complicated functions can be non-linear, they map to curves or are discontinuous - a change in one variable does not correspond to a constant change in another. 

Modern neural nets use non-linear activation functions, which has been shown to be critical for learning. You can think of this as similar to how in digital systems the two-ness allows for the easiest way to distinguish between noisy values, and as interesting properties emerge on the borders of stability and chaos, a non-linear function typically has much more defined boundaries. The large differences in the value of y occur at a small section of x. In other words, there is a "tipping" point or "phase change" at certain values of x.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/activation-functions.webp" data-background-size="contain" data-background-color="grey" -->
Notes:
Typical activation functions look like "sigmoids", roughly "S" shaped, pulled on each end. Another purpose of these functions is to squish the values into a smaller range, typically -1 to 1 or 0 to 1. This gives relatively constant values before and after a relatively quick transition zone around zero. The quickest transition being an instant binary transition, but completely vertical transitions can cause issues for learning.

### Credits
* http://rasbt.github.io/mlxtend/user_guide/general_concepts/activation-functions/
* https://krutikabapat.github.io/Swish-Vs-Mish-Latest-Activation-Functions/


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/weights_biases_values.png" data-background-size="contain" data-background-color="grey" -->
Notes:
Remember the other parts of the perceptron, weights and biases? Let's see how they work with the activation function.

Each input to a single neuron has an associated weight. This multiplies the incoming input value, so a weight less than 1 reduces the value, and weight over 1 increases it. A weight of zero ignores the input and a negative weight makes the input inhibitory, so the input indicates "do not activate". 

All of these weighted input values are then added together and a bias is added, making it easier or harder to activate the neuron in general.

In the original perceptron if the total of all the weighted input signals plus the bias was greater than 0 then it would fire, outputting a 1, otherwise it wouldn't fire, outputting a 0.

These weights, biases and activation functions allow the neurons to simulate boolean logic. A neuron can act as an AND operator if it fires when all of inputs are 1, as an OR operator if it fires when any of its inputs are 1, and negative weights allow for NOT operations. These are the fundamental building blocks of Boolean logic, and the combination of these three allows for a Universal Turing Machine - a general purpose computer.

This was the magic moment: using weights, biases, and non-linear activation functions we found a general purpose computing device. But who or what sets the weights and biases so that it computes something useful?

Changing the weights and biases in a neural network is called training, and that is how it learns to compute something useful. 

So to recap, the connection weights on the inputs to a neuron control how much that neuron "listens" to each input or how much that input contributes to crossing the firing threshold. The bias determines how easily a neuron will fire, shifting the threshold higher or lower.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/pixel_inputs.png" data-background-size="contain" data-background-color="grey" -->
Notes:
The Perceptron was designed for image classification, and in the example we saw in the last tutorial, it was used for a rather silly gender classification. Imagine it was shown a tiny greyscale 20x20 pixel image of you. Each pixel in the image is an input and the output is either woman (represented by a 1) or man (by output 0). Each pixel input value will be 0 (black) to 1 (white) with 0.5 being grey. The weights are initially random, and the biases are all set to the same value, setting the threshold to 1. Thus the first time you show it an image the output will be random too. 

One simple, but very slow way to train the perceptron would be to choose a random set of training images and record the outputs (whether or not it calculates that the image is a woman or man). Then pick a single weight and adjust it up or down, then test the same set of images and if the outputs improve keep the change, if it is worse, then reverse or reset the change. With enough iterations the weights will be strengthened on the input pixels that most distinctly represent images of men and women and reduced on every other input accordingly. It will learn what pixels to pay attention to and whether those pixel values indicate women's images or men's images.

That style of training is too slow, but the basic principles remain the same for faster algorithms. The important thing to keep in mind is that training is about finding the weights that compute the correct output, in this case, that best classify the images. Each time you show the net an image during training, the difference between the current weights (that don't classify the image correctly) and the weights that would correctly classify the image is called the error or loss. Minimizing the error for each neuron is still the essence of modern neural net training.

So, quite bizarrely, in the original Perceptron example the luminance of each pixel suggests gender in some way. There are obvious problems with this, as all the faces would have to be very similar size, similarly positioned in the image and looking the same direction. That it worked at all was quite surprising.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/linear_vs_nonlinear_classifier.svg" data-background-size="contain" data-background-color="#DDD" -->
Notes:
The Perceptron was initially promising, but failed to recognize many classes of patterns. It could only do classification when the groups were easily separable. Imagine it was being trained to tell cats from dogs based on two measurements: size and domestication. (This is a trivial example, but it is easier to see when plotting only 2 variables, and the principles hold for any number of variables, such as the 400 variables in the previous 20x20 example input image, but that is difficult to visualize.)

Mathematically what a perceptron is trying to do is find a linear (straight line) boundary that perfectly separates the examples based on the two variables. There may be many straight lines that separate the training data, but don't separate, i.e. classify, new data that it never trained on. The training data may not have a linear separation at all, making the perceptron unstable. Later developments helped deal with this issue, but the biggest problem was that a single layer perceptron was still very limited in what it could compute.

It was determined that a multi-layer perceptron could solve these problems. Instead of one layer of neurons between the input and output there were many and each layer was fully connected to the next layer. These additional layers were called hidden layers. The problem was that no one could figure out how to train multiple layers until many years later.

### Credits
* The Master Algorithm by Pedro Domingos 
* https://en.wikipedia.org/wiki/Perceptron
* https://en.wikipedia.org/wiki/Feedforward_neural_network#Single-layer_perceptron

---
<!-- .slide: data-audio-src="../audio/" -->
# Neural networks

The components of a neural net:

* Data
* Model
* Training

Notes:
There are three main components to neural net based machine learning: data, model and training. The data or dataset is used to train the network, or model. Once a model has been trained, a slow process taking hours or even weeks, then it can be used on new data, which is called inference. Inference times are usually measured in milliseconds to minutes. So training is slow, but once trained, networks output answers quickly.

---
<!-- .slide: data-background-video="../video/VGG16 Neural Network Visualization-RNnKtNrsrmg-overview.mp4" data-background-size="contain" -->

### Credits <!-- .element: class="attribution" -->
* [_VGG16 Neural Network Visualization_ by Denis Dmitriev](https://www.youtube.com/watch?v=RNnKtNrsrmg)

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
# Data

Notes:
The data used for a model is the only thing the network can use to be effective at its goal. The hope is that eventually the network will learn to generalize from this data such that when it is given new data that it has never seen before it will be as effective as it was with the data it was trained on.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
### Data set splits:
* Training
* Validation
* Test

Notes:
To examine how effective the network is at generalization you can partition or split the data you collect into three groups: training, validation and test. 

Training data is used in the training process and is seen many times by the network. This is the data used to generate errors and learn from. 

Validation data is used during training but only to check on how well the model handles data it hasn't seen before, the weights are never updated in response to the validation data. Instead, this check is mainly used to know when to stop training - when the performance on the training data is good **and** the performance on the validation data is good. It is entirely possible for the performance on these to be very different.

Test data is used after the model is finished training to give it another set of data it has never been trained on and never been checked whether it generalizes well to. This is to get a rough idea of performance of the model "in the wild" on data that you didn't collect and this is the data used when researchers report their findings in papers. When models are used for art, splitting the data may be less important, as often the output will be visually inspected by the artist since the desired results are subjective. In addition, not using all your data for training by holding out data for validation and testing can make already small datasets even smaller.

We'll go into practical details on collecting, cleaning and curating datasets in the next tutorial.

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
# Model

Notes:
As in the Perceptron, neural networks are described by a model made of layers of neurons with connections, with an input layer and an output layer. The interior layers between input and output are sometimes referred to as "hidden layers" inside the "black box" of the outer layers. The construction of the model is done using traditional software programming. The design of model is often the area of research being investigated to see what structure and flows of information between the input and output gets closest to the goals of the researchers.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Notes:
In deep learning there are many layers. These are sometimes called Multilayer Perceptrons or MLPs. Part of the engineering of the network consists of choosing how many layers, how many neurons per layer and how the neurons are connected. Layers can be full-connected, where each neuron has a connection to every neuron in the next layer, or sparsely connected.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Notes:
The number of layers is referred to as depth and the amount of neurons in a layer is referred to as width. These parameters affect the representational capacity of the network. Essentially, the deeper and wider a network the more information it can store or represent. However, depth and width incur costs - slower training, slower inference, etc. Matching the complexity and amount of information in the input to the capacity of the model is both an art and science, done through intuition, copying from related projects, extensive experimentation and using tools to help automate the design search.

For example, models dealing with images tend to work well with 10 or so layers, and this could be that images contain hierarchical features (a person has a head, a head has a face, a face has a nose, all the way down to vertical line detection) and each layer tends to specialize on a level of hierarchical representation.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Notes:
A model basically describes a set of weights and biases. One way of thinking about training is encoding a representation of the training data into the weights. This is most obvious for generative models like StyleGAN where thousands of images of faces are used to train the model that can then reproduce similar faces. StyleGAN transforms pixel data of faces into a much smaller number of weights and biases in the model that represent the same data a different way. This is a form of data compression. Some information is lost, but a well designed model that is deep and wide enough will store all the important information such that if you are shown an image it generates you will think it is the same person as an image from the training data even if the exact pixel values aren't the same. Thus models have a representational capacity that is determined by their size.


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/GAN_projection_Obama.mp4" data-background-size="contain" data-background-video-loop -->
Notes:
What's truly amazing is that you can find faces of people who were never in the training data as well - a model with enough capacity that generalizes well learns how to represent any face composed of variations and mixes of the facial elements it has trained on.

### Credits <!-- .element: class="attribution" -->
* [_Latent Space Exploration with StyleGAN2_ - Amar Saini ](https://amarsaini.github.io/Epoching-Blog/jupyter/2020/08/10/Latent-Space-Exploration-with-StyleGAN2.html)

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
# Training

Notes:
Neural nets process information from input to output. This is called forward propagation. They learn however from backpropagation or backprop, where the error determined at the output (by a mathematical function that computes the loss, or the difference between the output and the desired output) is sent backwards through the connections and an optimizer function uses the error to update the weights of the connections. Instead of doing one weight at a time much more efficient backpropagation algorithms have been created that work for any size network.

So training requires forward and backwards passes, an evaluation function and an optimizer function. The evaluation function is used on the output to calculate what is called loss, cost, reward, or fitness depending on the type of model. Regardless of name it is a signal used by the optimizer function to update the weights of each layer. 


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
The optimizer function is modified by a learning rate which controls how much the weights are adjusted and thus how quickly the model can learn. At first it would seem like increasing the learning rate would be a good idea, however large adjustments can overshoot the most effective weight. Each step of the training needs to adjust the weights as much as possible (to speed up learning) without overcompensating.


<!-- .slide: data-audio-src="../audio/"  data-background-video="../video/Chemotaxis - Bacteria attracted by a sugar crystal-F6QMU3KD7zw.mp4" data-background-video-muted data-background-video-loop -->
## Gradient descent <!-- .element: class="fadeout" -->
Notes:
You'll hear researchers talk about stochastic gradient descent (SGD), the de facto standard algorithm used in training. A simple version of this algorithm is used in nature too. Many small organisms follow concentration gradients of the surrounding molecules, swimming towards higher local concentration of food and away from toxins. 

### Credits <!-- .element: class="attribution" -->
* [Chemotaxis: Bacteria attracted by a sugar crystal](https://www.youtube.com/watch?v=F6QMU3KD7zw)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Extrema_example.svg" data-background-color="#EEE" data-background-size="contain" -->
## Local minima <!-- .element: class="hidden" -->
Notes:
Imagine this curve described a single connection weight and it's error. Our goal is to adjust the weight to get the lowest error. You can see that the "landscape" has hills and valleys, peaks and troughs. Starting from a random weight we can use gradient descent to find the lowest error by taking small steps and seeing if the error is lower or greater. You descend down the slope of the hill (the gradient) to the lowest amount of error. It's possible however to get trapped in a local minima if you're at the bottom of a small valley. In both directions the error increases unless you take a much larger step out of the valley.


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/Optimizers - EXPLAINED!-mdKjMPmcWjY-crop.mp4" data-background-color="#EEE" data-background-size="contain" data-background-video-loop -->
Notes:
So large adjustments (i.e. higher learning rates) can avoid local minima, but they can also jump over minima bouncing back and forth on higher error parts of the curve. Most gradient descent algorithms take larger steps that get smaller over time. The hope is to quickly find the lowest general part of the curve and then more slowly make your way to the very bottom.

### Credits <!-- .element: class="attribution" -->
* [_Optimizers - EXPLAINED!_ -  CodeEmporium](https://www.youtube.com/watch?v=mdKjMPmcWjY)


<!-- .slide: data-visibility="hidden" -->
Notes:
Neural nets have thousands of neurons so rather than a simple curve or 3d landscape gradient descent acts on a hyperspace. This typically has highly convoluted surfaces and countless places where learning can get stuck. However, there is usually a way out - you need to be stuck in every dimension to be in a true local minima, which is far more rare. 


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/trusses.mp4" -->
Notes:
One last property of neural nets is a bit surprising at first: there isn't a single lowest error solution. So many learned solutions are roughly equally wrong in high dimensional space, thus two networks with random starting conditions can find very different weights that have very similar error rates. This mirrors human brains that have very different connections, but similar overall structure and can get the same score on a math test. 

This to me is one of the beautiful aspects of neural nets. Each model of the same design starts out with random weights, producing indistinguishable noise, and from that random starting point takes a unique journey to one of a vast number of solutions to the same problem. Like us, astonishingly unique and similar at the same time.

### Credits 
* The Master Algorithm


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/under and overfitting.webp" data-background-size="contain" data-background-color="#343f4b" -->
### Underfitting and Overfitting <!-- .element: class="hidden" -->
Notes: 
When a model doesn't have the capacity to capture the underlying structure of the training data it is said to be underfitted to the data. 

Conversely, overfitting can happen when there is too much capacity or too much training. Overfitting can be described as memorization of the training data rather than effective generalization. Instead of compressing the data into a smaller accurate representation, the model just stores the correct answer for every training data point. So for example, instead of recognizing the class of animal, dog vs cat, the model will only know if each training data image is a cat or dog, given an image it has never seen before it is unsure.

CUT: Interestingly, empirical tests have shown that some large models trained beyond the start of overfitting can sometimes improve after a period of overfitting.

### Credits <!-- .element: class="attribution" -->
* [Images by Khush Patel](https://towardsdatascience.com/overfitting-vs-underfitting-ddc80c2fc00d)


<!-- .slide: data-visibility="hidden" -->
Notes:
Described visually you can see overfitting as the boundary between classes with curves that have high amplitude patterns rather than smoother, lower amplitude patterns. The more extreme the curvature, even if it has no error for the training data will generally have higher error for data it hasn't seen yet. 

There are many techniques that can be used to combat this, a common one being the use of validation data and stopping the training once the validation error gets to its lowest point and then starts to increase (while training data error will continue to decrease). Other techniques try to prevent memorization by altering the training data or temporarily disabling part of the model.  

This last idea, called dropout, is illustrative of the power of simplicity. During training random neurons are temporarily disabled, which causes two effects: the network starts to learn alternate ways to represent the data, for example, increasingly using whiskers to classify cats. Using multiple strategies is called ensemble learning and is shown to be very effective. Similarly, training can cause networks to overly rely on a single feature that is a good enough predictor unless the network is forced to consider other options. For example, early experiments with image classification were easily fooled by adding subtle (undetectable by humans) but carefully crafted noise to the image. When researchers investigated they found that texture was the most important attribute being used to make the predictions, but they could force more robust learning but adding silhouettes, line drawings, noise, clipping and partial masking of the image and other transformations to the training data to expand the range of characteristics that led to a classification. This data augmentation is critical now in image-based training.

### Credits
* https://en.wikipedia.org/wiki/Overfitting


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/VGG16 Neural Network Visualization-RNnKtNrsrmg-training.mp4" data-background-size="contain" data-background-video-loop data-background-opacity="0.8" -->
### Hyperparameters <!-- .element: class="fadeout" -->

Notes:
Training iterations, one full cycle through the training data, are called epochs. The number of epochs to train for, the learning rate, and the initial weights of the network are all called hyperparameters. Hyperparameters are variables that need to be adjusted that affect the results of the training. Each model may have unique hyperparamters that tune the model and there is no way to know for sure what the best hyperparameters are at the start of training, and while there are tools that can automate the search, it is mostly experimental trial and error.

### Credits <!-- .element: class="attribution" -->
* [_VGG16 Neural Network Visualization_ by Denis Dmitriev](https://www.youtube.com/watch?v=RNnKtNrsrmg)

---
<!-- .slide: data-audio-src="../audio/" -->
# Learning Algorithm

1. Construct
2. Initialize
3. Feed data forward through network
4. Compare ouput value with expected value and calculate error
5. Propagate error back through network
6. Update weights based on error, optimizer and learning rate

Repeat 3-6 until error is minimized

Notes:
So to review, the learning algorithm for neural nets looks like:
* Construct the model and datasets.
* Initialize the model weights and biases and set the training hyperparameters.
* Feed training data forward through network.
* Compare network output value with expected value and calculate the error or difference.
* Propagate the error back through network.
* Update weights based on error, optimizer and learning rate
* Repeat until the error is minimized

It is also important to note that training order can matter. Similar to humans, many models benefit from simpler or lower resolution training examples first. 

TODO:
Models also suffer from some amount of forgetting, so it is currently hard to train on more than one task without significant model architecture changes. Multi-task and multi-modal models are being heavily researched but are still quite basic.

### Credits
* https://www.youtube.com/watch?v=A2ozujt3vdE

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Task-guidance.png" data-background-size="contain" -->
# Learning <!-- .element: class="hidden" -->

Notes:
The type of dataset you have determines the type of learning you can do.

Unsupervised or self-supervised learning can use most types of data. Supervised learning requires the data to annotated or labelled by humans (or an unsupervised process). For example, images used for classification need to be first classified by humans, so cats are labelled as cats. This labelling work is often crowd-sourced, as in the case of the labelled image dataset ImageNet.

Reinforcement learning is most associated with robotics and games where there is an interactive environment and a reward signal such as a high score or victory condition in a game. 

### Credits
* https://commons.wikimedia.org/wiki/File:Task-guidance.png


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/machine learning cake.png" data-background-size="contain" data-background-opacity="0.8" -->
If intelligence is a cake, the bulk of the cake is unsupervised learning,
the icing on the cake is supervised learning and the cherry on the cake is reinforcement learning. <!-- .element: class="quote" -->
_Yann LeCun_ <!-- .element: class="attribution" -->

Notes:
Yann LeCun has described the relationship between the three as a cake: unsupervised learning is the cake, supervised is the icing and reinforcement is the cherry on top. Consider the amount of data in the training samples - unsupervised data may have millions of bits per sample (the entire image), supervised has 10-10000 bits (the label), and reinforcement as a few bits (you won or lost, gained a point or lost a point). The more bits of data the more the model can learn from each sample.

Training methods can be combined. OpenAI's newest GPT model is trained on unsupervised text and then is fine-tuned using reinforcement learning using human feedback of whether its output is useful or toxic.

### Credits
* https://www.youtube.com/watch?v=VsnQf7exv5I


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/unsupervised learning.png" data-background-size="contain" data-background-color="white"-->
## Unsupervised learning <!-- .element: class="hidden" -->

Notes:
Unsupervised learning is an algorithm that learns patterns from untagged or unlabelled data. The neural net learns a representation that allows it to mimic the data it is trained on. The power of unsupervised learning is that you can predict any part of the input given a smaller observed part. In other words the neural net becomes generative. For example, language models can learn by blanking out words from sentences and guessing which words fill in the blanks. In image in-painting you can block out part of the image and the network can fill in the missing part. No labels are needed because the training only requires hiding parts of the training data.

### Credits
* https://www.boozallen.com/s/insight/blog/how-do-machines-learn.html
* https://en.wikipedia.org/wiki/Unsupervised_learning


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/unsupervised_cnn_embed_4k.webp" -->
Notes:
The main problem with unsupervised learning is the potential mismatch with human goals or definitions. For example, unsupervised training can categorize images but the categories aren't defined by humans, instead emerging from the data. This can be an extremely useful process of discovery and developing new perspectives. 

Thus, unsupervised learning is used in clustering or grouping data and to find all manner of patterns, partitions, relationships or hierarchies. It can also detect anomalies in data or the most important features that are then used for training another neural net.

### Credits
* [Invariant Information Clustering for Unsupervised Image Classification and Segmentation](https://arxiv.org/pdf/1807.06653.pdf)
* https://cs.stanford.edu/people/karpathy/cnnembed/


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/Robot's Rock-RcxuXYE9UeY.mp4" data-background-video-loop data-background-video-muted -->
Notes:
An example of unsupervised learning in art is the Self-Organized Map (SOM) used in Nicolas Baginsky's _Aglaopheme_ robotic slide guitar project. This takes audio input and maps it to the playing the instrument in a feedback loop as it listens to itself and other bandmates.

### Credits <!-- .element: class="attribution" -->
* [_Robot's Rock_ - The Three Sirens by Nicolas Baginsky](https://www.youtube.com/watch?v=RcxuXYE9UeY) 


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/supervised learning.png" data-background-size="contain" data-background-color="white"-->
## Supervised learning <!-- .element: class="hidden" -->

Notes:
Supervised learning generally requires training pairs of input and outputs, for example an image of a cat and the cat label, and the neural net will learn to predict the label when given just an image. Thus training data needs labels or other information that is used in the evaluation function to check the correctness of the output. Generally this learning is used for categorization or recognition.

Supervised learning is also used for regression algorithms that discover the relationship between a target variable and several others. For example house or stock prices or temperatures.

There also exists semi-supervised learning where only a subset of the data is labelled.

### Credits
* https://en.wikipedia.org/wiki/Supervised_learning
* https://www.boozallen.com/s/insight/blog/how-do-machines-learn.html


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/Multi-Agent Hide and Seek-kopoLzvh5jY-720.mp4" data-background-video-loop -->
## Reinforcement learning <!-- .element: class="fadeout" -->

Notes:
This style of learning is used in agents interacting with an environment, either virtual (like a video game) or physical. Importantly the agents actions affect its environment and the agent is trying to maximize a cumulative reward. It does not require labelled training data but usually the agent must have ways of exploring the environment and its possible actions. Agents balance exploration with reward goals.

### Credits
* [Multi-Agent Hide and Seek - OpenAI](https://www.youtube.com/watch?v=kopoLzvh5jY)

### Credits
* https://en.wikipedia.org/wiki/Reinforcement_learning
* https://openai.com/blog/emergent-tool-use/

---
<!-- .slide: data-audio-src="../audio/" data-background-color="white" -->
# Features
<img data-src="../images/features_lecun.png">

Notes:
When we talk about learning what we usually mean is learning a transformation of input data into a smaller representation that then is used to generate output. This representation consists of features. 

Features are distinct characteristics of a phenomenon and useful features are independent, informative and discriminative. Features can exist at different levels of abstraction. In a hand writing recognition system simple features could be lines and loops, number of internal holes, height and width; one level later could be letters; then words. 

In earlier machine learning practice features were determined manually by humans or by software they wrote to detect features, but modern deep learning techniques prefer to learn the features from the raw data, for example using a system of convolutions on images to extract features before sending those to final layers of neurons to do image recognition. 

Sets of extracted features can be compared. A facial recognition system might compare the features in a photo of your face to the features in a new photo to identify you in it.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/latent_space_exploration.gif" -->
Notes:
The entire set of features learned after training, the model's representation of the training data, can be organized into a latent space. Each point in the space represents a different set of feature values and points closer together are more similar. Generative images models commonly used by artists can create animations by displaying the image at each point in a latent space while moving through the space. Part of the art and fun of generative models is exploring and then moving through the latent space in a performative way.

### Credits
* https://en.wikipedia.org/wiki/Feature_(machine_learning)
* https://towardsdatascience.com/a-tool-for-collaborating-over-gans-latent-space-b7ea92ad63d8
* https://github.com/tayden/VAE-Latent-Space-Explorer

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/types_of_networks.webp" data-background-color="white" -->
# Types of networks <!-- .element: class="fadeout" -->

Notes:
There is constant innovation of different types of models paired with different types of learning. Each approach to learning has various strengths and weakness and there is yet to be a general approach for all types of problems. As with the human nervous system, which has various areas with different structures and cell types specialized to different tasks, it is likely that different models will also be needed. Let's take a quick look at some of the most successful models created to date.


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/blood_quantum_if_I_had_my_time_again.webp"  -->
## Recurrent networks <!-- .element: class="fadeout" -->

Notes:
Typical feed-forward networks take one input and give one output that is wholly dependent on that input. What happens if you have a series of data points or data points tied to specific times (i.e a time-series)? This data may depend on previous data and that dependency may be separated by a long period of time. Language is a typical example where words refer back to one another. Music is another common example.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/RNN.png" data-background-size="contain" data-background-color="#0b5394" -->
Notes:
Recurrent networks or RNNs add loop or feedback connections. Neurons will connect to themselves or other neurons in previous layers allowing information to be retained between inputs. Simple loops allow for an effective short-term memory. These loops however can cause training problems when using gradient descent.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/LSTM.png" data-background-size="contain" data-background-color="#0b5394" -->
Notes:
More complicated loops add learnable forgetting so that neurons can learn to retain information for different amounts of time, which then allows for much longer recall of information. One technique is called Long short-term memory or LSTM. An LSTM component learns what data is relevant to keep and which to ignore. It can remember values over arbitrary time intervals because it regulates the flow of information in and out of the LSTM. 

### Credits
* https://en.wikipedia.org/wiki/Long_short-term_memory
* https://e2eml.school/how_rnns_lstm_work.html
---
<!-- .slide: class="zoomin" data-audio-src="../audio/" data-background-image="../images/Google cat neuron.webp" data-background-size="contain" -->
## Convolutional neural nets

Notes:
A convolutional neural net (CNN or ConvNet), is inspired by human vision neural circuitry and is commonly used for processing images. It is often used in computer vision, image recognition, image generation, and image segmentation (finding the objects in an image). It is designed to handle common issues with visual data, for example learning to ignore position, a cat is still a cat no matter where it is in the image.


<!-- .slide: data-audio-src="../audio/" -->
<img data-src="../images/convolution.jpg">
Notes:
Individual cortical neurons only respond to stimuli in a small region of the visual field and the fields of different neurons partially overlap. CNNs use the same strategy. In a CNN each neuron receives input from a restricted area of the previous layer. Typically, for grid-based data like pixel images this is a square area, often 3x3, 5x5 or 7x7. In contrast, in a full-connected layer the input is from every neuron in the previous layer. Layering multiple convolutional layers means then that each neuron takes input from a larger area in the input than the previous layer. After the pixel data has been transformed by the CNN it is often fed into a fully connected network for further processing, such as classification.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/CNN_pixel_to_feature.webp" data-background-size="contain" -->
Notes:
Images have a lot of data to process if each channel (red, green, blue) of each pixel is represented by a neuron. A 1000x1000 RGB image would have 3 million weights, making it difficult to process in a fully connected network. A CNN converts overwhelming pixel image data into a form that is easier to process - a feature map, also called an activation map. This operation extracts features such as edges, colors, and gradient orientation from the pixel data. 

### Credits
* [Visualizing and Understanding Convolutional Networks](https://arxiv.org/abs/1311.2901)


<!-- .slide: data-visibility="hidden" -->
<img data-src="../images/convolution.gif">
Notes:
ConvNets learn "filters" also called "kernels" that process the entire input. These filters are a set of weights and a bias and are shared between all neurons on that layer. The filter is applied to the receptive field of each neuron.

TODO: kernel example image, convolution animation

Once features are computed by the filters then they are passed to a typical fully connected network for classification or other processing.

### Credits
* https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53


<!-- .slide: data-visibility="hidden" -->
CNNs provide a good opportunity to demonstrate some important properties of neural nets. We know that theoretically neural nets are universal approximators - able to approximate a broad class of functions - including that of finding features in images. This flexibility has a downside, because the universe of functions is so large there are (again, theoretically) many functions that would do well on the training data but not on test or real world data - i.e. we may fail to generalize. So we actually want to restrict the search for these functions to a smaller set that still contains the solution, but ruling out many bad solutions that in the context of the training data look similar. The better we can do that the less training data we need. CNNs are an example of that, by the way they are constructed they encode some prior knowledge of the data. In this case, that an image that is translated (i.e. pixel shifted) is an image of the same thing (assuming the thing doesn't shift out of view), the features that they detect remain stable, which is called equivariance. However, basic CNNs do not have the same properties for rotation, scale, shear, or other transformations, and approaches that allow for stable features despite these transformations tend to improve performance.

### Credits
* https://en.wikipedia.org/wiki/Convolutional_neural_network
* https://en.wikipedia.org/wiki/Kernel_(image_processing)
* https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53
* https://fabianfuchsml.github.io/equivariance1of2/

---
<!-- .slide: data-audio-src="../audio/" data-background-video="../video/trusses_rotating.mp4" data-background-video-muted -->
## GANs <!-- .element: class="fadeout" -->
Generative Adversarial Networks <!-- .element: class="fadeout" -->
Notes:
Generative Adversarial Networks or GANs are popular models for image creation. Created in 2014, GANs solve some tricky problems. First, how do you teach a machine to mimic a large amount of complex data? The first attempts by a neural net will be so bad it won't have any positive signal to follow to improve upon. This can be also thought of as, how do you reduce the difficulty of the task so that learning can happen. Second, how do you automatically judge whether generated complex data is correct? How does the machine judge when your flower image generator produces a flower?


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/GAN_diagram.png" data-background-size="contain" -->
Notes:
GANs are a brilliant solution to these problems - by creating two neural nets that learn in tandem. One network is the discriminator or critic, the other is the image generator and together they can be thought of as playing a competitive game. The generator creates images, trying to match or mimic the training data images, the discriminator's role is to judge whether images are "real" (from the training data) or "fake" (from the generator). Each round of the training game the generator makes an image and the discriminator is given a real image and a fake image and asked to judge it. When the discriminator judges the fake generated image as real, the generator is given a positive signal - its on the right track. When the fake is spotted, it is given a negative signal. The discriminator is learning too, getting better at distinguishing real from fake.

Importantly, both the discriminator and the generator start out randomly, absolutely terrible at their job and both grow better at about the same pace. In fact, if one gets much better than the other the learning will stop, since it requires a mix of successes and failures to guide the learning. As we discussed in Tutorial 1, the GAN technique relies on staying in the Goldilocks zone, where learning is maximized because things are just challenging enough.

GANs are also interesting since they have a correlation with other phenomenon such as camouflage, mimicry and other evolution driven by discriminative competition.

### Credits
* https://thegradient.pub/playing-a-game-of-ganstruction/
* https://en.wikipedia.org/wiki/Generative_adversarial_network
* https://towardsdatascience.com/generative-adversarial-network-gan-for-dummies-a-step-by-step-tutorial-fdefff170391
---

Interlude - Hans or Sound Escapes

---
<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/calling_a_robot_with_your_phone.webp" data-background-opacity="0.5" -->
# Deep learning challenges <!-- .element: class="r-fit-text" -->

* Large datasets
* Eco-footprint
* Large amounts of input data
* Long tail data
* Greedy learners
* Explainability
* Rigid models, simple neurons
* Reasoning & Understanding

Notes:
Neural networks have many limitations, quirks and drawbacks. Some of these are less problematic for artists, who can embrace the limitations as interesting parts of the artform. Nonetheless these limitations should be understood and play a big role in use of this technology in science and industry.

Many of these limitations are the subject of active research, and even just in the process of writing this tutorial the landscape of what is possible has changed.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/ImageNet_example.jpg" data-background-opacity="0.7" -->
## Large datasets

Notes:
The biggest drawback of deep learning, especially for artists, is that the performance of neural networks are highly dependent on large datasets. The internet has made constructing large datasets possible, but problematic.


<!-- .slide: data-visibility="hidden" -->
Notes:
Let's look at some sizes of datasets and compare them to human experiences.

It is estimated that the human eye transmits roughly 10 million (10^6) bits per second. At roughly 2 * 10^7 seconds of wakeful vision each year, that's roughly 10^14 bits of visual information by the time we are 5 years old. Popular image datasets have approximately a million images at around 150 Gb compressed or 2 * 10^12 bits uncompressed. That's about 50 times less than a 5 year old... roughly equivalent to a month old baby. for a year.

The most successful large language models use the MassiveText dataset taken from the web, books from 1500-2008, news, software code from github, and wikipedia with a total size of 10.55 TB (8.4 * 10^13 bits). (All of Wikipedia is just 0.001 TB.)


<!-- .slide: class="panup" data-audio-src="../audio/" data-background-image="../images/explainable_AI_WEIRD.webp" -->
### The WEIRD Internet
(Western, educated, industrialized, rich and democratic)

Notes:
Gigantic datasets sourced from the Internet cannot be easily curated leading to a host of problems: toxic language, incorrectly labelled images, and generally low quality data that lowers the model's usefulness. Data gathered from the public Internet has many more subtle problems: a lack of diversity and over-representation of certain viewpoints. Particularly, younger and WEIRD (Western, educated, industrialized, rich and democratic). Existing over-representation of content creation amongst the young WEIRD group stand out as well: white, male, and heterosexual. Those most comfortable to speak publicly and comfortable using publishing tools (such as Wikipedia and Reddit) are the easiest to include in the dataset. 

### Credits
* [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](https://dl.acm.org/doi/10.1145/3442188.3445922)


<!-- .slide: class="zoomin" data-audio-src="../audio/" data-background-image="../images/rhodo_truss.webp" -->
Notes:
Carefully curated smaller datasets, something that single artists can create, are a large amount of work. A small dataset for image generators is on the scale of 1000 or so images, although I have successful used 500 or fewer images if the results don't have to be photorealistic.

### Credits <!-- .element: class="attribution" -->
* [Rhododendron photography by Andrew Drown](https://drown.photography/)


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/VGG16 Neural Network Visualization-RNnKtNrsrmg-data_collection.mp4" -->
### World models
Notes:
Why is so much data needed? Adult humans can often learn from a few examples. This is because they have slowly, over many years, learned a good basic understanding of the world. Machines lack this basic understanding, instead they compensate by having far more data but in a very narrow range or domain of information. For example, thousands of images of fruit and vegetables. 

The data fed into a neural network, by in large, is made of recordings of the real world, and thus differs significantly from actual embodied perception of the world. It comes in small arbitrary slices with no ability to interact or get new perspectives of the same situation. Thus a model's view of the world is shaped by the recordings and the more it learns from the recordings the more it could diverge from reality.

### Credits <!-- .element: class="attribution" -->
* [_VGG16 Neural Network Visualization_ by Denis Dmitriev](https://www.youtube.com/watch?v=RNnKtNrsrmg)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/GAN - Sarin - Japanese landscape 1.jpg" data-background-size="contain" -->
Notes:
There are ways to emulate some existing world knowledge in machine learning techniques. For example building on top of more general models, such as general machine vision models for image generation or large language models transformed to a specific domain of knowledge. An existing working network that was trained from scratch on a larger dataset, is given extra training on a much smaller domain. For example, like the image here by Helena Sarin, you could start from a GAN pre-trained on landscapes and then train it on Japanese poetry book covers.

### Credits <!-- .element: class="attribution" -->
* [_Playing a game of GANstruction_ - Helena Sarin](https://thegradient.pub/playing-a-game-of-ganstruction/)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/zero_shot_zebra.jpg" data-background-size="contain" -->
Notes:
Other research tries to create models that can learn from small numbers of examples. This is called one-shot, few-shot and even zero-shot learning. One-shot learning tries to learn from a single example. For example, a model trained to recognize animals then trained on a single labelled image of a zebra should be then able to classify most images of zebras. Few-shot allows a few more examples. Zero-shot only requires auxiliary information, for example the animal recognition model told that zebras are "horses with stripes" should be able to use that to classify images of zebras. 

Lowering the amount of data need for training is a top priority for many researchers, especially as collecting datasets when you aren't one of the giant tech companies is very expensive. 

### Credits
* https://en.wikipedia.org/wiki/One-shot_learning
* https://en.wikipedia.org/wiki/Zero-shot_learning
* http://web.vu.lt/mif/a.buteikis/wp-content/uploads/PE_II_Book/1-4-learning-algorithms.html
* https://www.sciencedirect.com/science/article/abs/pii/S0031320318300876


<!-- .slide: class="panup" data-audio-src="../audio/" data-background-image="../images/a_mainframe_computer_with_a_smokestack_and_black_smoke.webp" -->
<img data-src="../images/ai-and-compute-all-openai.webp">

Notes:
On a practical level, the requirement of large datasets and many examples for effective learning means that the amount of computation needed for training is significant. Fortunately, the computation for inference or use of a fully trained model is much less. However, in the lifetime of a model, it spends most of its compute time (80-90%) in inference, so gains here are very important. Also note, that it is estimated that 80-90% of ML projects never reach a state of use, remaining failed experiments.

The largest models being trained currently are language models, with costs estimated up to $100 million just for the infrastructure, and have training carbon emissions equivalent to 3 jet plane round trips across North America.

Large cloud datacenter providers are working towards carbon-free energy 24/7 and new hardware is more efficient, so there is hope even if the total amount of ML computation continues to increase exponentially. Note that the doubling time since 2012 has been approximately every 3.5 months, so every month sooner carbon-free compute can be delivered is important.

### Credits
* https://devblogs.microsoft.com/sustainable-software/the-carbon-footprint-of-ai/
* https://openai.com/blog/ai-and-compute/
* https://arxiv.org/abs/2104.10350


<!-- .slide: class="zoomin" data-audio-src="../audio/" data-background-image="../images/too_much_video_data.webp"  -->
## Large amounts of input data

Notes:
Deep learning currently has a problem with large inputs. This is separate from the number of items in the training data, rather it is the size of each of the items in the training set. For example, high resolution images and especially video (at 30 high resolution images per second). In the last year or two high resolution images are increasingly tractable, but video still doesn't have any usable solution. Large inputs require wide networks that have trouble fitting into the memory of a graphics card.

For the next few years expect to work around resolution limits on images and video, especially for independent artists using consumer graphics cards.


<!-- .slide: data-audio-src="../audio/" data-background-video="../video/Tesla Autopilot Stop and Go Traffic-5TjbqVartjM.mp4" data-background-color="#AAA" data-background-opacity="0.5" data-background-video-loop -->
<div class="r-stack">

## Long tail data
<img data-src="../images/long_tail_data.svg">

</div>

Notes:
This problem is more subtle but probably one of the most important to understand conceptually. If you look at the distribution of data in the real world you often see a shape like this.

There is a lot of data for a small number of cases, there is sometimes a hump of data for a set of common cases, then there is a "long tail" of situations where there is very little data. Those situations are rare, but in the real world, given enough time or copies of the model those situations will occur.

### Credits
* [_Full Self-Driving_ by Telsa](https://www.youtube.com/watch?v=tlThdr3O5Qo)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/White_Semi.jpg"  -->
Notes:
An infamous example is Tesla's self-driving failure case where the car drove underneath a white 18-wheel truck and trailer crossing in front of it on the highway. The white truck blended into the bright spring sky. A tiny fraction of time spent driving involves hard to see semi-trucks perpendicular to your path but this happens to somebody quite often.

These rare cases can be difficult for neural networks. They are unlikely to be in the training data and even if they are, they may only be represented once (or at their actual rarity) which might not be enough for the net to learn from.

### Credits
* https://www.theguardian.com/technology/2016/jun/30/tesla-autopilot-death-self-driving-car-elon-musk
* * https://hensleylegal.com/4-tips-sharing-road-semi-trucks/


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/texture_and_adversarial_noise.webp" data-background-size="contain" data-background-color="white" -->

Notes:
There is a common wisdom that neural nets tend to be greedy learners - they like to find a single good enough solution and stick to it. They like shortcuts. Unless careful designed, your training data can cause networks to overly rely on a single type of feature unless is forced to consider other options. For example, early experiments with image classification were easily fooled by adding subtle (undetectable by humans) but carefully crafted noise to the image. When researchers investigated they found that texture was the most important attribute being used to make the predictions, but they could force more robust learning but adding silhouettes, line drawings, noise, clipping and partial masking of the image and other transformations to the training data to expand the range of characteristics that led to a classification. This data augmentation is critical now in image-based training.

### Credits
* https://openreview.net/forum?id=Bygh9j09KX
* https://xcorr.net/2021/12/31/2021-in-review-unsupervised-brain-models/
* https://christophm.github.io/interpretable-ml-book/adversarial.html


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/explainable_AI.webp" -->
## Explainability

Notes:
Explainable AI is the opposite of a "black box", rather the results and the process of getting to the results can be understood by humans. Explainable AI still doesn't have aclear, universal definition but roughly follows three principles:


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/explainable_AI.webp" data-background-size="contain" -->

<div class="backdrop">

* Transparency
* Interpretability
* Explainability

</div>

Notes:
Transparency refers to full descriptions the datasets, model and training procedure, including the motivations of the designers. For me this would also require open source models and full access to the dataset used, but corporations generally think of this in more limited ways.
Interpretability describes the possibility to predict what will happen given a change of input.
Explainability goes one step further, describing the comprehension of why the decision was made and how each feature of the model has contributed. 

Explainable AI is critically important when ML is used for decision-making or prediction in consequential situations like healthcare, autonomous vehicles, etc. Issues around trust, determination of causality, reliability, fairness, and privacy are dependent on explainability.

### Credits
* https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
* https://www.kdnuggets.com/2018/12/machine-learning-explainability-interpretability-ai.html 


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/adversarial_noise.webp" data-background-size="contain" data-background-color="white" -->
Notes:
One of the most confounding aspects of neural nets is that they can be sensitive to slight input changes that are human-imperceptible. Adding a bit of noise, undetectable to a human, to an image classifier may change the classification completely. Better training procedures can help reduce this, but there will always be the equivalent of what we call "optical illusions" in humans, and discovering them requires additional effort.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Abraham_the_autonomous_AI_artist.webp" -->
Notes:
There is no easy explanation for outputs based on millions of weighted connections. Models don't understand themselves either, and can't explain their reasoning to us. Being able to explain themselves to humans would require something much closer to general intelligence and at minimum an ability to understand its own thinking and the ability to communicate that so that a human could understand. Considering how poorly humans fair at both of those tasks you can see the scope of this challenge. However, I would say that part of the joy of making art is exactly tackling this problem - how to understand yourself and communicate it to others. Perhaps explainable AI is the process of making AI artists - making Gene Kogan's dream of the autonomous AI artist the future of explainability.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/feature_visualization.png" data-background-size="contain" data-background-color="white" -->
Notes:
One thing the machines have going for them is much more transparency and easier testing. Researchers have already done good work on areas like highlighting the part of an image a neuron most strongly responds too. So while an AI may not be able to explain itself, it may be enough that we can inspect its mind when we cannot interpret its actions intuitively.

### Credits <!-- .element: class="attribution" -->
* [_VGG16 Neural Network Visualization_ by Denis Dmitriev](https://www.youtube.com/watch?v=RNnKtNrsrmg)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/poverty_neuron.webp" data-background-size="contain" data-background-color="white" -->
Notes:
For example, OpenAI's microscope project documents each neuron in some of their models. You can explore their site by clicking on the link in the top right. I've started you at a bizarre and disturbing multi-modal neuron in the CLIP model that responds strongly to a machine learned concept combining wanting, unemployment, poverty and homelessness. (But from whose perspective?) On the right are feature visualizations using a deepdream technique to show optimal images to activate the neuron, the smaller images are from ImageNet that most activate the neuron, similarly for the text prompts. Peering at the details of any mind will be fascinating, confusing and disturbing with an uneasy sense of violation as the most deeply private becomes inspectable.

### Credits <!-- .element: class="attribution" -->
* [OpenAI Microscope of Neuron #237](https://microscope.openai.com/models/contrastive_4x/image_block_4_4_Add_6_0/237)

### Credits
* https://openai.com/blog/multimodal-neurons/
* https://microscope.openai.com/models



<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
## Rigid models

Notes:
Another subtle, but I think important to understand limitation of current models is their "rigidity". The structure of the model is engineered or constructed rather than learned. Structure is fixed, not modular and engineered through trial and error instead of learned from data. This means that any sharing or reuse of computation is rigid or fixed, rather than adapting to the nature of the input. Instead of directing data to the parts of a model that can best interpret it, all data flows through the same path. This rigidity makes it hard to adapt to longtail data and multi-task learning and is catastrophic to performance if the real data distribution shifts after the model has been trained, for example a pandemic dramatically changes hospitalization rates. Too soon?


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Notes:
Researchers are currently developing techniques that are trying to change this, creating models with composable modules of computation where inputs are routed through a sequence of modules. More of the model is learned instead of engineered. Much of the development of machine learning practice follows this progression, as we discover how to let the machine learn more aspects of learning itself.

Another way to think of this is in relation to our brains. We have a genetic code that encodes not how every neuron in the brain is connected but how to build neurons and structures of neurons which then start modifying their connections as we learn. We also have structures and mechanisms for coordinating and routing signals amongst different brain areas. Both these lower and higher level aspects of human brains are missing from most current neural net models.

### Credits
* https://arxiv.org/abs/2110.06399


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Complete_neuron_cell_diagram_en.webp" data-background-size="contain" data-background-color="#DDD" -->
## Simple neurons <!-- .element: class="fadeout" -->

Notes:
Concerns have been raised that artificial neurons are too simple compared to actual neurons. Actual neurons are cells with many different parts and complex internal processes. They have firing rates rather than continuous values. While there are artificial neural net models that more closely resemble living ones, they don't run well on regular computer hardware and generally are only used as research tools.


<!-- .slide: data-visibility="hidden" -->
TODO: video or image of prism glasses or upside down world glasses
Notes:
We know that our brains are much more robust and flexible in terms of perturbation or environment, and that they can very quickly adjust by interacting with the environment. My favourite example of this are these glasses that shift the location of your gaze. You put them on and reach out to touch a point in space and end up 10cm off. However, play 30 seconds of whack-a-mole with them on and your brain adapts and you can now reliably touch that offset point. Take the glasses off and you miss the mark once again until you re-adapt.


<!-- .slide: data-visibility="hidden" -->
### Liquid Neural Nets <!-- .element: class="fadeout" -->
Notes:
This ability to adapt without retraining is explored in techniques like Liquid Neural Nets that look deeply into real neuronal computation. Researchers even explored down to the level of atoms, which they determined to be unnecessary. They have found useful abstractions that improve sequence modelling and is robust to noise and other perturbations.

### Credits
* https://cbmm.mit.edu/video/liquid-neural-networks


<!-- .slide: data-visibility="hidden" -->
Notes:
Neural nets also lack neuromodulators - neurons can release chemicals that diffuse over larger areas of the brain and regulate the firing of the neurons in the area for hundreds of milliseconds to several minutes. Neuromodulators include dopamine, serotonin, and norepinephrine. 

Whether any of these differences make a difference to learning is a subject of fierce debate. Obviously ML has succeeded to human or super human levels in narrow tasks, but it is an open question whether there is some critical aspect required for general intelligence. More robust and performant ML systems are certainly possible and current neural net models may just be a stepping stone.

### Credits
* https://en.wikipedia.org/wiki/Neuromodulation 


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
## No common sense or reasoning <!-- .element: class="r-fit-text" -->

Notes:
The symbolic AI camp continues to point out that neural nets have no common sense or reasoning, where reasoning is defined by a manipulation and composition of symbols and/or logic. 

Pedro Domingos in _The Master Algorithm_ puts it this way:


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Take commonsense reasoning. It involves combining pieces of information that may have never been seen together before. Did Mary eat a shoe for lunch? No, because Mary is a person, people only eat edible things, and shoes are not edible. Symbolic systems have no trouble with this — they just chain the relevant rules — but multilayer perceptrons can’t do it; once they’re done learning, they just compute the same fixed function over and over again. Neural networks are not compositional, and compositionality is a big part of human cognition. Another big issue is that humans — and symbolic models like sets of rules and decision trees — can explain their reasoning, while neural networks are big piles of numbers that no one can understand. <!-- .element: class="quote" style="font-size: 60%" -->
_Pedro Domingos in "The Master Algorithm"_ <!-- .element: class="attribution" -->

Notes:
"Take commonsense reasoning. It involves combining pieces of information that may have never been seen together before. Did Mary eat a shoe for lunch? No, because Mary is a person, people only eat edible things, and shoes are not edible. Symbolic systems have no trouble with this — they just chain the relevant rules — but multilayer perceptrons can’t do it; once they’re done learning, they just compute the same fixed function over and over again. Neural networks are not compositional, and compositionality is a big part of human cognition. Another big issue is that humans — and symbolic models like sets of rules and decision trees — can explain their reasoning, while neural networks are big piles of numbers that no one can understand."


<!-- .slide: class="zoomout-right" data-audio-src="../audio/" data-background-image="../images/a_black_box_that_no_one_can_see_inside_2.webp" -->
AI systems need to be able to deal with reality as it actually is, not with the way that we think it is — not with the way that our thoughts or language represent it as being... Taking the world to consist of discrete intelligible mesoscale objects is an achievement of intelligence, not a premise on top of which intelligence runs. <!-- .element: class="quote" style="font-size: 60%" -->

This achievement, which he calls registration, is an active process. <!-- .element: class="small" -->

Registration schemes necessarily impose non-innocent idealizations — inscribe boundaries, establish identities, privilege some regularities over others, ignore details, and in general impose idealizations and do an inevitable amount of violence to the sustaining underlying richness. This process of stewardship and accountability for registration, never imagined in the [symbolist] project, is of the essence of intelligence. <!-- .element: class="quote" style="font-size: 60%" -->
_Brian Cantwell-Smith in "Reckoning and Judgment"_ <!-- .element: class="attribution" -->

Notes:
Brian Cantwell-Smith has a wonderful rebuttal, "AI systems need to be able to deal with reality as it actually is, not with the way that we think it is — not with the way that our thoughts or language represent it as being". He continues, "taking the world to consist of discrete intelligible mesoscale objects is an achievement of intelligence, not a premise on top of which intelligence runs." This achievement, which he calls registration, is an active process. "Registration schemes necessarily impose non-innocent idealizations — inscribe boundaries, establish identities, privilege some regularities over others, ignore details, and in general impose idealizations and do an inevitable amount of violence to the sustaining underlying richness. This process of stewardship and accountability for registration, never imagined in the [symbolist] project, is of the essence of intelligence."

In this view intelligence is not built from symbols, intelligence creates symbols to reason with. This again is an attempt removing the human design (that definition of the symbols) from the machine.

Nonetheless, current neural nets are terrible at reasoning, but exploring how to make them more modular, composable and robust leads in the direction of allowing them to build their own registrations, not just in the training process, but on the fly in response to input. This composition of modules in turn could be viewed in a symbolic framing and the communication of the logic of the modules and how they can / are composed to be an attempt at explainability.

### Credits
* https://dl.acm.org/doi/10.1145/3442188.3445922
* The Master Algorithm by Pedro Domingos 
* The Promise of Artificial Intelligence: Reckoning and Judgment by Brian Cantwell-Smith pg 34-36
* https://ai.googleblog.com/2022/01/controlling-neural-networks-with-rule.html


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Abraham_the_autonomous_AI_artist_stochastic_parrots.webp" -->
## No Understanding <!-- .element: class="fadeout" -->

Notes:
In a famous paper entitled, "On the Dangers of Stochastic Parrots" the authors make the assumption that deep learning will never understand language. The generated text can be seemingly coherent, but this is in the eye of the beholder, and we know how much humans love to have a coherent model of the world. Because the machine never models our mental state it isn't communicating, instead it is using statistical models to parrot language that only appears to be relevant because it was relevant in recordings of real communication it was trained on. Communication, as they see it, is constructed from mutual interpretation of the actual thoughts and intent of the communicators. Mimicry provides no intent or understanding.

There has been a great deal of philosophy written on this topic, too much to cover here but I will point out a few things. This conception of communication is very beautiful, but it may not be useful.


<!-- .slide: class="panup" data-audio-src="../audio/" data-background-image="../images/the_Dangers_of_Stochastic_Parrots.webp" data-background-size="contain" -->
Notes:
We may not need much true communication with machines, and indeed, communicating with something with no agency / consciousness / intention or general intelligence is essentially pointless **if** the goal is to understand how they understand themselves or what they want. Language-based interfaces to powerful tools however can be useful as long as they allow us to control the machine or otherwise help it understand **our** intent or how we think. As I mentioned in the second tutorial, the ethics of machines with their own intent is quite dubious, but machines that absorb and reflect our own intent (and not that of others) are safer and potentially more useful. 


<!-- .slide: class="zoomout" data-audio-src="../audio/" data-background-image="../images/unexplainable_AI_creating_art.webp"  data-background-color="black"-->
Notes:
Imagine a machine intelligence that acts as a personal teacher. It may only be able to mimic recordings of great teachers and how those teachers responded to students with our level of understanding, but that is certainly useful. Add in a feedback loop where the teaching style is optimized for the students acquired knowledge and learning style and you may not have true communication, but the student's mind is being shaped by the teacher and, in turn, the teacher is responsive to those changes. That smells like communication. Many worry that the teacher would promote normative ideas, which is certainly true, but that is a dataset curation and training problem, not one of understanding. Perhaps, returning to the beauty of the paper's author's position, there isn't much difference between training that identifies how language would affect others and understanding. Brian Cantwell Smith suggests as much in his view of judgment being required for general intelligence. We could close the loop by having the machine teach the student how language affects others based on its own experiences.

Finally, a case in point, exploring what happens as the proficiency of language mimicry increases may be the basic science that helps us understand the development of "real" communication.

### Credits
* On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? by Emily M. Bender, Timnit Gebru, Angelina McMillan-Major and Shmargaret Shmitchell. https://dl.acm.org/doi/10.1145/3442188.3445922

---
<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Interlude

Notes:
### Credits <!-- .element: class="attribution" -->
* 
---
<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/an_archeology_of_datasets.webp" data-background-opacity="0.8" -->
# Data Ethics

* The politics of images
* Open data: FAIR
* CARE Indigenous Principles
* Participation without permission
  
Notes:
Data is critical to machine learning, and the act of recording, measuring or capturing data has ethical implications. The first of which is what is deemed data and what is not. I will leave that to you to investigate and instead focus on the ethical challenges specific to types of data, how data is collected, and who benefits from the data. 

First we will go over specific issues with images, as we have already touched on language datasets gather from the Internet. Then we'll discuss two good practices coming from different communities but with similar goals.

My three questions from Tutorial 1, for digital goods and art can apply to data too:


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/three_laptops_on_top_of_each_other_pretending_to_be_a_man_dressed_in_a_trenchcoat.webp" -->

<div class="quote">

1. Who decides what and how data is collected?
2. Who collects, creates and/or curates it?
3. Who gets access to the data that has been collected?

</div>

Notes:
1. Who decides what and how data is collected?
2. Who collects, creates and/or curates it?
3. Who gets access to the data that has been collected?


<!-- .slide: class="panup" data-audio-src="../audio/" data-background-image="../images/transparency_interpretability_explainability.webp" -->
## The politics of images <!-- .element: class="fadeout" -->
https://excavating.ai/ <!-- .element: class="backdrop" -->

Notes:
Kate Crawford and Trevor Paglen have put together a beautiful and effective site called _Excavating AI, an archeology of datasets_. They have been so effective at discovering serious, systemic issues in the datasets they investigated that many of them have been made private or abandoned and others have made significant improvements.

I'd like to highlight some of the points they make:


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/transparency_interpretability_explainability.webp" -->
A photograph of a woman smiling in a bikini is labeled a “slattern, slut, slovenly woman, trollop.” A young man drinking beer is categorized as an “alcoholic, alky, dipsomaniac, boozer, lush, soaker, souse.” A child wearing sunglasses is classified as a “failure, loser, non-starter, unsuccessful person.” You’re looking at the “person” category in a dataset called ImageNet, one of the most widely used training sets for machine learning. <!-- .element: class="quote" -->
_Kate Crawford and Trevor Paglen from "excavating.ai"_ <!-- .element: class="attribution" -->

Notes:
"A photograph of a woman smiling in a bikini is labeled a “slattern, slut, slovenly woman, trollop.” A young man drinking beer is categorized as an “alcoholic, alky, dipsomaniac, boozer, lush, soaker, souse.” A child wearing sunglasses is classified as a “failure, loser, non-starter, unsuccessful person.” You’re looking at the “person” category in a dataset called ImageNet, one of the most widely used training sets for machine learning."

What the heck is going on? Why are the labels so bad and comprised of a list of weird synonyms?


<!-- .slide: data-audio-src="../audio/"  -->
<img data-src="../images/imagenet-interface.jpg">
Notes:
They correctly point out that, "the automated interpretation of images is an inherently social and political project, rather than a purely technical one." The labels came from humans, but it is not enough to just blame it on the humans. These were the labour of Mechanical Turk workers, with a median income of $2 an hour, paid per label, so speed is important. The location of workers is skewed heavily towards the US and India. Even more subtle is that pay may be withheld if the answers are not deemed acceptable, so workers are incentivized to guess what the employer wants or align with other workers by defaulting to broad (but culturally specific) stereotypes. Even more subtle, the interface for ImageNet doesn't show an image and ask the worker to label it, rather workers are given a label and then select all images "that contain the object or depict the concept of". The labels themselves are 1000 selected from another dataset called WordNet which is organized in a specific (very symbolic) way that includes connecting synonyms. There are curious categories of hot lines, hot pants, hot plates, hot pots, hot rods, hot sauce, hot springs, hot toddies, hot tubs, hot-air balloons, hot fudge sauce, and hot water bottles. So the imagenet workers didn't label an image with a long set of synonyms, but the reverse, they "labelled" a set of word synonyms with images. So you see, details matter.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/a_black_box_that_no_one_can_see_inside.webp" -->
What are computers meant to recognize in an image and what is misrecognized or even completely invisible?

Notes:
Crawford and Paglen also ask the important question: "What are computers meant to recognize in an image and what is misrecognized or even completely invisible?"


<!-- .slide: data-audio-src="../audio/"  -->
<img data-src="../images/second-rater.jpg">
Notes:
There is an abundance of politics here if you explore the excavating site.

Importantly, every image that is labelled in this way is removing a connection to more accurate labels for the AI to train on. General categories, such as "woman", with negative sub-category labels ("slut"), then make invisible more neutral or positive sub-labels like "mother".


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Imagenet_face_blur_examples.webp" data-background-size="contain" -->
Notes:
There is another huge unrelated ethical question for ImageNet. The people depicted are from images found publicly on the internet and so contain selfies and personal photos of all kinds. 

The good news is that researchers are working on these issues. Recently ImageNet has removed problematic descriptions in the "person" subtree (removing over half of the images). They also removed non-imageable concepts, such as "philanthropist", and blurred faces in photos where the people were incidental. But problems remain, especially outside the person subtree.

### Credits
* https://excavating.ai/ 
* https://www.vice.com/en/article/88apnv/underpaid-workers-are-being-forced-to-train-biased-ai-on-mechanical-turk
* The Limits of Global Inclusion in AI Development by Alan Chan, Chinasa T. Okolo, Zachary Terner, Angelina Wang : https://arxiv.org/pdf/2102.01265.pdf
* https://www.image-net.org/update-sep-17-2019.php


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/GOFAIR_logo.png" data-background-size="contain" -->
## Open data: FAIR

* Findable
* Accessible
* Interoperable
* Reusable

Notes:
There is a growing, and much needed, push toward open data. This movement has goals and aims similar to other free and open-source movements. It should be noted that these movements subvert the growing power of intellectual property by using the same legislation to compel openness or enforce their rejection of restrictions and secrecy. 

As we discussed in other tutorials the advent of digital technologies means that data is more easily collected, stored, copied and distributed than ever, and this leads to a moral obligation to provide for the benefit of others when the cost is trivial.

In 2016 the FAIR guiding principles were published - intended for scientific data, they are good basic principles for all consequential data:


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/fair-principles.jpg" data-background-size="contain" data-background-color="white" -->

Notes:
* **Findable**: This requires the data to have metadata and be both findable by machine and humans. Put out signposts and a sign on the door that says what's inside.
* **Accessible**: Once found, the mechanism to access the data must be standardized, free and open. Use a standard door (and standard lock for sensitive data).
* **Interoperable**: The data should be designed to easily integrate with applications and other data. Use standard sized paper in standard bins with good labels.
* **Reusable**: Metadata and data should be well described. All the documents should be labelled and noted in the index, there are no missing pieces of the puzzle.

FAIR principles are technically oriented, but are essential to the practical challenge of open data. 

### Credits <!-- .element: class="attribution" -->
* This image was created by [Scriberia](http://www.scriberia.co.uk/) for The Turing Way community and is used under a CC-BY licence.

### Credits
* https://www.go-fair.org/fair-principles/
* https://theodi.org/article/le-guin-and-data-subversions/
* https://the-turing-way.netlify.app/reproducible-research/rdm/rdm-fair.html


<!-- .slide: class="pandown" data-audio-src="../audio/" data-background-image="../images/blood_quantum.webp" -->
## Understanding ethics <!-- .element: class="fadeout" -->
  
Notes:
Once the basic technical requirements of openness are in place we can focus on the ethics of data sharing. Marginalized communities are uniquely placed to understand the systems they operate in. They have often been subject to the contradictions in those systems that have been used against them both ways. In turn, they are able to identify the tensions and contradictions in those systems that can be leveraged to bring about change. An infamous example is the "blood quantum" and "Indian register" practices of the US and Canada, where Indigenous peoples were forced to register with the settler government. Qualifying for the register could depend on their ancestry as well as who they married. Inclusion on the register was used to disenfranchise voting rights and civic participation and exclusion was used to deny land and other treaty rights.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/GIDA_FAIR_CARE.webp" data-background-size="contain" data-background-color="#5eb2b2" -->
Notes:
The Global Indigenous Data Alliance (GIDA) sets out some principles, called CARE, to guide data governance, which I have paraphrased inspired by concepts from [Indigenous feminism](https://en.wikipedia.org/wiki/Indigenous_feminism) and extended to all communities:

* **Collective Benefit**: The data ecosystem design and function should enable the community to benefit from that ecosystem.
* **Authority to Control**: You are responsible to get informed consent from the community for the data representations and the community is invited to take stewardship of that data ecosystem.
* **Responsibility**: Those working with the data have a responsibility to share how the data will be used (and how it collectively benefits the community).
* **Ethics**: The communities rights and wellbeing should be considered at all stages of the data life cycle and across the ecosystem.

### Credits <!-- .element: class="attribution" -->
* https://www.gida-global.org/care


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Suzanne_Kite.webp" data-background-size="contain" -->
## How to Build Anything Ethically <!-- .element: class="fadeout" -->
Notes:
The notion of a data ecosystem and life cycle I think are strong concepts to convey some subtle details. Suzanne Kite's _How to Build Anything Ethically_ article in the 2020 Indigenous Protocol and Artificial Intelligence position paper lays this out beautifully, 

### Credits <!-- .element: class="attribution" -->
* [Image by Kari Noe, 2019](https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Suzanne_Kite_quote_background.webp" data-background-size="contain"  -->
A physical computing device, created in a Good Way, must be designed for the Right to Repair, as well as to recycle, transform, and reuse. The creators of any object are responsible for the effects of its creation, use, and its afterlife, caring for this physical computing device in life and in death. <!-- .element: class="quote" -->
_Suzanne Kite_ <!-- .element: class="attribution" -->

Notes:
"A physical computing device, created in a Good Way, must be designed for the Right to Repair, as well as to recycle, transform, and reuse. The creators of any object are responsible for the effects of its creation, use, and its afterlife, caring for this physical computing device in life and in death."

I would extend similar principles to digital things, but keeping the different inherent properties of being digital in mind. But what is this 'Good Way'? She describes it thusly:

### Credits <!-- .element: class="attribution" -->
* [Image by Kari Noe, 2019](https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/)


<!-- .slide: class="zoomout" data-audio-src="../audio/" data-background-image="../images/How_to_Build_Anything_Ethically-Confuence_of_Protocols-Kari_Noe.jpg" -->
It is necessary to build our technologies, and all things, in a ‘Good Way’, a way which takes into account all beings, animate and inanimate... and to take responsibility for those it affects. Each component individually and jointly must be designed in a Good Way in order for the parts to be combined into an ethical whole. <!-- .element: class="quote" -->
_Suzanne Kite_ <!-- .element: class="attribution" -->

Notes:
"It is necessary to build our technologies, and all things, in a ‘Good Way’, a way which takes into account all beings, animate and inanimate... and to take responsibility for those it affects. Each component individually and jointly must be designed in a Good Way in order for the parts to be combined into an ethical whole."

### Credits <!-- .element: class="attribution" -->
* [Image by Kari Noe, 2019](https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/)


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/How_to_Build_Anything_Ethically-Confuence_of_Protocols-Kari_Noe.jpg" data-background-size="contain" data-background-color="#00549c" -->
Notes:
This notion of taking responsibility for and developing caring relationships to human and nonhuman entities is a foundation of the concept of freedom in Indigenous feminism. Freedom is not hoarded or protected as a result of noninterference, instead it is actively created by taking responsibility and developing relationships.

### Credits <!-- .element: class="attribution" -->
* [Image by Kari Noe, 2019](https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/)

### Credits
* https://www.gida-global.org/care
* https://slideslive.com/38923838/invited-talk-track-3-sacred-waveforms-an-indigenous-perspective-on-the-ethics-of-collecting-and-usage-of-spiritual-data-for-machine-learning
* https://en.wikipedia.org/wiki/Indigenous_feminism


<!-- .slide: class="zoomout" data-audio-src="../audio/" data-background-image="../images/participation.webp" data-background-color="white" data-background-opacity="0.8" -->
## Participation without permission

Notes:
Jenna Burrell uses the phrase "participation without permission" to describe an important aspect of open data ethics.

On the face of it, it sounds like "participation without permission" conflicts with CARE principles. Instead, it is an additional responsibility to allow for participation, and then participants assume the responsibility for the communities they participate in. Marginalized groups have suffered from highly permissioned participation, both explicit and implicit, and often set up in a way to reject them from both mainstream society and recognized minority groups. 

As done in opensource practices, permission can be separated from consent from the community, by making clear and open what sort of participation is considered consensual and by allowing broad private exploration. For example, opensource software projects allow you to use the software for any private purpose and make any changes to the software for your own private use. They also have established public codes of conduct for how to interact positively with the community. Anyone abiding by the codes of conduct can participate without permission.

This isn't to say that this process is easy, error free or without conflict. Nonetheless permissionless participation and informed community consent are not at odds, but require taking of responsibility by all.

These concepts haven't yet been widely adopted in machine learning or data collection practices, but I would urge you to engage with the communities that have a relationship to the data you are collecting, obtain their consent and help to develop established public consent to the collection and use of related data.

# Credits
* https://theodi.org/article/le-guin-and-data-subversions/ 

---
<!-- .slide: data-audio-src="../audio/" data-background-video="../video/Gene Kogan - Why is a Raven Like a Writing Desk HD-8PfiH1DozOI-style_transfer.mp4" -->
# Data appropriation

* Ownership vs authorship
* Intellectual property
* Local Contexts
* Falling in love
  
Notes:
If participation is permissionless, what about issues of cultural appropriation? Is there an equivalent data appropriation? Parag Kumar Mital suggests we need to consider this. Does the requirement for large amounts of data, especially for generative models that create images, sounds or video, models that are adept at mimicry and can be used by anyone, create a problematic appropriation?

### Credits
* http://pkmital.com/home/2021/09/01/ucla-course-on-cultural-appropriation-with-machine-learning/


<!-- .slide: class="zoomout" data-audio-src="../audio/" data-background-image="../images/ownership_vs_authorship_game_of_authors.webp"  -->
## Ownership vs authorship <!-- .element: class="fadeout" -->

Notes:
I think it's important to first be clear that ownership and authorship are not equivalent. I am one of the authors of this work, but I do not claim ownership of it. This becomes important to keep in mind. The two have been deliberately conflated by non-authors who gain the most from ownership who enlist actual authors into promoting ownership.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/acknowledge-authors.webp" data-background-size="contain" data-background-color="white" -->
Notes:
Even more importantly, open source communities have been promoting a broadening of authorship to recognize all contributors. Removing the heroizing of a singular authors is going to be a challenge for the art community, that often turns artists into brands for financial gain. Nonetheless, fair, equitable and inclusive recognition of contribution is essential to the practice of making things in a good way.


<!-- .slide: class="zoomout" data-audio-src="../audio/" data-background-image="../images/a_lightbulb_wearing_a_crown.webp"  -->
## Intellectual property

The phrase 'intellectual property' is, at root, a dangerous euphemism that leads us to all sorts of faulty reasoning about knowledge.
...So the term 'intellectual property,' in that world of monopolies, actually has a very crisp and highly specific commercial meaning: IP is any rule that I can invoke that will allow me to control the conduct of my customers, my critics, and my competitors.
...[The ideology of the Right is] the belief that some of us were born to rule, and some of us were born to be ruled over. [In the case of IP, that] some people have the great ideas and, when their ideas are protected, they’ll make more great ideas.<!-- .element: class="quote" -->
_Cory Doctorow_<!-- .element: class="attribution" -->

Notes:
As Cory Doctorow writes, "the phrase 'intellectual property' is, at root, a dangerous euphemism that leads us to all sorts of faulty reasoning about knowledge." IP, copyright, and patents are terms that define state granted monopolies. "So the term 'intellectual property,' in that world of monopolies, actually has a very crisp and highly specific commercial meaning: IP is any rule that I can invoke that will allow me to control the conduct of my customers, my critics, and my competitors." This power is enmeshed with his description of the ideology of the Right - "the belief that some of us were born to rule, and some of us were born to be ruled over." In the case of IP, that only "some people have the great ideas and, when their ideas are protected, they’ll make more great ideas." 

### Credits
* https://freesouls.cc/essays/05-cory-doctorow-you-cant-own-knowledge.html
* https://jacobinmag.com/2021/05/cory-doctorow-interview-bill-gates-intellectual-property


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/a_lightbulb_wearing_a_crown.webp"  data-background-size="contain" data-background-color="#281c04" -->
Notes:
This sort of ownership thinking contradicts participation without permission, even though the benefactors of monopoly might insist that anyone can have great ideas, it ignores the result that control of an idea creates the mechanisms to control related ideas.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/Local_Contexts.webp" data-background-size="contain" -->
Notes:
So let us reject appropriation related to ownership and intellectual property and instead look at it from other contexts. The Local Contexts project founded by Jane Anderson and Kim Christen in 2010, aims to enhance and legitimize frameworks for culturally appropriate access to cultural heritage and Indigenous data. They provide a system of labels, tested within different Indigenous communities, that express local and specific conditions for participating in relationships with communities and their data. These labels are intended as templates to be customized by each community.

This sort of labelling invites responsibility, and helps clarify what responsibilities are required, and promotes participation without permission by defining what has already been given consent. 

Let's look at a few of these labels to see what sort of issues they address. I'll let you read them for yourself, press the right arrow to continue when ready. 

# Credits
* https://localcontexts.org/


<!-- .slide: data-background-color="rgb(250,247,247)" -->
<img data-src="../images/tk_label_clan.png">

### TK Clan
This Label should be used when you would like external users to know that this material is subject to conditions for circulation relating to clan membership and/or is according to protocols for clan relationships. Because these conditions have not historically been recognized, this Label helps make these conditions for use and circulation clearer. Specifically, the Label asks future users to respect culturally specific rules of use and to make informed decisions about using this type of material. <!-- .element: class="small left" -->


<!-- .slide: data-background-color="rgb(250,247,247)" -->
<img data-src="../images/tk_label_v.png">

### TK Verified (TK V)
This Label should be used when you and your community are satisfied with the way in which your traditional knowledge materials are being represented online or offline. This Label affirms that appropriate conditions for access and use are in place and that whoever has made this material accessible has made accommodations for cultural protocols associated with the knowledge. It lets users know that the right thing is being done by your community protocols and standards. <!-- .element: class="small left" -->


<!-- .slide: data-background-color="rgb(250,247,247)" -->
<img data-src="../images/tk_label_ss.png">

### TK Secret / Sacred
This Label should be used when you want to let external users know that the material that is openly circulating contains secret/sacred information and that it has specific conditions of access and use. These conditions potentially include restrictions upon access. Using this Label helps to alert external users that this material is special and requires respectful and careful treatment. It asks users to make different decisions about using it and, importantly, to discuss any potential use with you. <!-- .element: class="small" -->


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
Notes:
The Local Contexts project acknowledges existing cultural contexts around the sharing of information. As such it provides for secret or sacred knowledge as well as gender restricted knowledge. 

Here we can see a clear tension between open data and existing cultural practices. Is there a reasonable distinction between intellectual property and other limits to information sharing? How can you offer participation with specific exclusions? I don't have easy answers to this, but encourage an exploration rooted in principles of relational ethics and responsibility.


<!-- .slide: data-audio-src="../audio/" data-background-image="../images/TODO" data-background-video="../video/" -->
## Falling in love

Notes:
Like Parag Mital, I would urge you to think carefully about tools that use data you didn't produce to generate public representations of that data. Heck, I'd be extra careful with data you did produce because of potentially misguided feelings of ownership of that data.

Part of the beauty of machine learning art is a sense of diverse contribution and being a guide to the world, rather than having perfect control. So too control over data may be a false goal, instead I would ask you to fall in love with data, get to know it and celebrate and respect where it comes from. Build a responsible relationship with it and the human and nonhuman communities it is a part of. 

If we were to outlaw falling in love under the guise of inappropriate cultural appropriation we would be supporting a regime where cultural purity trumps diversity and inclusion.

Instead let's create greater freedoms together based on establishing strong relationships, responsibility and consent to best achieve participation without permission.
---
<!-- .slide: data-audio-src="../audio/ppf/43.ogg" data-background-image="../images/Five_Directions_dark.webp" data-background-opacity="0.9" data-audio-advance="800" -->
# Thank you

1. **Foundations** <!-- .element: class="low-vis" -->
2. **Past, Present, Future** <!-- .element: class="low-vis" -->
3. **Neural Nets**
4. ***Data in Practice***
5. Machine Learning Art <!-- .element: class="low-vis" -->
   
Notes:
Well, that's the end of the third tutorial. Thank you for your attention. I hope you'll check out the next in the series; Data in Practice, where we'll take a practical look at finding, cleaning and curating training data for your art projects.

See you there!

