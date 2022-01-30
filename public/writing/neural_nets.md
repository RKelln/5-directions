# Neural Nets and Data

* Neural networks
  * Perceptrons
  * Components of a network
    * Data
    * Model
    * Training
      * Backpropigation
  * Types of learning algorithms
    * Unsupervised
    * Supervised
    * Reinforcement
  * Recurrent networks
  * Convolutional networks
  * GANs
  * Features and latent spaces
* Deep learning challenges
* Data ethics
* Data appropriation

---

We'll start this tutorial with a look at the neuronal model that get things started, the Perceptron, from 1960. Then we'll go in depth into the components of modern deep learning neural nets.

The three basic components include the training data, the network, called a model, and the training procedure. The model and training each have important details we'll discuss but we'll leave details on the data until next tutorial. Then we'll talk about the 3 types of learning that can be done during training.

We'll go over some commonly used and important types of networks, the recurrent network that has looped connections and convolutional networks that are commonly used for image processing. Well also discuss more details about features in data and the concept of latent spaces.

Then we'll take a good look at the current challenges with deep learning techniques and what is being done to address them.

Finally, we'll discuss ethics around data collection and the concept of appropriation and if it applies to training data.

---

# Perceptron

In 1960, Frank Rosenblatt created the Mark 1 Perceptron by implementing McCulloch and Pitts Hebbian learning model in a custom-built electronic machine that used 400 photocells, variable resistors (like dimmable light switches) and electric motors to the knobs on the resistors. Software was too slow at the time. It was designed for image recognition and the photocells were randomly connected to the neurons.

We can see here the basic parts of all neural networks:

1. input layer
2. neurons with connections
   * weights
   * bias
   * activation function
3. output layer


Each artificial McCulloch-Pitts neuron is connected to every input with a weight, where positive weight represents excitatory connection and negative weight an inhibitory one. Each neuron has a threshold or activation function which controls when it will fire. Firing means sending output of 1, not firing sends 0. 

TODO: what is a function?

If the threshold is one, then any input sending a 1 will cause it to fire, and the neuron acts as an OR gate; if the threshold is equal to the number of inputs, then all of them must end 1 and it as an AND gate. A neuron can prevent another from switching on, which models both inhibitory synapses and NOT gates. If you remember Boolean logic, the combination of these three allows for a Universal Turing Machine - a general purpose computer.

What's missing from the McCulloch-Pitts model is learning. The Perceptron was capable of learning by adjust the weights and biases. The connection weights between the inputs and neurons control how much a neuron listens to the input or how much that input contributes to crossing the firing threshold. The bias determines how easily a neuron will fire, shifting the threshold higher or lower, in the Perceptron the bias was set to 1, so we will ignore it for now.

The Preceptron was designed for image recognition, so imagine it was shown a tiny greyscale 20x20 picture of you and each pixel in the image is an input and the output is either true (1) or false (0). Each pixel input value will be 0 (black) to 1 (white) with 0.5 being grey. The weights are initially random and the first time you show it an image the output is thus random too. 

One simple, but very slow way to train the perceptron would be to choose a random set of training images and record the outputs (whether or not the image is of you). Then pick a single weight and adjust it up or down, then test the same set of images and if the outputs improve keep the change, if it is worse, then reverse or reset the change. With enough iterations the weights will make the inputs that most distinctly represent your image the strongest and lower the weights on every other input accordingly.

Another interesting aspect of the perceptron is that the activation function is non-linear. A linear output might add or multiply the inputs, but having a threshold transforms the inputs in an important way that allows for the necessary boolean logic. 

The Perceptron was initially promising, but failed to recognize many classes of patterns. In fact it could only do linear classification. Imagine it was being trained to tell cats from dogs based on two measurements: size and domestication. (This is a silly example, but it is easier to see when plotting only 2 dimensions, the principles hold for any number of variables its just impossible to visualize high dimensional spaces.) 

Mathematically what a perceptron is trying to do is find a linear (straight line) boundary that perfectly separates the examples based on the two variables. There may be many straight lines that separate the training data, but don't separate, i.e. classify, new data that it never trained on. The training data may not have a linear separation at all, making the perceptron unstable. Later developments helped deal with this issue, but the biggest problem was that the perceptron could not model XOR boolean logic.

TODO: example of convex boundary not possible

It was determined that a multi-layer perceptron could do this, where instead of one layer of neurons you added additional layers where each layer was fully connected to the next layer, but no one could figure out how to update the weights by flowing the error through multiple layers. These additional layers were called hidden layers.

### Credits
* The Master Algorithm by Pedro Domingos 
* https://en.wikipedia.org/wiki/Perceptron
* https://en.wikipedia.org/wiki/Feedforward_neural_network#Single-layer_perceptron
* 
---

### The components of a neural net

* Data
* Model
* Training

Notes:
There are three main components to neural net based machine learning: data, model and training. The data or dataset is used to train the network, or model. Once a model has been trained, a slow process taking hours or even weeks, then it can be used on new data, which is called inference. Inference times can be measured in milliseconds or in some cases minutes to hours.

---

Data

Notes:
The data used for a model is the only thing the network can use to be effective at its goal. The hope is that eventually the network will learn to generalize from this data such that when it is given new data that it has never seen before it will be as effective is it is with training data.



Data set splits:
* Training
* Validation
* Test

To examine how effective the network is at generalization you can partition or split the data you collect into three groups: training, validation and test. 

Training data is used in the training process and seen many times by the network. This is the data used to generate errors and learn from. 

Validation data is used during training but only to check on how well the model handles data it hasn't seen before, the weights are never updated in response to the validation data. Instead, this check is mainly used to know when to stop training - when the performance on the training data is good and the performance on the validation data is good. It is entirely possible for the performance on these to be very different.

Test data is used after the model is finished training to give it another set of data it has never been trained on and never been checked whether it generalizes well to. This is to get a rough idea of performance of the model "in the wild" on data that you didn't collect and this is the data used when researchers report their findings in papers. When models are used for art, splitting the data may be less important, as often the output will have to be manually visually inspected by the artist since the performance is subjective and holding out data for validation and testing can make already small datasets even smaller.

