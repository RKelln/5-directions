<!-- .slide: id="welcome" data-audio-src="../audio/data/01.ogg" data-background-video="../video/2020-10-10_LakeErie_kiteboard+trees+beach.mp4" data-background-opacity="0.9" -->
Welcome to
# Data in Practice

Notes: 
Welcome to Data in Practice. In previous tutorials we've covered the basic foundations and history of mathematics and computer science, and investigated neural nets and their history. We considered what it means to make datasets ethically, in a 'Good Way'. 

In this tutorial we'll add more practical details about finding, making and curating datasets in a Good Way.


<!-- .slide: id="overview" data-audio-src="../audio/data/02.ogg" data-background-video="../video/2020-10-10_LakeErie_kiteboard+trees+beach.mp4" data-background-opacity="0.8" -->
### Data in Practice

<div class="small lighten backdrop">

* [Selection](#/selection) & [Preprocessing](#/preproccessing)
* Datasets:
  * [Discovery](#/discovery)
  * [Times series](#/time-series-datasets)
  * [Image and video](#/image-datasets)
  * [Text](#/text-datasets)
  * [Audio](#/audio-datasets)
* [Data pitfalls: bias and diversity](#/data-pitfalls)
* [Making things ethically](#/ethics)
  * [FAIR, CARE & Local Contexts](#/fair-care-contexts)
  * [Maintenance & care work](#/maintenance)
* [Companion Data in Practice details document](./companion.html)

</div>

Notes:
We'll start off by talking about how to select and augment a dataset and the work that goes into preparing the dataset before it can be safely used as training data. Then we'll talk about tools for finding existing datasets.

We'll look at the different types of datasets and discuss bias and fair distribution in more detail, as well as tools to explore and handle those issues.

Next I'll revisit how to make datasets ethically with a focus on care work and maintenance of the dataset.

Our goal is to get you started on finding or recording your own data, then cleaning and curating it so that it can be used in an ML project done in collaboration with ML engineers. We'll learn how to do this in a Good Way, and share it ethically with others.

This tutorial has a companion document that includes extra details that are easier to read and reference. I'll introduce the key concepts here, so you have a better idea of what is available in the document. I encourage you to use that document as a reference and jumping off point for further learning.

---
<!-- .slide: id="selection" class="zoomout" data-audio-src="../audio/data/03.ogg" data-background-image="../images/ImageNet_example.jpg" data-background-opacity="0.5" -->
# Selection

* How much data? 
  * **10x**
  * 1000 images per class
* Synthetic augmentation

Notes:
How much data do you need? There is no hard guide to this, but typically there is a sweet spot where performance gains dramatically but levels off after that. That point in real world datasets can be difficult to determine, but people have suggested the "rule of 10": that you want roughly 10 times as many examples as there are parameters (i.e. neurons) in your model. (Most modern ML frameworks will be able to give you a parameter count of your model.) However, text, image, and video data which is very common in generative models usually requires more than this because of the noise in the data.

For classification, you want enough data per "class" and roughly balanced data per classes, with recommendations for image classification at around 1000 images per class.

If you don't have enough data there are some options, we'll get into specifics for the different types of datasets but the basic options are:


<!-- .slide: data-audio-src="../audio/data/04.ogg" data-background-image="../images/image_mirror.webp" data-background-size="contain" -->

<div class="backdrop">

* Augmentation
* Transfer learning
* Synthetic data

<div>

Notes:
Augmentation means applying transformations to your data, usually dynamically during training. For images this almost always includes horizontal flips, as most images are equivalent when mirrored. 


<!-- .slide: class="zoomout" data-audio-src="../audio/data/05.ogg" data-background-image="../images/GAN-Sarin-Japanese_landscape_1.jpg" data-background-opacity="0.7" -->
## Transfer learning
Notes:
Transfer learning involves finding and using an existing fully trained network then using that to help train a new one. This can be done through retraining the model or using it as a teacher for your new student model. In the first case, sometimes the pretrained model has some layers removed, generally the highest level ones. Model layers start from generic to task/data specific in the final layer. For example, if you are creating an image model you could take an existing image classification model trained on millions of images and replace the last layer (which is doing the classification) with new layers. You could remove a few more layers if you just wanted to keep the lower-level feature detection.

### Credits <!-- .element: class="attribution" -->
* [_Playing a game of GANstruction_ - Helena Sarin](https://thegradient.pub/playing-a-game-of-ganstruction/)


<!-- .slide: data-audio-src="../audio/data/06.ogg" data-background-video="../video/sailvos_synthetic_data_example.mp4" data-background-video-loop -->
## Synthetic Data
Notes:
Another approach is synthetic data, in which at least some portion of the data is generated by machine. This is more common in basic ML research, rather than in generative models. Synthetic data is growing in popularity in commercial settings, since it allows a business to de-bias and increase privacy of their user data. Synthetic data for 3D datasets is also growing in popularity as labelling 3D data is difficult in real world settings. 

### Credits <!-- .element: class="attribution" -->
* [_SAIL-VOS_ dataset - Yuan-Ting Hu et al](http://sailvos.web.illinois.edu/_site/index.html)


<!-- .slide: data-audio-src="../audio/data/07.ogg" data-background-image="../images/hot_bod_synthetic_data.webp" data-background-size="contain" -->
Notes:
Synthetic data may be an interesting approach in generative art making as it allows for interesting combinations of data. For example, in one of my pieces I used a style-transfer technique with multiple different styles applied to still images extracted from video and then used those stylized images to train a generative model that could produce animations that moved smoothly from one style to another.


<!-- .slide: data-background-video="../video/hot_bod_120000_f34ec270_bass_solo_electric-excerpt.mp4" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Hot Bod_ animal texture test, bass solo by Celeb Klager](http://www.ryankelln.com/project/sound-escapes/#hot-bod)


<!-- .slide: data-audio-src="../audio/data/08.ogg" data-background-image="../images/Han_Lakspe.webp" data-background-size="contain" -->
Notes:
Artists like Hans Brouwer use similar techniques to solve the problem of building an interesting dataset starting from just a few images. In practice this might be a few cycles of training and then creating a first draft of output, applying some transformation to that output, and then feeding those transformed images back through the model again. He repeats this loop a number of times, increasing the number of good training images each time.

### Credits <!-- .element: class="attribution" -->
* [_Lakspe_ development images - Hans Brower](https://wavefunk.xyz/blog/lakspe)

### Credits
* https://machinelearningmastery.com/transfer-learning-for-deep-learning/
* https://wavefunk.xyz/blog/rhodops


<!-- .slide: data-background-video="../video/Hans_Lakspe_interp-Discovery.mp4"  data-background-color="white" -->
Notes:
### Credits <!-- .element: class="attribution" -->
* [_Lakspe_ development images - Hans Brower](https://wavefunk.xyz/blog/lakspe)

---
<!-- .slide: id="preproccessing" class="zoomout" data-audio-src="../audio/data/09.ogg" data-background-image="../images/mutual_stupidity_with_no_judgment.webp" data-background-opacity="0.8" -->
# Preprocessing

* Cleaning
* Balancing
* Feature scaling
* Splitting
  
Notes:
Raw data is a mess and an old adage in computer science is "garbage in, garbage out". So carefully cleaning and curating your dataset is critical for the training process. 

Some basic tasks include cleaning the data, balancing the data between classes (for example, you wouldn't want 100 times as many dogs as cats), checking the range of feature values and ensuring all the data has roughly similar ranges or sizes.

Then you may want to split your data into training, validation and test sets. By splitting your data and holding some of it back from training you are better able to test when your model is generalizing well to data other than what it was trained on.


<!-- .slide: data-audio-src="../audio/data/10.ogg" data-background-image="../images/bad_data.png" data-background-size="contain" data-background-opacity="0.5" -->
## Cleaning 

* Missing values
* Duplicate values
* Bad feature values
* Wrong type of value
* Bad labels
* Consistent timestamps/dates

Notes:
Data, particularly anything entered by humans, is notoriously riddled with errors. Data entries with multiple values may have missing values or regularly timed entries may be missing data points when the system went down, etc. Entries may be duplicated or transposed.

The values may have misplaced decimals or an extra zero or other number added. Some entries might have text where only numbers should be.

With labelled data, such as labelled images, it is very common to have incorrectly labelled data. If you use crowd-working online services for labels then you need to have a variety of data integrity checks. For example, have multiple answers from different workers to compare for agreement.

Another common error is inconsistent timestamps, such as year-month-day vs month-day-year. Also be on the lookout for timezone problems, times and dates may be set to a particular timezone (where the data was recorded) or may default to UTC (with zero timezone offset). If the time ends in a Z that generally indicates UTC time.


<!-- .slide: data-audio-src="../audio/data/11-seg1.ogg" data-background-image="../images/dogs_cats_platypuses.webp" -->
## Balancing <!-- .element: class="fadeout" -->

Notes:
Some datasets have vastly different proportions of the different classes of data they contain. For example, an animal classifier using images from the internet might have millions of photos of dogs and cats, but only a few of platypuses. 

If after training on the imbalanced dataset your results on the minority classes (i.e. the platypuses) are bad then you can balance them using downsampling and upweighting.

### Credits
* https://commons.wikimedia.org/wiki/File:Feeding_Platypus_(6811147158).jpg


<!-- .slide: data-audio-src="../audio/data/11-seg2.ogg" data-background-image="../images/downsampling-upweighting-v5.svg" data-background-size="contain" data-background-color="white" -->
Notes:
Downsampling means training on fewer of the majority cases. You can randomly sample from the majority to use a less imbalanced ratio, perhaps down to 10 to 1. Then you can upweight these downsampled majority examples - you can increase the importance of those examples in the calculation of the loss. Thus you end up with fewer of the majority class examples, so the model sees the minority classes more, but to compensate the majority examples change the weights more.

### Credits <!-- .element: class="attribution" -->
* [_Data Preparation and Feature Engineering for Machine Learning_ - Google](https://developers.google.com/machine-learning/data-prep/construct/sampling-splitting/imbalanced-data)


<!-- .slide: data-audio-src="../audio/data/12-seg1.ogg" -->
## Feature scaling

<img data-src="../images/feature_scaling.webp">

Notes:
For time-series and other numerical data you may need to ensure that the data is roughly similar to get good results. Some machine learning algorithms are sensitive to scale and differences in scale between different inputs. Feature scaling transforms the data so that it works well with the algorithm you are using. Note that sometimes the differences in scale between variables captures important information, so scaling makes things worse.

Feature scaling mainly consists of two practices: normalization and standardization.

### Credits
* https://thaddeus-segura.com/feature-scaling/


<!-- .slide: data-audio-src="../audio/data/12-seg2.ogg" data-background-image="../images/normalizations-at-a-glance-v2.svg" data-background-size="contain" data-background-color="white" -->
Notes:
Normalization, also known a min-max scaling, is used when your data has few outliers and is approximately uniformly distributed (i.e. it has values in all parts of the range). Normalization shifts and rescales the values, so they range from 0 to 1 or -1 to 1. Most neural network approaches work best with normalized values.

### Credits <!-- .element: class="attribution" -->
* [_Data Preparation and Feature Engineering for Machine Learning_ - Google](https://developers.google.com/machine-learning/data-prep/transform/normalization)


<!-- .slide: data-audio-src="../audio/data/12-seg3.ogg" data-background-color="#133a61" -->
### Standardization
<img data-src="../images/standarization.png">

Notes:
Standardization centers values around the mean with a unit standard deviation. In less mathematical language, it shifts the data into a bell curve with the peak centered on zero. Outliers in the data will remain, so usually this is used for data that already follows a Gaussian or normal distribution.

There aren't hard rules about when to use or not use types of feature scaling, but you can try raw, normalized, and standardized data to see which gives the best results.

### Credits
* https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/
* https://builtin.com/data-science/when-and-why-standardize-your-data
* https://en.wikipedia.org/wiki/Normal_distribution


<!-- .slide: data-audio-src="../audio/data/13-seg1.ogg" data-background-video="../video/train-validation-test.mp4" data-background-size="contain" data-background-color="white" data-background-video-loop -->
## Data Splitting <!-- .element: class="fadeout" -->

Notes:
To examine how effective the network is at generalization you can partition or split the data you collect into three groups: training, validation and test. 

Training data is used in the training process and is seen many times by the network. This is the data used to generate errors and learn from. 

Validation data is used during training but only to check on how well the model handles data it hasn't seen before, the weights of the network are never updated in response to the validation data. Instead, this check is mainly used to know when to stop training - when the performance on the training data is good **and** the performance on the validation data is good. It is entirely possible for the performance on these to be very different.

Test data is used after the model is finished training to give it another set of data it has never been trained on and never been checked whether it generalizes well to. This is to get a rough idea of performance of the model "in the wild" on data that you didn't collect and this is the data used when researchers report their findings in papers. 

### Credits
* https://thaddeus-segura.com/feature-scaling/


<!-- .slide: data-audio-src="../audio/data/13-seg2.ogg" data-background-video="../video/trusses.mp4" data-background-video-loop -->
Notes:
When models are used for art, splitting the data may be less important, as often the output will be visually inspected by the artist since the desired results are subjective. In addition, not using all your data for training by holding out data for validation and testing can make already small datasets even smaller. For art related projects you may only want to split 10% or so of the data to use for validation. Even then you may only need to do this if the model is receiving new data after the model has been trained. So, for example, generative models that are used to produced images that are used in the art do not generally need validation data, but something that generates images in real time from sensors during an installation may benefit from validation data.

---
<!-- .slide: id="discovery" data-audio-src="../audio/data/14.ogg" data-background-image="../images/Sacred_Library_Ryan_Moulton_latent-diffusion.webp" data-background-opacity="0.9" -->
# Dataset discovery

<div class="lighten backdrop">

* [AWS open data registry](https://registry.opendata.aws/)
* [DataHub](https://datahub.io/search)
* [Google dataset search](https://datasetsearch.research.google.com)
* [Kaggle](https://kaggle.com/datasets)
* [OpenML](https://www.openml.org/search?type=data)
* [UCI](https://archive.ics.uci.edu)
* [Library of Missing Datasets](https://github.com/MimiOnuoha/missing-datasets)

</div>

Notes:
These are good places to do general searches for datasets. A vast majority of the datasets you can find in these aggregators are for government, business or research purposes, so aren't directly applicable for art making, but certainly offer opportunities for associative and critical exploration.

Existing datasets will still often need processing, although it is common to find a raw dataset version and cleaned version.

I've also included Mimi Onuoha's project, _Library of Missing Datasets_ to give a sense of what data isn't being recorded and why that data is missing.

### Credits <!-- .element: class="attribution" -->
* [_Tour of the Sacred Library_ - Ryan Moulton](https://moultano.wordpress.com/2021/07/20/tour-of-the-sacred-library/) (2021)

### Credits
* https://www.v7labs.com/blog/best-free-datasets-for-machine-learning
* https://pub.towardsai.net/best-datasets-for-machine-learning-data-science-computer-vision-nlp-ai-c9541058cf4f
* https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research

---
<!-- .slide: id="time-series-datasets" data-audio-src="../audio/data/15-seg1.ogg" data-background-video="../video/Debbie Symons - Counting One to Four - Nature morte square -qLjcdy9OOlc.mp4" data-background-size="contain" data-background-color="black" data-background-opacity="0.9" data-background-video-loop -->
# Time series data

<div class="fragment backdrop" data-audio-src="../audio/data/15-seg2.ogg">

1. Using real-time sensor data
   * The main issue is handling sensor failure and other outliers in real time
2. Replaying recorded sensor data
   * The benefit here is that you can clean the data, otherwise similar to above
3. Predicting future data
   * Why is the prediction necessary vs recorded output?

</div>

Notes:
Time series data records values (typically from some sort of sensor or digital process). This includes temperature and weather data, economic data, population data, and physiological data.

Generally if you're using time series data for an art project you are:

Using real-time sensor data, where the main issue is handling sensor failure and other outliers in real-time. If instead you are replaying a recording of sensor data then you can clean the data. Otherwise you may be predicting or generating future data, but I'd question whether that prediction is necessary for the piece or if you could just use recorded output. In general avoiding real-time data and predictions will make your life easier. 

If you want to work with time series data you will likely need to work with a data scientist or learn some math, statistics and programming (which I encourage regardless of other collaborators). It may be less daunting than you think, as projects like [Auto_TS](https://github.com/AutoViML/Auto_TS) claim to allow for building models in "one line of code".

### Credits <!-- .element: class="attribution" -->
* [_Counting One to Four: Nature morte_ - Debbie Symons](https://debbiesymons.com.au/counting-one-four-nature-morte/) 2015

### Credits
* [_Basics of Time Series_ - Andreas Mueller](https://www.youtube.com/watch?v=d34aLzKP0rY)


<!-- .slide: data-audio-src="../audio/data/16.ogg" data-background-image="../images/bad_data.png" data-background-size="contain" data-background-opacity="0.5" -->
## Cleaning

Notes:
Time series data can often have null or missing values. Depending on how many there are you can delete them or try to fill them in with averages or other approximations from surrounding data.

You will want to check the boundaries of the data - the highest and lowest values. Using this process you can also look for outliers. You'll need to investigate values that seem far too high or low compared to the rest of the data, this could be from sensor calibration errors or outright failures or just noise in the signal.


<!-- .slide: data-audio-src="../audio/data/17.ogg" data-background-image="../images/time_series_detrend.webp" data-background-size="contain" data-background-color="white"-->

Notes:
The first step of working with time series data is generally to visualize it in a graph plot. Depending on how much data there is this can be a useful way to check aspects of the data, along with statistical analysis.

Mean-reverting data returns to a value that is stable over time, and it is important to know if this is at 0 or some other value. This data is called stationary.

Conversely, the data may have a trend or non-stable shape. Data can have cycles or seasonality. You may want to de-trend the data (sometimes you can find seasonally adjusted versions) or use a model that handles seasonality.

The worst case scenario for time series data is probably structural breaks. These are large sudden shifts in the data. You'll likely need to have special models or otherwise transform the data so that it is comparable.

### Credits <!-- .element: class="attribution" -->
* [_Basics of Time Series_ - Andreas Mueller](https://www.youtube.com/watch?v=d34aLzKP0rY)

### Credits
* https://www.aptech.com/blog/introduction-to-the-fundamentals-of-time-series-data-and-analysis/
* https://amueller.github.io/COMS4995-s19/slides/aml-23-time-series/#31


<!-- .slide: data-audio-src="../audio/data/18.ogg" data-background-color="white" -->
### OpenRefine <!-- .element: class="hidden" -->

<img data-src="../images/OpenRefine_logo_color.png">

https://openrefine.org/

https://schema.org/

Notes:
There are a few tools to help clean data, one of open source tools is [OpenRefine](https://openrefine.org/). It works with a variety of data formats and runs locally on your machine, but you use your web browser to interact with it. 

Particularly for data with human-entered text values, OpenRefine helps spot and fix inconsistent entries and mistakes. There are [additional extensions](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/) for OpenRefine that help integrate FAIR data principles.

When starting your own datasets it is important to collect metadata. You can find reference and example metadata for any type of data at [schema.org](https://schema.org/docs/schemas.html).

### Credits
* https://openrefine.org/
* https://docs.openrefine.org/
* https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/
* https://schema.org/docs/schemas.html
* https://commons.wikimedia.org/wiki/File:OpenRefine_logo_color.png


<!-- .slide: class="panleft" data-audio-src="../audio/data/19.ogg" data-background-image="../images/HYDE-global-data.jpg" data-background-opacity="0.3" -->
## Existing datasets

<div class="lighten">

* [Time Series Data Library (TSDL)](https://pkg.yangzhuoranyang.com/tsdl/)
* [GapMinder](https://www.gapminder.org/data/)
* [Our World in Data - Biodiversity](https://ourworldindata.org/biodiversity)
* [HYDE (History database of the Global Environment)](https://www.pbl.nl/en/image/links/hyde)
* [Pangeo Datastore](https://catalog.pangeo.io/)

</div>

Notes:
Time series data can be easily found in the general dataset searches, but there are a few worth mentioning anyways, particularly if you have an environmental focus:
* TSDL was created by Rob Hyndman, Professor of Statistics at Monash University, and contains 650 datasets of a wide variety of types.
* GapMinder has hundreds of indicators of global well-being, health, and the environment.
* Our World in Data has a variety of biodiversity datasets.
* HYDE has a wide variety historical data covering the entire Holocene (12000 years or so).
* Pangeo is a community promoting open science and has preprocessed climate and weather datasets.

There are also numerous space, environmental and atmospheric datasets available from governments around the world.


<!-- .slide: data-audio-src="../audio/data/20-seg1.ogg" data-background-image="../images/fieldkit-device.webp" data-background-size="contain" data-background-color="#efefef" -->
## Sensors <!-- .element: class="fadeout" -->

Notes:
If you want to collect data yourself, then you'll want to look into FieldKit, which includes an opensource platform for research grade hardware, a software platform for handling that data and community to help with the process.


<!-- .slide: data-audio-src="../audio/data/20-seg2.ogg" data-background-image="../images/fieldkit_weather_deployed.webp" data-background-size="contain" -->
Notes:
Sensor kits start around $150 USD but a full set of weather sensors is up to $400 USD. A weather FieldKit station can record temperature, relative humidity, barometric pressure, wind speed, wind direction, and rainfall. They also have kits of water measurements and soon air quality measurements. Due to pandemic supply issues it could be hard to source these kits currently, but they remain one of the best open, artist-accessible sensor packages.

### Credits
* https://www.fieldkit.org/product-guide/deploy-station/


<!-- .slide: data-audio-src="../audio/data/20-seg3.ogg" data-background-image="../images/fieldkit_weather_deployed.webp" data-background-size="contain" data-background-opacity="0.6" -->

<div class="backdrop lighten">

[**fieldkit.org**](https://www.fieldkit.org/)

[**wildlabs.net**](https://wildlabs.net/)

[**conservify.org**](http://conservify.org/)

</div>

Notes:
There is a growing community of conservationists trying to make opensource sensor and data tools. Check out [WildLabs](https://wildlabs.net/) and [Conservify](http://conservify.org/) online.

### Credits
* https://www.fieldkit.org/
* https://wildlabs.net/
* http://conservify.org/


<!-- .slide: data-audio-src="../audio/data/21.ogg" -->
## File formats

<img data-src="../images/example_spreadsheet_CSV.png">

Notes:
Generally when using the Python language and popular ML time series tools you will want to save your data in CSV format. All spreadsheet software will be able to export to this format, so you can use any office software to manage the data until you export it for ML tools.

---
<!-- .slide: id="image-datasets" data-audio-src="../audio/data/22.ogg" data-background-image="../images/image_compare_1300beach.webp" data-background-size="contain" -->
# Image data

Notes:
Image data is self-explanatory, but there are some important details. The format of the data can matter. Although it takes far larger amounts of space, PNG formatted images suffer from less compression artifacts than JPEGs. The vast majority of image data is still using JPEG format, but it won't help to save JPEGs as PNG formatted images since the data loss caused by compression happens when first saved as a JPEG. If you are creating your own images, use PNG or WEBP formatted images. WEBP has high quality and smaller file sizes, but as of yet is relatively unused, but works in almost all browsers.

### Credits <!-- .element: class="attribution" -->
* [_Using Modern Image Formats: AVIF And WebP_ - Addy Osmani ](https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/)


<!-- .slide: data-audio-src="../audio/data/23.ogg" data-background-image="../images/flickr_creative_commons.webp" data-background-size="contain" -->
## Scraping

Notes:
Many software artists use programs to "scrape" images from sources like Flickr. There are a number of issues with this, both technically and with copyright licences. It is possible however to download Creative Commons licensed images (that allow for use with or without attribution) from Flickr. Remember to keep a list of the image URLs you downloaded if you are publicly releasing the dataset so that you can respect any attribution requirements.

When collecting images from the Internet I recommend learning enough Python programming to run some scripts that will download the images for you given a particular search term. There are a few existing utilities that you can use, but you will often have to make small modifications to them and at minimum understand how to install Python and run python programs. Unfortunately, that is beyond the scope of this tutorial.


<!-- .slide: data-audio-src="../audio/data/24.ogg" data-background-image="../images/openverse.webp" data-background-size="contain" data-background-opacity="0.7" -->

<div class="lighten backdrop">

* [Openverse](https://wordpress.org/openverse/)
* [Flickr CC](https://www.flickr.com/search/?text=&license=2%2C3%2C4%2C5%2C6%2C9&media=photos)
* [Rawpixel PD](https://www.rawpixel.com/category/53/public-domain)
* [Pexels PD](https://www.pexels.com/public-domain-images/)
* [Unsplash](https://unsplash.com/)
* [Art Institute Chicago](https://www.artic.edu/collection?is_public_domain=1)

</div>

Notes:
You can also collect images manually, although be prepared to invest a lot of time. There are a number of sites that you can use for public domain or Creative Commons (CC) licensed images. You can also use Google image search and their Creative Commons licensed image search option, but the images often are not verifiably licensed in any way.


<!-- .slide: data-audio-src="../audio/data/25.ogg" data-background-color="black" -->
## Preparing images

<video data-src="../video/nebula_15fps_256sq.mp4" loop autoplay>

Notes:
Images may have watermarks, frames, and other extraneous information in them. If you are using them in a generative model, any extraneous image elements should be cropped out or removed or the model may learn to generate them as well.

The main challenge with images is resolution and/or dimension. Most models require a particular resolution of image to train on and usually a square resolution (i.e. width and height are the same) that is relatively small. 1024 x 1024 is quite large for contemporary training.

Most models train on square images, but most images aren't square. This means images will be cropped, either on the fly during training, or during dataset preparation. I tend to favour controlling the image scaling and crops manually for smaller datasets. Manual crops can just center the subject in the square frame and then scale that crop to the appropriate size. This usually means that the left and right edges of your images will get cropped out, so beware of images where the subject is far to the left or right.

For video datasets you may be required to export the video into individual images and then process those.


<!-- .slide: class="zoomin" data-audio-src="../audio/data/26.ogg" data-background-image="../images/ImageNet_example.jpg" data-background-opacity="0.15" -->
<div class="small lighten">

* [ImageNet](http://image-net.org/) the original labelled image dataset
* [Open Images](https://storage.googleapis.com/openimages/web/index.html) Google's labelled, segmented image dataset
* [COCO](https://cocodataset.org/) Microsoft's segmented, captioned, mostly labelled images
* [LHQ](https://github.com/universome/alis) high quality landscape photos
* [XView Dataset](http://xviewdataset.org/#dataset) annotated overhead imagery
* [Cityscapes](https://www.cityscapes-dataset.com/) labelled, segmented cityscape images
* [Wiki Art dataset](https://www.kaggle.com/c/painter-by-numbers/data) based on [WikiArt](https://www.wikiart.org/) both public domain and copyrighted images of art
* [YouTube-8M](https://research.google.com/youtube8m/) labelled video dataset
* [Kinetics](https://deepmind.com/research/open-source/kinetics) video clips that cover human action classes

</div>

Notes:
There are wealth of existing image datasets. Beyond ImageNet, the grandmother of labelled image datasets (which is currently undergoing improvements) there are Google's Open Images and Microsoft's COCO dataset. 

For landscape and aerial photography the LHQ and XView datasets are available, respectively, as well as the Cityscapes dataset for urban scenes.

Many models have been made from the Wikiart image collection and the Art Institute Chicago now has an astounding collection of high quality art scans available through an opensource API, although I haven't seen a downloadable dataset.

There are some video datasets available as well, based off Youtube videos, including the Kinetics dataset that focuses on human actions.

Many of these datasets are hundreds of gigabytes in size, so be prepared for long downloads and massive storage requirements.


<!-- .slide: data-audio-src="../audio/data/27.ogg" data-background-image="../images/biased_towards_textures.png" data-background-size="contain" data-background-opacity="0.7" -->
## Augmentation

Notes:
When training models using images care must be taken to avoid common problems with neural nets. 

For example, researchers found that texture was the most important attribute being used to make the predictions in early image classification models, but they could force more robust learning by adding silhouettes, line drawings, noise, clipping and partial masking of the image and other transformations to the training data to expand the range of characteristics that led to a classification. This data augmentation is critical now in image-based training.

Most augmentation is now included in computer vision related research projects and done automatically, on-the-fly during training, but be sure that you have it enabled.


<!-- .slide: data-audio-src="../audio/data/28.ogg" data-background-image="../images/image_aug_examples_grid.jpg" data-background-size="contain" data-background-opacity="0.7" -->

<div class="backdrop">

* Color, contrast, gamma, brightness shifts
* Blur, noise and other effects
* Rotation, scaling, reflection, & perspective shifts
* Random cropping
* Random cut out / erasing
* Mixup: blending of two images
* Style transfer

</div>

Notes:
This augmentation includes: 

* color, contrast, gamma, brightness shifts
* blur, noise and other effects
* rotation, scaling, reflection, & perspective shifts
* random cropping
* random cut out / erasing
* mixup: blending of two images
* style transfer

Automated image augmentation is an active area of research and tools are improving rapidly.

### Credits
* https://github.com/AgaMiko/data-augmentation-review

---
<!-- .slide: id="text-datasets" data-audio-src="../audio/data/29.ogg" -->
# Text data

<img data-src="../images/Parrish_Compasses.webp">

Notes:
There are quite a few text datasets, although in general unless you are interested in exploring text like Allison Parish, who uses text data similar to how image and time-series data is used, I would suggest using existing pre-trained large language models. It is possible to fine-tune these existing models on more specific vocabulary, although the training may be difficult or expensive.

### Credits <!-- .element: class="attribution" -->
* [_Compasses_ - Allison Parrish](http://sync.abue.io/issues/190705ap_sync2_27_compasses.pdf)


<!-- .slide: data-audio-src="../audio/data/30.ogg" data-background-image="../images/OpenAI-GPT.png" data-background-size="contain" data-background-color="white" -->
## Existing large language models <!-- .element: class="r-fit-text fadeout" -->

* [OpenAI GPT](https://beta.openai.com/overview)
* [Hugging Face models](https://huggingface.co/models)

Notes:
If you want the most effective and easiest solution, but by far the most expensive, OpenAI's GPT API is in beta right now. It can be fine-tuned and offers completion, question answering, classification, summarization, and semantic search amongst many other capabilities.

Hugging Face offers a number of pretrained large language models, but using them requires the capability of running them and doing any extra fine-tuning training yourself.

### Credits
* https://beta.openai.com/examples
* https://huggingface.co/models


<!-- .slide: id="audio-datasets" data-audio-src="../audio/data/31.ogg" data-background-image="../images/AI_music_to_guide_your_emotions_2.webp" data-background-opacity="0.33" -->
# Audio datasets

<div class="lighten">

* [Common Voice](https://voice.mozilla.org/en/datasets) open source multi-language dataset of voices
* [Open Speech and Language Resources](http://www.openslr.org/resources.php) particularly the [LibriSpeech](http://www.openslr.org/12/) a 1000 hour dataset of read English
* [The Spoken Wikipedia Corpora](https://nats.gitlab.io/swc/) hundreds of hours of aligned audio to text in multiple languages
* [AudioSet](https://research.google/tools/datasets/audioset/) labelled 10 second sound clips from YouTube videos
* [NSynth](https://magenta.tensorflow.org/datasets/nsynth) musical notes from a thousand synthesized instruments
* [Free Music Archive](https://freemusicarchive.org/) free music search engine (no dataset)

</div>

Notes:
The majority of audio datasets are for natural language text-to-speech learning. These have limited use to artists generally, but there are a few well known non-voice datasets.

---
<!-- .slide: id="data-pitfalls" class="zoomin" data-audio-src="../audio/data/32.ogg" data-background-image="../images/transparency_interpretability_explainability.webp" -->
# Data pitfalls

Notes:
We have covered some issues with data in the previous tutorials, including bias, diversity, and fairness. We'll do a quick review with a focus on what can be done to avoid or counteract these issues.


<!-- .slide: class="panup" data-audio-src="../audio/data/33-seg1.ogg" data-background-image="../images/explainable_AI_WEIRD.webp" -->
## Diversity and Bias

Notes:
Datasets reflect the biases of the society from which they originate. As mentioned in the last tutorial, datasets gathered from the Internet lack diversity and have an over-representation of certain viewpoints, particularly, younger and WEIRD (Western, educated, industrialized, rich and democratic). Western biases, such as stereotypes about gender, minorities, and capitalism are pervasive.


<!-- .slide: data-audio-src="../audio/data/33-seg2.ogg" data-background-image="../images/construction.jpg" data-background-size="contain" data-background-color="white"-->
Notes:
Trying to counteract the lack of diversity can be challenging, for example, take this selection of search results for "construction worker" that attempts to balance gender diversity. However, the masculine-presenting individuals are more realistic, modern and active than the nostalgic, toy, non-realistic, passive and/or sexualised feminine-presenting individuals.

Thus, if you incorporate image datasets from the Internet, and are not critiquing them by presenting their flaws, you will need to carefully curate the dataset to manage the diversity and bias issues. This curation requires a vast amount of manual labour, but it is also very valuable, helping to create more freely available higher quality datasets for further research and other art.

### Credits <!-- .element: class="attribution" -->
* [Measuring Diversity - Google PAIR](https://pair.withgoogle.com/explorables/measuring-diversity/)


<!-- .slide: class="pandown" data-audio-src="../audio/data/33-seg3.ogg" data-background-image="../images/a_woman_making_art_with_a_computer_2.webp" -->
Notes:
Unfortunately, removing problematic images from datasets may not be enough to get sufficient diversity. You may also need to create or find images to bolster minority representations. Creating your own images, especially from minority groups, requires careful consideration of representation and consent.


<!-- .slide: data-audio-src="../audio/data/34.ogg" data-background-color="white" -->

<img data-src="../images/GPA_PAIR_example.png">

Notes:
Data based on historical trends is going to necessarily reflect the bias of that society at that time. In this fictional example of college GPA prediction, the more data points for each student, including gender and other attributes thought to be unrelated to GPA, the better the model predicts based on its historic data. Historical bias against women can cause the model to predict lower GPAs for women and if that bias remains in the educational institution a biased model may be more accurate. In essence a biased but accurate model can be used to detect bias in the systems its data is derived from, hopefully leading to reforms.

Hiding attributes that the model shouldn't use for its prediction is not fail-safe either. Models, like humans, can infer private attributes from public ones. For example, using a person's birthplace or living location to infer race or ethnicity.

Fortunately, in artistic practice your datasets will not be making consequential decisions or predictions about others. Nonetheless, understanding how your datasets may be biased is critical to the underlying themes and construction of your work.

### Credits <!-- .element: class="attribution" -->
* [Hidden Bias - Google PAIR](https://pair.withgoogle.com/explorables/hidden-bias/)

---
<!-- .slide: id="ethics" class="zoomin" data-audio-src="../audio/data/35-seg1.ogg" data-background-image="../images/results_not_ethics.webp" -->
# Making things ethically <!-- .element: class="r-fit-text" -->

Notes:
Sadly, there are not yet many established best practices around ethical dataset creation in the Machine Learning community, especially for art projects. A majority of the existing work has been focused on results not ethics. Artists have had an overwhelming amount of technical issues to overcome and limited time and money to spend on creating and curating datasets. Instead, like many ML researchers, they have relied on existing research-focused datasets or have quickly hacked together datasets scraped from image hosting sites like Flickr.

Properly building the relationships and tools needed to collect, curate and share datasets in an ethical 'Good Way' is the current and ongoing responsibility of artists hoping to make art with data. So I would urge you to try to improve your practice with each work and share your tools and experiences with others.


<!-- .slide: id="ethics" class="pandown" data-audio-src="../audio/data/35-seg2.ogg" data-background-image="../images/footsteps_in_fresh_white_snow_2.webp" -->
Notes:
There are many fields with related challenges including museum, library and information sciences, art history as well as other preservation, conservation and knowledge keeping practices. Also relevant are the practice of ethics and data management used in journalism and science research, particularly experimental studies. Plus all the open source and open data movements. Don't be shy to reach out for help and integrate best practices.

I wish there was more I could offer, but I too am at the start of this journey, so I am mainly able to point out the footsteps of pioneers for us both to follow.


<!-- .slide: id="fair-care-contexts" data-audio-src="../audio/data/36.ogg" data-background-image="../images/GOFAIR_logo.png" data-background-size="contain" data-background-opacity="0.6"-->
## FAIR, CARE & Local Contexts

Notes:
In the Neural Nets and Data tutorial I introduced the open data FAIR principles, the CARE Indigenous principles, and the Local Contexts project for culturally appropriate access to cultural heritage and Indigenous data.

I will quickly review this and then suggest some practical steps to implement them:


<!-- .slide: data-audio-src="../audio/data/37.ogg" data-background-image="../images/GIDA_FAIR_CARE.webp" data-background-size="contain" data-background-color="#5eb2b2" -->
Notes:
FAIR principles are findable, accessible, interoperable, and reusable data. In other words, place good signposts to your data, access it through standard doors and locks, storing it on standard sized paper with good labels, and note everything in an index.

CARE principles add community benefit from the data, getting consent from the community and inviting them to be stewards of the data, a responsibility to share how the data will be used, and holistic data ethics that includes the community's wellbeing at all stages of the data life cycle.

Let's explain this with an example dataset of collected and new photos of cultural heritage and art from a particular community and the land they live on.


<!-- .slide: data-audio-src="../audio/data/38-seg1.ogg" data-background-image="../images/Suzanne_Kite.webp" data-background-size="contain" data-background-color="black" -->
Notes:
Following Suzanne Kite's _How to Build Anything Ethically_ questions, we can start a data project by identifying and connecting with elders and knowledge keepers of the community. They will help to identify other stakeholders, both human and non-human, past and present.

### Credits <!-- .element: class="attribution" -->
* [Image by Kari Noe, 2019](https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/)


<!-- .slide: class="zoomout" data-audio-src="../audio/data/38-seg2.ogg" data-background-image="../images/an_archeology_of_datasets.webp" data-background-opacity="0.7"-->
<h3 class="dynamic-text"></h3>
<script type="text/vtt">
00:00.500 --> 00:03.000
coalition of stakeholders
00:04.500 --> 00:06.500
inviting participation & feedback
00:10.300 --> 00:14.500
respect, reciprocity, trust & mutual understanding
00:20.200 --> 00:22.000
open & collaborative
00:24.000 --> 00:29.000
mockups
00:30.750 --> 00:33.500
imagine the future together
00:36.000 --> 00:37.500
consent
00:38.300 --> 00:39.600
accessibilty
00:40.000 --> 00:42.000
intentions
00:44.700 --> 00:47.000
participation
00:48.200 --> 00:53.000
contribution
00:58.850 --> 01:02.000
GIDA C.A.R.E.
</script>
Notes:
Building a coalition of stakeholders involves explaining the goals of the project and inviting participation and feedback. This is the opportunity to build relationships founded on respect, reciprocity, trust and mutual understanding. You can use open source practices developing the roadmap and documentation of the process in an open, collaborative way. As soon as possible you should have mock-ups of the final work and descriptions or mock-ups of how access to the dataset would work for the community to help everyone imagine the future you are working towards together. 

This roadmap should address the consensual building of the dataset, how it will be accessible to the community, and how you intended to use and publish it. You should also detail how the community can participate and how that will be acknowledged. What labour is required and what contribution is optional and how that contribution will be accepted.

If the data is coming from Indigenous sources, like in this example, you'll want to go through the [GIDA CARE Principles](https://www.gida-global.org/care) and address each one.


<!-- .slide: data-audio-src="../audio/data/38-seg3.ogg" data-background-video="../video/fade_to_black_seasons_small.mp4" data-background-size="contain" data-background-color="black" -->
<h3 class="dynamic-text"></h3>
<script type="text/vtt">
00:12.500 --> 00:20.200
seasonality
00:27.000 --> 00:31.200
track everything
00:33.900 --> 00:40.800
recordings
00:50.200 --> 00:56.700
metadata
00:58.100 --> 01:02.200
Local Contexts
01:03.750 --> 01:06.800
OpenRefine
01:12.100 --> 01:15.500
free & open
</script>
Notes:
In this example, timelines for getting access to existing art and cultural works to photograph them as well as guided tours of the geography would be necessary. It may be necessary to photograph 3-4 times at different times of the year to incorporate all seasonal changes, and certain cultural artifacts may only be available seasonally. Visits to various community and personal dwellings will likely need to be coordinated, compensated and acknowledged. Keep track of everything, detailed notes will save you countless hours later! You can, with consent, also record audio and/or video of the data collection process, which can be consulted later to confirm the notes or catch mistakes.

There may be data that is requested to remain private to just the community or even certain parts of the community, so each data point and photo should have a list of metadata associated with it. This metadata should encompass current and potential future use cases. We can use the Local Context tags to identify cultural data practices. Using a tool like OpenRefine can help with metadata management. 

Data formats and all tools needed for access and contribution to the dataset should be free and open, so no additional payments are required.

### Credits
* https://www.gida-global.org/care
* https://kitekitekitekite.com/portfolio/items/indigenous-protocols-and-artificial-intelligence-position-paper/


<!-- .slide: id="maintenance" class="zoomin-left" data-audio-src="../audio/data/39.ogg" data-background-image="../images/end_of_life_for_data_in_cyberpunk_style.webp" data-background-opacity="0.7"-->
## The Art of Maintenance

Notes:
One important step often overlooked in art and tech practice is designing for maintenance and end of life. End of life for data requires decisions about data retention and deletion, but also encompasses recycling or reuses of hardware. In this section I am going to focus on maintenance.


<!-- .slide: data-audio-src="../audio/data/40.ogg" data-background-image="../images/feldmangallery.com--Ukeles-Washing-Tracks-Maintenance-Outside-1973.jpg" data-background-opacity="0.8" -->
Maintenance is a drag; it takes all the fucking time (lit.) The mind boggles and chafes at the boredom. The culture confers lousy status on maintenance jobs = minimum wages, housewives = no pay. <!-- .element: class="quote" -->
_Mierle Laderman Ukeles in "Manifesto for Maintenance Art, 1969!"_ <!-- .element: class="attribution" -->

Notes:
Maintenance is a drag; it takes all the fucking time (literally). The mind boggles and chafes at the boredom. The culture confers lousy status on maintenance jobs equal minimum wages, housewives equal no pay.

Artist Mierle Laderman Ukeles manifesto lays out an approach where Care, i.e. the labour of maintenance, is Art. It is worth reading the entire manifesto, and I think the devaluing of maintenance work, especially due to its association with gendered labour is important to understand, but I want to emphasize the most practical aspect: maintenance takes all the time.

David Graeber, who was an anthropologist and anarchist activist, points this out too in his work on the care economy:

### Credits <!-- .element: class="attribution" -->
* [_Maintenance Art Works_ - Mierle Laderman Ukeles](https://feldmangallery.com/exhibition/193-maintenance-art-works-ukeles-5-8-6-13-1998)

### Credits
* https://kortina.nyc/notes/n/manifesto-for-maintenance-art-1969/


<!-- .slide: data-background-video="../video/Graeber.mp4" data-background-size="contain" data-background-color="black" data-background-opacity="0.8"-->

But a teacup or a bottle, well you know, you produce a cup once. You wash it like ten thousand times. Most work isn’t actually about producing new things, it’s about maintaining things. <!-- .element: class="quote" -->

Service to others is a type of care work. Production and maintenance of things that meet others' needs and improve others freedom is a type of caring for others. <!-- .element: class="small" -->

...A parent takes care of a child, so that that child can grow and be healthy and flourish. That’s true. But in an immediate level, you take care of a child so the child can go and play. That’s what children actually do when you’re taking care of them. What is play? Play is like action done for its own sake. It’s in a way the very paradigm of freedom. Because action done for its own sake is what freedom really consists of. Play and freedom are ultimately the same thing. <!-- .element: class="quote" -->
_David Graeber_ <!-- .element: class="attribution" -->

Notes:
But a teacup or a bottle, well you know, you produce a cup once. You wash it like ten thousand times. Most work isn’t actually about producing new things, it’s about maintaining things.

Service to others is a type of care work. Production and maintenance of things that meet others' needs and improve others freedom is a type of caring for others.

A parent takes care of a child, so that that child can grow and be healthy and flourish. That’s true. But in an immediate level, you take care of a child so the child can go and play. That’s what children actually do when you’re taking care of them. What is play? Play is like action done for its own sake. It’s in a way the very paradigm of freedom. Because action done for its own sake is what freedom really consists of. Play and freedom are ultimately the same thing.

### Credits <!-- .element: class="attribution" -->
* [_From Managerial Feudalism to the Revolt of the Caring Classes_ - David Graeber](https://media.ccc.de/v/36c3-11241-from_managerial_feudalism_to_the_revolt_of_the_caring_classes)
* [_Holding hands_ by cchana](https://wordpress.org/openverse/image/3b2c795a-c7e9-4dc6-9e91-fa7abe2b45c3)

### Credits
* http://opentranscripts.org/transcript/managerial-feudalism-revolt-caring-classes/
* https://en.wikipedia.org/wiki/David_Graeber


<!-- .slide: data-audio-src="../audio/data/41-seg2.ogg" data-background-video="../video/ElectricSheep.org-27688359-background.mp4" data-background-video-loop -->
<h3 class="dynamic-text"></h3>
<script type="text/vtt">
00:01.500 --> 00:03.500
for its own sake
00:05.750 --> 00:10.400
art = play = freedom
00:13.400 --> 00:15.500
open & ethical
00:16.800 --> 00:21.500
care creates freedom
00:24.700 --> 00:28.200
maintenance maximizes freedom
00:29.000 --> 00:42.000
sustainable care
00:46.000 --> 00:49.300
freedom through maintenance
</script>
Notes:
Art too is for its own sake. Thus your dataset when used for art is about creating freedom, first for yourself and then for everyone else who has access to it. That is why it is critical to make it in an open and ethical way. This concept of care work as freedom generating is also important to Indigenous feminism.

But it is not just the creation of the dataset but the maintenance of that data that is critical for maximizing freedom. Care must be taken to minimize the maintenance costs and consider how to sustain the maintenance work of the dataset. When you are designing your project, all other things being roughly equal, choose the option that is best to maintain. Remember, the vast majority of the time and effort required and the freedom generated by the project is through maintenance.


<!-- .slide: class="zoomin" data-audio-src="../audio/data/42.ogg" data-background-image="../images/end_of_life_for_data_in_cyberpunk_stle_2.webp" -->
Notes:
Sadly there are few tools and even fewer sources of funding for maintenance work for art projects, unless your work is accepted by a major cultural institution into their permanent collection. Any project, art or otherwise, that uses computer hardware and software also rapidly becomes a maintenance nightmare. The cultural changes needed to prioritize maintenance and care over development and production are slow, but in the meantime we'll do what we can.


<!-- .slide: class="pandown" data-audio-src="../audio/data/43.ogg" data-background-image="../images/DisCo.jpg" -->
### DisCo <!-- .element: class="hidden" -->
<h3 class="dynamic-text"></h3>
<script type="text/vtt">
00:03.600 --> 00:05.900
distributed cooperative organization
00:06.100 --> 00:08.200
Guerrilla Media Collective
00:13.100 --> 00:15.500
Transnational Institute
00:16.300 --> 00:20.000
DisCos
</script>
Notes:
One of the best examples of a successful care-first model is the [distributed cooperative organization](https://disco.coop/), the [Guerrilla Media Collective](https://disco.coop/labs/guerrilla-media-collective/). They have documented their practice and created a wonderful manifesto in collaboration with the [Transnational Institute](https://www.tni.org/), to help others learn about distributed cooperative organizations or DisCos.

Their documents detail a number of important principles, but there are three that I want to highlight here:

### Credits <!-- .element: class="attribution" -->
* Image by [Felipe Duarte](https://disco.coop/felipe-duarte/)


<!-- .slide: class="pandown" data-audio-src="../audio/data/44-seg1.ogg" data-background-image="../images/DisCo-carework-at-the-core.jpg" data-background-opacity="0.4" -->
<ul>
<li><strong>Care work is the core</strong>: organizations and collaborations are living entities on two scales: the entity and the members that constitute it. Both need care work to maintain their health and well-being.</li>
<li class="fragment" data-audio-src="../audio/data/44-seg2.ogg"><strong>Put your effort where your heart is</strong>: use values-based accountability. Production is guided not by profit but by social and environmental priorities.
<li class="fragment" data-audio-src="../audio/data/44-seg3.ogg"><strong>Building whole-community governance</strong>: extend decision-making and stewardship to all contributors and those affected by your organization's actions.
</ul>

Notes:
**Care work is the core**: organizations and collaborations are living entities on two scales: the entity and the members that constitute it. Both need care work to maintain their health and well-being.

**Put your effort where your heart is**: use values-based accountability. Production is guided not by profit but by social and environmental priorities.

**Building whole-community governance**: extend decision-making and stewardship to all contributors and those affected by your organization's actions.

These principles reflect the similar ideals we have seen in other feminist economic movements. 

### Credits <!-- .element: class="attribution" -->
* Image by [Felipe Duarte](https://disco.coop/felipe-duarte/)

### Credits
* https://disco.coop/
* https://disco.coop/labs/guerrilla-media-collective/
* https://wiki.guerrillamediacollective.org/index.php/Main_Page
* https://wiki.guerrillamediacollective.org/index.php/Working_Circles
* https://www.tni.org/


<!-- .slide: class="panup" data-audio-src="../audio/data/44-seg4.ogg" data-background-image="../images/DisCo-carework-at-the-core.jpg" data-background-opacity="0.8" -->
### Care work at the core <!-- .element: class="fadeout" -->
Notes:
Care work at the core makes clear that every collaboration requires maintenance and sustenance of both the collaboration and all the contributors to the collaboration, both human and non-human, animate and inanimate. 

These DisCo principles work well in dataset collaborations with diverse sets of contributors with different needs. Put care work at the core, guided by your shared values, for all contributors and those affected by your decisions and actions.

### Credits <!-- .element: class="attribution" -->
* Image by [Felipe Duarte](https://disco.coop/felipe-duarte/)


<!-- .slide: class="pandown" data-background-image="../images/DisCo-reimagine-flows.jpg" data-background-opacity="0.33" -->
### Tools <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg1.ogg" -->
1. Clock/timer to track work (punch clock) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg2.ogg" -->
2. Synchronous group and individual communication (cafeteria or desk chat) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg3.ogg"-->
3. Asynchronous communication / decision-making (boardroom) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg4.ogg" -->
4. Task and project management (whiteboard and planner) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg5.ogg" -->
5. Collaborative writing and file-storage (file cabinet) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg6.ogg" -->
6. Wiki documentation (public report) <!-- .element: class="fragment" data-audio-src="../audio/data/45-seg7.ogg" -->

Notes:
What sort of tools are needed to manage maintenance and care work?

The Guerrilla Media Collective uses browser-based software and services, which allows for a single piece of software with various interfaces customized to the specific task at hand.

Beyond project specific tools, they use 6 different types of tools for all projects:

1. Clock/timer to track work (punch clock)
2. Synchronous group and individual communication (cafeteria or desk chat)
3. Asynchronous communication / decision-making (boardroom)
4. Task and project management (whiteboard and planner)
5. Collaborative writing and file-storage (file cabinet)
6. Wiki documentation (public report)
 
I would recommend all open source software for these choices and the companion document has more details on this, but options can be limited based on access to technical help and Guerrilla Media Collective has chosen online services that are not open source for some of their tools.

### Credits <!-- .element: class="attribution" -->
* Image by [Felipe Duarte](https://disco.coop/felipe-duarte/)

### Credits
* https://wiki.guerrillamediacollective.org/Category:Tools

---
<!-- .slide: data-audio-src="../audio/data/46.ogg" data-background-image="../images/a_black_box_that_no_one_can_see_inside_3.webp" data-audio-advance="2000" -->
[**Data in Practice companion document**](./companion.html)

Notes:
I've put together a document that goes into further details on all the information we've covered in this tutorial. You can find it at this link.

---
<!-- .slide: data-audio-src="../audio/data/47.ogg" data-background-image="../images/Five_Directions_dark.webp" data-background-opacity="0.9" data-audio-advance="800" -->
# Thank you

<div class="backdrop">

1. [Foundations](../foundations/) <!-- .element: class="lighten" -->
2. [Past, Present, Future](../past_present_future/) <!-- .element: class="lighten" -->
3. [Neural Nets](../neural_nets/) <!-- .element: class="lighten" -->
4. **Data in Practice**
5. ***Machine Learning Art*** 

</div>

Notes:
Well, that's the end of the fourth tutorial. Thank you for your attention. I hope you'll check out the next in the series; Machine Learning Art, where we'll look at specific art projects and artists and how they have adapted ML into their practice, examples of popular tools, and consider some project ideas.

See you there!