We'll go into practical details on collect, cleaning and curating datasets in the next tutorial.

---

# Model

Notes:
As in the Perceptron, neural networks are described by a model made of layers of neurons with connections, with an input layer and an output layer. The interior layers between input and output are sometimes referred to as "hidden layers" inside the "black box" of the perceptron. The construction of the model is done using traditional software programming. The design of model is often the area of research being investigated to see what structure and flows of information between the input and output gets closest to the goals of the researchers.

In deep learning there are many layers. These are sometimes called Multilayer Perceptrons or MLPs. Part of the engineering of the network consists of choosing how many layers, how many neurons per layer and how the neurons are connected. Layers can be full-connected, where each neuron has a connection to every neuron in the next layer, or sparsely connected.

The number of layers is referred to as depth and the amount of neurons is referred to as width. These parameters affect the representation capacity of the network. Essentially, the deeper and wider a network is the more information it can store or represent. However, depth and width incur costs - slower training, slower inference, etc. Matching the complexity and amount of information in the input to the capacity of the model is done as an art and science, through intuition, copying from related projects and extensive experimentation. There also exist tools to help automate the search.

For example, models dealing with images tend to work well with 10 or so layers, and this could be that images contain hierarchical features (a person has a head, a head has a face, a face has a nose, all the way down to vertical line detection) and each layer specializes on level of hierarchical representation.

A model basically describes a set of weights. One way of thinking about training is encoding a representation of the training data into the weights. There are many more input values than weight values so this is a form of lossy data compression. Information that is extraneous will be lost but a model with the right capacity will be able to store or keep all of the important information.

---

# Training

Notes:
Neural nets process information from input to output. This is called forward propagation. They learn however from backpropagation or backprop, where the error determined at the output (by a mathematical function that computes the loss, or the difference between the output and the desired output) is sent backwards through the connections and an optimizer function uses the error to update the weights of the connections. Instead of doing one weight at a time much more efficient backpropagation algorithms have been created that work for any size network.

So training requires forward and backwards passes, an evaluation function and an optimizer function. The evaluation function is used on the output to calculate what is called loss, cost, reward, or fitness depending on the type of model. Regardless of name it is a signal used by the optimizer function to update the weights and biases of each layer. 

The optimizer function combines a learning rate which controls how much the weights are adjusted and thus how quickly the model can learn with the evaluation function result. At first it would seem like the highest learning rate would be a good idea, however large adjustments can overshoot the most effective weight. 

You'll hear researchers talk about stochastic gradient descent (SGD) the de facto stand algorithm used in training. A simple version of this algorithm is used in nature too. Many small organisms use gradient ascent to follow concetration gradients of the molecules around them, swimming towards higher local concentration of food and away from poison. 



<!-- .slide: data-background-image: "Extrema_example.svg" -->
TODO: add axis labels
Notes:
In this curve on a single neural value and it's error. Our goal is to adjust the weight to get the lowest error. You can see that the "landscape" has hills and valleys, peaks and troughs. Starting from a random weight we can use gradient descent to find the lowest error by taking small steps and seeing if the error is lower or greater. It's possible however to get trapped in a local minima if the weight adjust you make which determines the distance on the curve you travel is small and in both directions the error increases.

So large adjustments (i.e. higher learning rates) can avoid local minima, but they can also jump over minima bouncing back and forth on higher error parts of the curve. Most gradient descent algorithms include a learning rate that starts out higher and gets smaller over time. The hope is to find the lowest general part of the curve and then more slowly make your way to the very bottom.

Nueral nets have thousands of neurons so rather than a 1d curve or 3d landscape gradient descent acts on a hyperspace. This typically has highly convoluted surfaces and countless local optima. However, you need to be stuck in every dimension to be in a true local optima, which is far more rare and these local optima generally turn out to have equivalent amounts of error even if they reside in very different parts of the hyperspace. Many different solutions are roughly equally wrong in high dimensional space, thus two networks with random starting conditions can find very different weights that have very similar error rates. So too our brains have very different connections (i.e. weights), but similar structure (i.e. model) and get the same score on a math test.

TODO:  diagram step too large
TODO: diagram step too small
TODO: diagram convoluted

### Credits 
* The Master Algorithm



Underfitting and overfitting

Notes: 
When a model doesn't have the capacity to capture the underlying structure of the data it is said to be underfitted. 
Overfitting can happen when there is too much capacity, although empircal tests have shown that deep learning models even with massive capacity, if continued to train, can sometimes improve after a period of overfitting. Overfitting can be described as memorization of the training data rather than effective generalization. Instead of compressing the data into a smaller accurate representaton, the model just stores the correct answer for every training data point. So for example, instead of recognizing the class of animal, dog vs cat, the model will only know if each training data image is a cat or dog, given an image it has never seen before it is unsure.

Described visually you can see the issue results from describing the boundary between classes with curves  that are have high amplitude patterns rather than smoother, lower amplitude patterns. The more extreme the curvature, even if it has no error for the training data will generally have higher error for data it hasn't seen yet. 

There are many techniques that can be used to combat this, a common one being the use of validation data and stopping the training once the validation error gets to its lowest point and then starts to increase (while training data will continue to decrease). Other techniques try to prevent memorization of the training data by altering the training data or temporarily disabling part of the model.  

This last idea, called dropout, is illustrative of the power of simplicity. During training random neurons are temporarily disabled, which causes two effects: the network starts to learn alternate ways to represent the data, for example, increasingly using whiskers to classify cats. Using multiple strategies is called ensemble learning and is shown to be very effective. Similarly, training can cause networks to overly rely on a single feature that is a good enough predictor unless forced to consider other options. For example, early experiments with image classification were easily fooled by adding subtle (undetectable by humans) but carefully crafted noise to the image. When researchers investigated they found that texture was the mot important attribute being used to make the predictions, but they could force more robust learning but adding silhouettes, line drawings, noise, clipping and partial masking of the image and other transformations to the training data to expand the range of characteristics that led to a classification. This data augmentation is critical now in image-based training.

### Credits
* https://en.wikipedia.org/wiki/Overfitting



Hyperparameters

Notes:
Training iterations, one full cycle through the training data, are called epochs. Epochs, learning rate, and the initial weights of the network are all called hyperparameters. Variables that need to be adjusted that affect the results of the training. There is no way to know for sure what the best hyperparameters are at the start of training, and while there are tools that can automate the search, it is mostly experimental trial and error.

---

# Learning Algorithms

* Construct
* Initialize
* Feed data forward through network
* Compare predicted value with expected value and calculate loss
* Propagate loss back through network
* Update parameters based on loss and optimizer
* Repeat until loss is minimized

Notes:
So to review, the learning algorithm for neural nets looks like:
* Construct the model and datasets.
* Initialize the model.
* Feed training data forward through network.
* Compare predicted value with expected value and calculate the difference.
* Propagate the difference back through network.
* Update parameters based on difference, optimizer and learning rate
* Repeat until the difference is minimized

It is also important to note the training order matters. Similar to human babies, many models benefit from simpler or lower resolution training examples first. 

Models also suffer from some amount of forgetting, so it is currently hard to train on more than one task without significant model architecture changes. Multi-task and multi-modal models are being heavily researched but are still quite basic.

### Credits
* https://www.youtube.com/watch?v=A2ozujt3vdE

---

# Learning

* Unsupervised / self-supervised
* Supervised
* Reinforcement

TOOD: Task-guidance.png

Notes:
The type of dataset you have determines the type of learning you can do.

Unsupervised or self-supervised learning can use most types of data. Supervised learning requires the data to annotated by humans (or an unsupervised process). For example, images used for classification need to be first classified by humans, so cats are labelled as cats. This labelling work is often crowd-sourced, as in the case of the labelled image dataset ImageNet.

Reinforcement learning is most associated with robotics and games where there is an interactive environment, where there is a reward signal such as a high score or victory condition in a game. 



TODO: cake image
Yann LeCun has described the relationship between the three as a cake: unsupervised learning is the cake, supervised is the icing and reinforcement is the cherry on top. Consider the amount of data in the training samples - unsupervised data may have millions of bits per sample (the entire image), supervised has 10-10000 bits (the label), and reinforcement as a few bits (you won or lost, gained a point or lost a point). The more bits of data the more the model can learn from each sample.

### Credits
* https://www.youtube.com/watch?v=VsnQf7exv5I



Unsupervised learning

Notes:
Unsupervised learning is an algorithm that learns patterns from untagged or unlabelled data. The net learns to mimic the data it is trained on. The power of unsupervised learning is that you can predict any part of the input given a smaller observed part. In other words the network becomes generative. For example, in image inpainting you can block out part of the image and the network can fill in the missing part. 
TODO: image of GLIDE / projected GANs in painting

The main problem with unsupervised learning is the poential mismatch with human goals or definitions. Humans don't know the correct output, so it becomes harder to create an evaluation function that can send a clear signal to backpropagate. Unsupervised training can categorize images but the categories aren't defined by humans, instead emerging from the data. This can be an extremely useful process of discovery and developing new perspectives. 

Thus, unsupervised learning is used in clustering or grouping data and to find all manner of patterns, partitions, relationships or hierarchies. It can detect anomalies in data. It can be used to find the important features in the data that are then used for training another net.

An example of unsupervised learning in art is the Self-Organized Map (SOM).

### Credits
* https://en.wikipedia.org/wiki/Unsupervised_learning



Supervised learning

Notes:
Supervised learning generally requires training pairs of input and outputs, an image of a cat and the cat label, and the net will learn to predict the label when given just an image. Thus training data needs labels or other information that is used in the evaluation function to check the correctness of the output. Generally this learning is used for discrimination or recognition.

Supervised learning is also used for regression algorithms that discover the relationship between a target variable and several others. For example house or stock prices or temperatures.

There also exists semi-supervised learning where only some of the data is labelled.

### Credits
* https://en.wikipedia.org/wiki/Supervised_learning



Reinforcement learning

Notes:
This style of learning is used in agents interacting with an environment, either virtual (like a video game) or physical. Importantly the agents actions affect its environment and the agent is trying to maximize a cumulative reward. It does not require labelled training data but must have ways of exploring the environment and possible actions and balancing exploration with other goals.

---

# Recurrent networks

Notes:
Typical feed-forward networks take one input and give one output that is wholly dependent on that input. What happens if you have a series of data points or data points tied to specific times (i.e a time-series)? This data may depend on previous data and that dependency may be separated by a long period of time. Language is a typical example where words refer back to one another. Music is another common example.

Recurrent networks or RNNs add loop or feedback connections to themselves or other neurons allowing information to be retained between inputs. Simple loops allow for an effective short-term memory. Standard RNNs have training problems when using gradient descent.

More complicated loops add learnable forgetting so that neurons can learn to retain information for different amounts of time, which then allows for much longer recall of information. One technique is called Long short-term memory or LSTM. A common LSTM has a cell, input gate, output gate and a forget gate. It can remember values over arbitrary time intervals because the gates regulate the flow of information in and out of the cell. 

### Credits
* https://en.wikipedia.org/wiki/Long_short-term_memory

---

# Convolutional neural nets

Notes:
The final type of network we will address in the convolutional neural net, CNN or ConvNet, which is inspired by human vision neural circuitry and heavily used for visual imagery.  It is often used in computer vision, image recognition, image generation, and image segmentation (finding the objects in an image). 

Individual cortical neurons only respond to stimuli in a small region of the visual field and the fields of different neurons partially overlap. CNNs use the same strategy. In a CNN each neuron receives input from a restricted area of the previous layer. Typically, for grid-based data like pixel images this is a square area, often 3x3, 5x5 or 7x7. In contrast, in a full-connected layer the input is from every neuron in the previous layer. Layering multiple convolutional layers means then that each neuron takes input from a larger area in the input than the previous layer.

Images have a lot of data to process if each channel (red, green, blue) of each pixel is represented by a neuron. A 1000x1000 RGB image has 3 million weights, making it difficult to process in fully connected networks. A CNN converts overwhelming pixel image data into a managable feature map, also called an activation map. This operation extracts features such as edges, colors, and gradient orientation from the pixel data. 

ConvNets learn "filters" also called "kernels" that process the entire input. These filters are a set of weights and a bias and are shared between all neurons on that layer. The filter is applied to the receptive field of each neuron.

TODO: kernel example image, convolution animation

Once features are computed by the filters then they are passed to a typical fully connected network for classification or other processing.

CNNs provide a good opportunity to demonstrate some important properties of neural nets. We know that theoretically neural nets are universal approximators - able to approximate a broad class of functions - including that of finding features in images. This flexibility has a downside, because the universe of functions is so large there are (again, theoretically) many functions that would do well on the training data but not on test or real world data - i.e. we may fail to generalize. So we actually want to restrict the search for these functions to a smaller set that still contains the solution, but ruling out many bad solutions that in the context of the training data look similar. The better we can do that the less training data we need. CNNs are an example of that, by the way they are constructed they encode some prior knowledge of the data. In this case, that an image that is translated (i.e. pixel shifted) is an image of the same thing (assuming the thing doesn't shift out of view), the features that they detect remain stable, which is called equivariance. However, typical CNNs do not have the same properties for rotation, scale, shear, or other transformations, and approaches that allow for stable features despite these transformations tend to improve performance.

### Credits
* https://en.wikipedia.org/wiki/Convolutional_neural_network
* https://en.wikipedia.org/wiki/Kernel_(image_processing)
* https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53
* https://fabianfuchsml.github.io/equivariance1of2/

--- 

# GANs

TODO:

---

# Features

Notes:
Let's talk a bit more about features. Features are distinct properties of characteristics of a phenomenon and useful features are independent, informative and discriminative. Features can exist at different levels of abstraction. In a hand writing recognition system simple features could be lines and loops, number internal holes, height and width; one level later could be letters; then words. 

In earlier machine learning practice features were determined by hand, but modern techniques prefer to learn the features from the raw data, for example using a system of convolutions on images to extract features before giving those to a net to do image recognition. Here is an example of he relationship between image features:

TODO: https://distill.pub/2017/feature-visualization/ 

Sets of extracted features can be compared. A facial recognition system might compare the features of photo of your face to a new photo to identify you in it.

The entire set of features learned after training is called a latent space. Each point in the space represents a different set of feature values and points closer together are more similar. Generative models commonly used by artists can create animations of the images at each point while moving through the latent space. Part of the art and fun of generative models is exploring and then moving through it in a performative way.

### Credits
* https://en.wikipedia.org/wiki/Feature_(machine_learning)

---

Interlude - Hans or Sound Escapes

---

# Deep learning challenges

* Large datasets
* Eco-footprint
* Large amounts of input data
* Long tail data
* Explainability
* Rigid models
* Simple neurons
* No composition or reasoning
* Understanding



Large datasets

Notes:
The biggest drawback, especially for artists, of deep learning is that the performance of the neural net is highly dependent on large datasets. The internet has made constructing large datasets possible. 

It is estimated that the human eye transmits roughly 10 million (10^6) bits per second. At roughly 2 * 10^7 seconds of wakeful vision each year, That's roughly 10^14 bits by the time we are 5 years old. Popular image datasets have approximately a million images at around 150 Gb compressed or 2 * 10^12 bits uncompressed. That's about 50 times less than a 5 year old. 

The most successful large language models use the MassiveText dataset taken from the web, books from 1500-2008, news, software code from github, and wikipedia with a total size of 10.55 TB (8.4 * 10^13 bits). (All of Wikipedia is just 0.001 TB.)

Gigantic datasets cannot be easily curated leading to a host of problems: toxic language, incorrectly labelled images, and generally low quality data that lowers the model's usefulness. Data gathered from the public Internet has many more problems: a lack of diversity and over-representation of certain viewpoints. Particularly, younger and WEIRD (Western, educated, industrialized, rich and democratic). Existing over-representation of content creation amongst the young WEIRD group stand out as well: white, male, and heterosexual. Those most comfortable to speak publicly or use publishing tools (like Wikipedia and Reddit) that are the easiest to include in the dataset. 

A small dataset for image generators is on the scale of 1000 or so images, although I have successful used 500 or less images if the results don't have to be photorealistic.

Humans can often learn from a few examples once they have a basic understanding of the world. Machine learning techniques try to replicate this by using pre-trained models for vision in image processing or fine-tuning on large language models to a specific domain of knowledge.

Other research tackles one-shot, few-shot learning and even zero-shot learning. One-shot learning tries to learn from a single example. For example, a model trained to recognize animals then trained on a single labelled image of a zebra should be then able to classify most images of zebras. Few-shot allows a few more examples. Zero-shot only requires auxillary information, for example the animal recognition model told that zebras are "horses with stripes" and able to use that to classify images of zebras. 

Lowering the amount of data need for training is a top priority for many researchers, especially as collecting datasets when you aren't one of the giant tech companies is very expensive. 

### Credits
* https://en.wikipedia.org/wiki/One-shot_learning
* https://en.wikipedia.org/wiki/Zero-shot_learning
* https://dl.acm.org/doi/10.1145/3442188.3445922



Eco-footprint

Notes:
On a practical level, the requirement of large datasets and many examples for effective learning means that the amount of computation needed for training is significant. Fortunately, the computation for inference or use of a fully trained model is much less. However, in the lifetime of a model, it spends most of its compute time (80-90%) in inference, so gains here are very important. Also note, that it is estimated that 80-90% of ML projects never reach a state of use, remaining failed experiments.

The largest models being trained currently are language models, with costs estimated up to $100 million just for the infrastructure, have training carbon emissions equivalent to 3 jet plane round trips across North America.

Large cloud datacenter providers are working towards carbon-free energy 24/7 and new hardware is more efficient, so there is hope even if the total amount of ML computation continues to increases exponentially. The doubling time since 2012 has been approximately every 3.5 months, so every month sooner carbon-free compute can be delivered is important.

### Credits
* https://devblogs.microsoft.com/sustainable-software/the-carbon-footprint-of-ai/
* https://openai.com/blog/ai-and-compute/
* https://arxiv.org/abs/2104.10350



Large amounts of input data

Notes:
Deep learning currently has a problem with large inputs. The best example is high resolution images which is improving quickly, and video (at 30 high resolution images per second) which still doesn't have any solution. Large inputs require many neurons, all of which need to fit into the memory of a graphics card - and a single consumer level graphics card for most independent artists.

For the next few years expect to work around resolution limits on images and definitely on video.



Long tail data

Notes:
This problem is more subtle but probably one of the most important to understand conceptually. If you look at the distribution of data in the real world you often see a shape like this:
TODO: image of long tail

There is a lot of data for a small number of cases, there is sometimes a hump of data for a set of common cases, then there is a "long tail" of situations where there is very little data. Those situations are rare, but in the real world, at scale those situations come up.

A famous example is Tesla's self-driving failure case where the car drove underneath a white 18-wheel truck  and trailer crossing in front of it on the highway. The white truck blended into the bright spring sky. A tiny fraction of time spent driving involves hard to see semi-trucks perpendicular to your path but the rare cases include everything.

These rare cases are difficult for neural networks. They are unlikely to be in the training data and even if they are, they may only be represented once (or at their actual rarity) which wouldn't be enough for the net to learn from them.

# Credits
* https://www.theguardian.com/technology/2016/jun/30/tesla-autopilot-death-self-driving-car-elon-musk



Explainability

Notes:
Explainable AI is the opposite of a "black box", rather the results and the process of getting to the results can be understood by humans. Explainable AI still doesn't have clear, universal definitions but roughly follows three principles:
* transparency
* interpretability
* explainability
Transparency refers to full descriptions the datasets, model and training procedure, including the motivations of the designers. For me this would also require open source models and full access to the dataset used, but obviously corporations generally think of this in more limited ways.
Interpretability describes the possibility to predict what will happen given a change input.
Explainability goes one step further, describing the comprehension of why the decision was made and how each feature of the model has contributed. 

Explainable AI is critically important when ML is used for decision-making or prediction in consequential situations like healthcare, autonomous vehicles, etc. Issues around trust, determination of causality, reliability, fairness, and privacy are dependent on explainability.

Deep learning has difficult challenges dealing with this issue. Models are narrow intelligences, being able to explain themselves to humans would require something much closer to general intelligence and at minimum both an ability to understand its own thinking and then translate into language a human can understand. Considering how poorly humans fair at both of those tasks you can see the scope of this challenge. However, I would say that part of the joy of making art is exactly tackling this challenge. Explainable AI as the process of making AI artists - maybe Kogan's dream of the autonomous artist is the future of explainability.

One thing the machines have going for them is much more transparency and easier testing. Researchers have already done good work on areas like highlighting the part of an image a neuron most strongly responds too. So while ML may not be able to explain itself well to us on its own, it may be enough that we can inspect its mind when we cannot interpret its actions intuitively.

TODO: https://openai.com/blog/multimodal-neurons/
TODO: https://microscope.openai.com/models

### Credits
* https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
* https://www.kdnuggets.com/2018/12/machine-learning-explainability-interpretability-ai.html 



Rigid models

Notes:
Another subtle, but I think important to understand limitation of current models is their "rigidity". The structure of the model is engineered or constructed rather than learned. Structure is fixed, not modular and engineered through trial and error instead of learned from data. Principly this means that any sharing or reuse of computation is rigid or fixed, rather than adapting to the nature of the input. This rigidity makes it hard to adapt to longtail data and multi-task learning and is catastrophic to performance if the real data distribution shifts, for example a pandemic dramatically changes hospitalization rates. Too soon?

Researches are currently developing techniques, such as one called "neural interpreters" are trying to change this, so that there are composable modules of computation and inputs are routed through a sequence of them. Functions and function sequence composition can both be learned. Essentially this is pushing the lessons learned from trying and failing to engineer features by hand up another level of abstraction, to change the current practice of engineering models by hand. 

Another way to think of this is in relation to our brains. We have a genetic code that encodes not how every neuron in the brain is connected but how to build neurons and structures of neurons which then start modifying their connections as the process of learning. Current models don't have an equivalent of a genetic code or evolution, although you could view the process of ML science as that I suppose.

### Credits
* https://arxiv.org/abs/2110.06399



Simple neurons

Notes:
Similarly, concerns have been raised that artificial neurons are too simple compared to actual neurons. Neurons are cells with many different parts and complex internal processes. Real neurons have firing rates rather than continuous values at discrete time steps and the firing is determined by a non-linearity

We know that our brains are much more robust and flexible in terms of perturbation or environment, that they  can very quickly adjust by interacting with the environment. My favourite example of this are these glasses that shift the location of your gaze. You put them on and reach out to touch a point in space and end up 10cm off. However, play 30 seconds of whack-a-mole with them on and your brain adapts and you can now reliably touch that offset point. Take the glasses off and you miss the mark once again until you re-adapt.

TODO: video or image of prism glasses

This ability to adapt without retraining is explored in techniques like Liquid Neural Nets that look deeply into real neuronal computation. Researchers even explored down to the level of atoms, which they determined to be unnecessary. They have found useful abstractions that improves sequence modelling and is robust to noise and other perturbations.

Neural nets also lack neuromodulators - neurons can release chemicals that diffuse over larger areas of the brain and regulate the firing of the neurons in the area for hundreds of milliseconds to several minutes. Neuromodulators include dopamine, serotonin, and norepinephrine. 

Whether any of these differences make a difference to learning is a subject of fierce debate. Obviously ML has succeeded to human or super human levels in narrow tasks, but it is an open question whether there is some critical aspect required for general intelligence. More robust and performant ML systems are certainly possible and current neural net models may just be a stepping stone.

### Credits
* https://cbmm.mit.edu/video/liquid-neural-networks
* https://en.wikipedia.org/wiki/Neuromodulation 



No common sense or reasoning

Notes:
The symbolic AI camp continues to point out that neural nets have no common sense or reasoning, where reasoning is defined by a manipulation and composition of symbols and/or logic. 

Pedro Domingos in The Master Algorithm puts it this way:
"Take commonsense reasoning. It involves combining pieces of information that may have never been seen together before. Did Mary eat a shoe for lunch? No, because Mary is a person, people only eat edible things, and shoes are not edible. Symbolic systems have no trouble with this—they just chain the relevant rules—but multilayer perceptrons can’t do it; once they’re done learning, they just compute the same fixed function over and over again. Neural networks are not compositional, and compositionality is a big part of human cognition. Another big issue is that humans—and symbolic models like sets of rules and decision trees—can explain their reasoning, while neural networks are big piles of numbers that no one can understand."

Brian Cantwell-Smith has a wonderful rebuttal, "AI systems need to be able to deal with reality as it actually is, not with the way that we think it is — not with the way that our thoughts or language represent it as being". He continues, "taking the world to consist of discrete intelligible mesoscale objects is an
achievement of intelligence, not a premise on top of which intelligence runs." This acheivement, which he calls registration, is an active process. "Registration schemes necessarily impose non-innocent idealizations — inscribe boundaries, establish identities, privilege some regularities over others, ignore details, and in general impose idealizations and do an inevitable amount of violence to the sustaining underlying richness. This process of stewardship and accountability for registration, never imagined in the \[symbolist\] project, is of the essence of intelligence."

Nonetheless, current neural nets are terrible at reasoning, but exploring how to make them more modular, composable and robust leads in the direction of allowing them to build their own registrations, not just in the training process, but on the fly in response to input. The composition of modules in turn could be viewed in a symbolic framing and the communication of the logic of the modules and how they can / are composed to be an attempt at explainability.

### Credits
* https://dl.acm.org/doi/10.1145/3442188.3445922
* The Master Algorithm by Pedro Domingos 
* The Promise of Artificial Intelligence: Reckoning and Judgment by Brian Cantwell-Smith pg 34-36



No understanding

Notes:
In a famous paper entitled, "On the Dangers of Stochastic Parrots" the authors make the assumption that deep learning will never understand language. The generated text can be seemingly coherent, but this is in the eye of the beholder, and we know how much humans love to have a coherent model of the world. Because the machine never models our mental state it isn't communicating, instead it is using statistical models to parrot language that only appears to be relevant because it was relevant in recordings of real communication it was trained on. Communication, as they see it, is constructed from mutual interpretation of the actual thoughts and intent of the communicators. Mimicry provides no intent or understanding.

There has been a great deal of philosophy written on this topic, too much to cover here but I will point out a few things. This conception of communication is very beautiful, but it may not be useful.

We may not need much true communication with machines, and indeed, communicating with something with no agency / consciousness / intention or general intelligence is essentially pointless if the goal is to understand how they understand themselves or what they want. Language-based interfaces to powerful tools however can be useful as long as they allow us to control the machine or otherwise help it understand our intent or how we think. As I mentioned in the second tutorial, the ethics of machines with their own intent is quite dubious, machines that absorb and reflect our own intent (and not that of others) are safer and potentially more useful. 

Imagine a machine intelligence that acts as a personal teacher. It may only be able to mimic recordings of great teachers and how those teachers responded to students with our level of understanding, but that is certainly useful. Add in a feedback loop where the teaching style is optimized for the students acquired knowledge and learning style and you may not have true communication, but the student's mind is being shaped by the teacher and, in turn, the teacher is responsive to those changes. That smells like communication. The authors worry that the teacher would promote normative ideas, which is certainly true, but that is a dataset curation and training problem, not one of understanding. Or perhaps, returning to the beauty of the author's position, there isn't much difference between training that identifies how language would affect others and understanding. Brian Cantwell Smith suggests as much in his view of judgment being required for general intelligence. We could close the loop by having the machine teach the student how language affects others based on its own experiences.

Finally, a case in point, exploring what happens as the proficiency of language mimicry increases may be the basic science that helps us understand the development of "real" communication.

### Credits
* On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? by Emily M. Bender, Timnit Gebru, Angelina McMillan-Major and Shmargaret Shmitchell. https://dl.acm.org/doi/10.1145/3442188.3445922

---

Interlude

---

# Data Ethics

* The politics of images
* Open data: FAIR
* CARE Indigenous Principles
* Participation without permission
  
Notes:
Besides all the problems with large datasets we have discussed there are ethical challenges specific to types of data, how data is collected, who benefits from the data. First we will go over some of the specific issues with images, as we have already discussed language datasets in some detail.  Then we'll discuss two good documents coming from different communities but with similar goals.

My three questions for digital goods can apply to data too:



1. Who decides what data to collect?
2. Who collects/creates/curates it?
3. Who gets access to the data that has been collected?

Notes:
1. Who decides what data to collect?
2. Who collects/creates/curates it?
3. Who gets access to the data that has been collected?



The politics of images
https://excavating.ai/

Notes:
Kate Crawford and Trevor Paglen have put together a beautiful and effective site called Excavating AI, an archeology of datasets. They have been so effective at discovering serious, systemic issues in the investigated datasets that many of them have been made private or abandoned.

I'd like to highlight some of the points they make:

"A photograph of a woman smiling in a bikini is labeled a “slattern, slut, slovenly woman, trollop.” A young man drinking beer is categorized as an “alcoholic, alky, dipsomaniac, boozer, lush, soaker, souse.” A child wearing sunglasses is classified as a “failure, loser, non-starter, unsuccessful person.” You’re looking at the “person” category in a dataset called ImageNet, one of the most widely used training sets for machine learning."

WTF?

They correctly point out that, "the automated interpretation of images is an inherently social and political project, rather than a purely technical one." The labels came from humans, but it is not enough to just blame it on the humans. These were the labour of Mechanical Turk workers, with a median income of $2 an hour, paid per label, so speed is important. The distribution of workers is skewed heavily towards the US and India. Even more subtle is that pay may be withheld if the answers are not deemed acceptable, so workers are incentivized to guess what the employer wants or align with other workers by defaulting to broad (but culturally specific) stereotypes. Even more subtle, the interface for ImageNet doesn't show an image and ask the worker to label it, rather workers are given a label and then select all images "that contain the object or depict the concept of". The labels themselves are 1000 selected from another dataset called WordNet which is organized is a specific (very symbolic) way that also includes connecting synonyms. There are curious categories of hot lines, hot pants, hot plates, hot pots, hot rods, hot sauce, hot springs, hot toddies, hot tubs, hot-air balloons, hot fudge sauce, and hot water bottles. So the imagenet workers didn't label an image with a long set of synonyms, but the reverse, they "labelled" a set of word synonyms with images. So you see, details matter.

Crawford and Paglen also ask the important question: "What are computers meant to recognize in an image and what is misrecognized or even completely invisible?"

There is an abundance of politics here if you explore the excavating site.
TODO: example images
Importantly, every image that is labelled in this way is removing a connection to more accurate labels for the AI to train on. General categories, such as "woman", with negative sub-category labels ("slut"), then make invisible more neutral or positive labels ("mother").

The people depicted are images found publicly on the internet so also contain selfies and personal photos of all kinds. 

The only good news here is that ImageNet is rarely if ever used for labelled people it contains, training is instead focused on recognizing objects, but all of these problems remain, especially for highly gendered or political objects.

### Credits
* https://excavating.ai/ 
* https://www.vice.com/en/article/88apnv/underpaid-workers-are-being-forced-to-train-biased-ai-on-mechanical-turk
* The Limits of Global Inclusion in AI Development by Alan Chan, Chinasa T. Okolo, Zachary Terner, Angelina Wang : https://arxiv.org/pdf/2102.01265.pdf



Open data: FAIR

* Findable
* Accessible
* Interoperable
* Reusable

Notes:
There is a growing, and much needed, push toward open data. This movement has goals and aims similar to other free and open-source movements. It should be noted that these movements subvert the growing power of intellectual property by using the same legislation to compel openness or enforce their rejection of restrictions. 

As we looked at in Part 1: Foundations, the advent of digital technologies means that data is more easily collected, stored, copied and distributed than ever, and this leads to a moral obligation to provide for the benefit of others when the cost is trivial.

In 2016 the FAIR guiding principles were published - intended for scientific data, they are good basic principles:

Findable: This requires the data to have metadata and be both findable by machine and humans. Puta sign on the door that says what's inside.
Accessible: Once found, the mechanism to access the data must be standardized, free and open. Use a standard door (and lock for sensitive personal data).
Interoperable: the data should be designed to easily integrate with applications and other data. Use standard sized paper in standard bins with good labels.
Reusable: Metadata and data should be well described. All the documents should be labelled and noted in the index.

FAIR principles are technically oriented, but are essential to the practical challenge of open data. 

### Credits
* https://www.go-fair.org/fair-principles/
* https://theodi.org/article/le-guin-and-data-subversions/



CARE Indigenous Principles

* Collective Benefit
* Authority to Control
* Responsibility
* Ethics
  
Notes:
Once the basic technical requirements of openness are in place we can focus on the ethics of data sharing. Marginalised communities are uniquely placed to understand the systems they operate in. They have often been subject to the contradictions in those systems that have been used against them both ways. In turn, they are able to identify the tensions and contradictions in those systems that can be leveraged to bring about change.

The Global Indigenous Data Alliance (GIDA) sets out some additional principles to guide data governance, which I have paraphrased this guidance given a context of [indigenous feminism](https://en.wikipedia.org/wiki/Indigenous_feminism) and extended to all communities:

* Collective Benefit: The data ecosystem design and function should enable the community to benefit from that ecosystem.
* Authority to Control: You are responsible to get informed consent from the community for the data representations and the community is invited to take stewardship of that data ecosystem.
* Responsibility: Those working with the data have a responsibility to share how the data will be used (for the communities collective benefit).
* Ethics: The communities rights and wellbeing should be considered at all stages of the data life cycle and across the ecosystem.

See [this PDF](https://static1.squarespace.com/static/5d3799de845604000199cd24/t/5da9f4479ecab221ce848fb2/1571419335217/CARE+Principles_One+Pagers+FINAL_Oct_17_2019.pdf) for more details.

The notion of a data ecosystem and life cycle I think are strong concepts to convey some subtle details. Suzanne Kite's _How to Build Anything Ethically_ article in the 2020 Indigenous Protocol and Artificial Intelligence position paper lays this out beautifully, 

"A physical computing device, created in a Good Way, must be designed for the Right to Repair, as well as to recycle, transform, and reuse. The creators of any object are responsible for the effects of its creation, use, and its afterlife, caring for this physical computing device in life and in death."

I would extend similar principles to digital things, but keeping the different inherent properties of being digital in mind. But what is this 'Good Way'? She describes it thusly:

"It is necessary to build our technologies, and all things, in a ‘Good Way’, a way which takes into account all beings, animate and inanimate... and to take responsibility for those it affects. Each component individually and jointly must be designed in a Good Way in order for the parts to be combined into an ethical whole."

This notion of taking responsibility for and developing caring relationships to human and nonhuman entities is a foundation of the concept of freedom in indigenous feminism. Freedom is not hoarded and protected as a result of noninterference, instead it is actively created by taking responsibility.

### Credits
* https://www.gida-global.org/care
* https://slideslive.com/38923838/invited-talk-track-3-sacred-waveforms-an-indigenous-perspective-on-the-ethics-of-collecting-and-usage-of-spiritual-data-for-machine-learning
* https://en.wikipedia.org/wiki/Indigenous_feminism



Participation without permission

Notes:
Jenna Burrell uses the phrase "participation without permission" to describe an important aspect of open data ethics.

On the face of it, it sounds like "participation without permission" conflicts with CARE principles. Instead, it is an additional responsibility to allow for participation, and then participants assume the responsibility for the communities they participate in. Marginalised groups have suffered from highly permissioned participation, often set up in a way to reject them from both mainstream society and recognized minority goups. 

Similar to opensource movements, permission can be separated from consent from the community, by making clear and open what sort of participation is considered consensual and by allowing broad private exploration. For example, opensource software projects allow you to use the software for any private purpose and make any changes to the software for your own private use (where private describes no harm to others). They also have established public codes of conduct for how to interact positively with the community. Anyone abiding by the codes of conduct can participate without permission.

This isn't to say that this process is easy, error free or without conflict. Nonetheless permissionless participation and informed community consent are not at odds, but require taking of responsibility by all.

TODO: How does this apply directly to data?

# Credits
* https://theodi.org/article/le-guin-and-data-subversions/ 

---

# Data appropriation

* Ownership vs authorship
* Intellectual property
* Local Contexts
* Falling in love
  
Notes:
If participation is permissionless, what about issues of cultural appropriation? Is there an equivalent  data appropriation? Parag Kumar Mital suggests we need to consider this. Does the requirement for large amounts of data, especially for generative models that create images, sounds or video, models that are adept at mimicry and can be used by anyone, create a problematic appropriation?

### Credits
* http://pkmital.com/home/2021/09/01/ucla-course-on-cultural-appropriation-with-machine-learning/



Ownership vs authorship

Notes:
I think it's important to first be clear that ownership and authorship are not equivalent. I am one of the authors of this work, but I do not claim ownership of it. This becomes important to keep in mind as the two have been conflated by those who have most benefited from ownership enlisting the help of authors to promote ownership. 



Intellectual property

Notes:
As Cory Doctorow writes, "the phrase 'intellectual property' is, at root, a dangerous euphemism that leads us to all sorts of faulty reasoning about knowledge." IP, copyright, patents are terms that define state granted monopolies. "So the term 'intellectual property,' in that world of monopolies, actually has a very crisp and highly specific commercial meaning: IP is any rule that I can invoke that will allow me to control the conduct of my customers, my critics, and my competitors." This power is enmeshed with his description of the ideology of the Right - "the belief that some of us were born to rule, and some of us were born to be ruled over." In the case of IP, that "some people have the great ideas and, when their ideas are protected, they’ll make more great ideas." 

This sort of thinking contradicts participation without permission, even though the benefactors of monopoly would insist that anyone can have great ideas, it ignores the result that control of an idea creates the mechanisms to control related ideas.

### Credits
* https://freesouls.cc/essays/05-cory-doctorow-you-cant-own-knowledge.html
* https://jacobinmag.com/2021/05/cory-doctorow-interview-bill-gates-intellectual-property



Local Contexts

Notes:
So let us reject appropriation related to ownership and intellectual property and instead look at it from other contexts. The Local Contexts project founded by Jane Anderson and Kim Christen in 2010, aims to enhance and legitimize frameworks for culturally appropriate access to cultural heritage and Indigenous data. They provide a system of labels, tested within different Indigenous communities, that express local and specific conditions for participating in relationships with communities and their data. Thee labels are intended as templates to be customized by each community.

This sort of labelling invites responsibility, and helps clarify what responsibilities are required.

A brief overview of some of these labels: 

# Credits
* https://localcontexts.org/



TK Clan

This Label should be used when you would like external users to know that this material is subject to conditions for circulation relating to clan membership and/or is according to protocols for clan relationships. Because these conditions have not historically been recognized, this Label helps make these conditions for use and circulation clearer. Specifically, the Label asks future users to respect culturally specific rules of use and to make informed decisions about using this type of material.



TK Verified (TK V)

This Label should be used when you and your community are satisfied with the way in which your traditional knowledge materials are being represented online or offline. This Label affirms that appropriate conditions for access and use are in place and that whoever has made this material accessible has made accommodations for cultural protocols associated with the knowledge. It lets users know that the right thing is being done by your community protocols and standards.



TK Secret / Sacred

This Label should be used when you want to let external users know that the material that is openly circulating contains secret/sacred information and that it has specific conditions of access and use. These conditions potentially include restrictions upon access. Using this Label helps to alert external users that this material is special and requires respectful and careful treatment. It asks users to make different decisions about using it and, importantly, to discuss any potential use with you.

Notes:
Local Contexts acknowledges existing cultural contexts around the sharing of information. A such it provides for secret or sacred knowledge as well as gender restricted knowledge. 

Here we can see a tension between open data and existing cultural practices. Is there a reasonable distinction between intellectual property and other limits to information sharing? How can you offer participation with specific exclusions? I don't have easy answers to this, but encourage an exploration rooted in principles of relational ethics and responsibility.



Falling in love

Notes:
Like Parag Mital, I would urge you to think carefully about tools that use data you didn't produce to generate public representations of that data. Heck, I'd be extra careful with data you did produce because of potentially misguided feelings of ownership of that data.

Part of the beauty of machine learning art is a sense of distributed authorship, of being a guide to the world, rather than perfect control. I would ask you to fall in love with data, get to know it and celebrate where it comes from. Build a responsible relationship with it and the human and nonhuman communities it is a part of. 

If we were to outlaw falling in love under the guise of inappropriate cultural appropriation we would be supporting a regime where purity trumps diversity and inclusion.

---

# Next

Notes:
Next up in Part 4 we'll take our deeper understanding of neural networks and our theoretical foundations of the data they require to develop a better understanding of practical data collection.

