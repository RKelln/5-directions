# Data in practice

* Selection
* Existing repositories
* Preprocessing
* Types:
  * Timeseries
  * Image
  * Text
  * Audio
  * Video
* Avoiding pitfalls
* Making things
  * Questions
  * Maintenance
* Sharing ethically
  
Notes:
We'll start off by talking about how to select a dataset, then talk about places you can find existing datasets.

Next we'll talk about all the work that goes into preparing the dataset before it can be safely used as training data.

Then we'll go into the details for the diffrent types of datasets and discuss bias and fair distribution in more detail, as well as tools to explore and handle those issues.

We'll end with a bit more theory, but from a practical perspective, for how to make a dataset ethically.

Our goal is to get you started on finding or recording your own data, then cleaning and curating it so that it can be used in an ML project done in collaboration with ML engineers. We'll learn how to do this in a Good Way, and share it ethically with others.

---

# Selection

* How much data?
* Synthetic augmentation

Notes:
How much data do you need? There is no hard guide to this, but typically here is a sweet spot where performance gains dramatically but levels off after that. That point in real world datasets can be difficult to determine but people have suggested the "rule of 10": that you want roughly 10 times as many examples as there are parameters (i.e. neurons) in your model. (Most modern ML frameworks will be able to give you a parameter count of your model.) However, text, image, and video data which is very common in generative models usually requires more than this because of the noise in the data.

For classification you want enough data per "class" and roughly balanced data per classes, with recommendations for image classification at around 1000 images per class.

If you don't have enough data there some options, we'll get into specifics for the different types of datasets but the basic options are:



* Augmentation
* Transfer learning
* Synthetic data

Augmentation means applying transformations to your data, usually dynamically during training. For images this almost always includes horizontal flips, as most images are equivalent when mirrored. 

Transfer learning involves finding and using an existing fully trained network then using that to help train a new one. This can be done through retraining the model or using it as a teacher for your new student model. In the first case, sometimes the pretrained model has some layers removed, generally the highest level ones. Modle layers start from generic to task/data specific in the final layer. For example, if you are creating an image model you could take an existing image classification model trained on millions of images and replace the last layer (which is doing the classification) with new layers. You could remove a few more layers if you just wanted to keep the lower-level feature detection.

In the teacher-student approach a pretrained teacher is used to "teach" the student network to make similar predictions as the teacher. 

Both approaches require domain overlap, even better if the new model is subset of the data of the existing.

A final approach is synthetic data, common is basic ML research, but which isn't as widely used in generative models. It is growing in popularity in commerical settings, since it allows a business to de-bias and increase privacy of user data. Synthetic data for 3D datasets is also growing in popularity as labelling 3D data is difficult in real world settings. Synthetic data may be an interesting approach in generative art making as it allows for interesting combinations of data. For example, in my work Hot Bod I used one technique to do style-transfer of multiple different styles on to still images and then used those stylized images to train a generative model that could produce video animations of moving from one style to another.

Artists like Hans Brouwer use similar techniques to solve the problem of building an interesting dataset, often with a few cycles of generation through a model, synthetic transformation and then fed back through the model again.

### Credits
* https://machinelearningmastery.com/transfer-learning-for-deep-learning/
* https://wavefunk.xyz/blog/lakspe 
* https://wavefunk.xyz/blog/rhodops

---

# Preprocessing

* Cleaning
* Balancing
* Feature scaling
* Splitting
  
Notes:
Raw data is a mess. An old adage in computer science is "garbage in, garbage out". Carefully cleaning and curating your dataset is critical for the training process. 

Some of the basic tasks in cleaning the data, balancing the data between classes (for exmaple, you wouldn't want 10 times as many dogs as cats), checking the range of values and ensuring all the data has roughly similar ranges or sizes.

Then you may want to split your data into training, validation and test sets, as we discussed tutorial 3: Neural Nets.

---

# Existing datasets

* [UCI](https://archive.ics.uci.edu)
* [Kaggle]https://kaggle.com/datasets
* [Google dataset search](https://datasetsearch.research.google.com)
* [OpenML](https://www.openml.org/search?type=data)
* [DataHub](https://datahub.io/search)
* [AWS open data registry](https://registry.opendata.aws/)
  
* [Library of Missing Datasets](https://github.com/MimiOnuoha/missing-datasets)

Notes:
The above are good places to do general searches for datasets, many of the datasets are for business or research purposes, so aren't directly applicable for art making, but certain offer opportunities for associative and critical exploration. I'll discuss data specific aggregators (like image data sets) net, but I won't cover any government, business, science or otherwise strictly numerical dataset aggregators that you can usually find through these more general aggregators.

Existing datasets will still often need processing, although it is common to have a raw dataset version and cleaned version.

I've included Mimi Onuoha's project, _Library of Missing Datasets_ to give a sense of what data isn't being recorded and why they are missing.

### Credits
* https://www.v7labs.com/blog/best-free-datasets-for-machine-learning
* https://pub.towardsai.net/best-datasets-for-machine-learning-data-science-computer-vision-nlp-ai-c9541058cf4f
* https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research

---

# Time series data

Notes:
Time series data records values (typically from some sort of sensor or digital process). This includes temperature and weather data, economic data, population data, and physiological data.

I am not an expert on times series data and there is too much information to do more than a cursory look, so we'll just go over the basics and if this sort of data is of interest you can continue researching. Generally if you're using time series data for an art project you are:

1. Using real-time sensor data
   * Main issue is handling sensor failure and outliers in real time
2. Replaying recorded sensor data
   * The benefit here is that you can clean the data, otherwise similar to above
3. Predicting future data
   * Why is the prediction necessary vs recorded historical data?

For many projects you will not need to build a predictive model. Projects like [Auto_TS](https://github.com/AutoViML/Auto_TS) allow for building models in "one line of code".



Cleaning

Notes:
Time series data can often have null or missing values. Depending on how many there are you can delete them or try to fill them in with averages or other approximations from surrounding data.

You will want to check the boundaries of the data - the highest and lowest values. Using this process you can also look for outliers. You'll need to investigate values that seem far too high or low compared to the rest of the data, this could be from sensor failure or noise.



* Is mean-reverting or has explosive behaviour
* Has a time trend
* Exhibits seasonality or cycles
* Demonstrates structural breaks

Notes:
The first step of working with time series data is generally to visualize it in a graph plot. Depending on how much data there is this can be a useful way to check aspects of the data, along with statistical analysis:

Mean-reverting data returns to a value that is stable over time and it is important to know if this is at 0 or some other value. This data is called stationary.

Conversely, does the data have a trend or non-stable shape? Data can have cycles or seasonality. You may want to de-trend the data (sometimes you can find seasonally adjusted versions) or use a model that incorporates seasonality.

The worst case scenario for time series data is probably structural breaks. These are large sudden shifts in the data. You'll likely need to have special models or otherwise transform the data so that it is comparable.

### Credits
* https://www.aptech.com/blog/introduction-to-the-fundamentals-of-time-series-data-and-analysis/



# Existing datasets

* [Time Series Data Library (TSDL)](https://pkg.yangzhuoranyang.com/tsdl/)
* [GapMinder](https://www.gapminder.org/data/)
* [Our World in Data - Biodiversity](https://ourworldindata.org/biodiversity)
* [HYDE (History database of the Global Environment)](https://www.pbl.nl/en/image/links/hyde)

Notes:
Time series data can be easily found in the general dataset searches, but there a few others worth mentioned, particularly if you have a environmental focus:
* TSDL was created by Rob Hyndman, Professor of Statistics at Monash University, Australia and contains
* GapMinder has hundreds of indicators of global well-being, health, environment, etc
* Our World in Data has a variety of biodiversity datasets
* HYDE has a wide variety historical data covering the entire Holocene (12000 years or so)



# Sensors

[FieldKit](https://www.fieldkit.org/)

Notes:
If you want to collect data yourself, then you'll want to look into FieldKit, an opensource platform for research grade hardware, a software platform for handling that data and community to help with the process.

Sensor kits start around $150 but a full set of weather sensors is up to $400 USD.This FieldKit station can record temperature, relative humidity, barometric pressure, wind speed, wind direction, and rainfall. They also have kits of water measurements and soon air quality measurements.

There is a growing community of conservationists trying to make opensource sensor and data tools. Check out [WildLabs](https://wildlabs.net/) and [Conservify](http://conservify.org/).

### Credits
* https://www.fieldkit.org/
* https://wildlabs.net/
* http://conservify.org/

---

# Image data

Notes:
Image data is self-explanatory but there are some important details. The format of the data can matter. Although it takes far larger amounts of pace, PNG formatted images suffer from less compression artifacts than JPEGs, although the vast majority of image data is still using JPEG format, and it won't help to use PNG versions of JPEGs since the data loss caused by compression happens when saved as a JPEG.



Scraping

Notes:
Many technical artists use software scripts to "scrape" images from sources like Flickr. There are a number of issues with this, both technically and with copyright licences. It is possible however to download Creative Commons licenced digital photographs (that allow for use ether or without attribution) from Flickr. Remember to keep a list of the image URLs if you are releasing the dataset so that you can respect the attribution requirement of the licences.




[Openverse](https://wordpress.org/openverse/)
[Flickr CC](https://www.flickr.com/search/?text=&license=2%2C3%2C4%2C5%2C6%2C9&media=photos)
[Rawpixel PD](https://www.rawpixel.com/category/53/public-domain)
[Pexels PD](https://www.pexels.com/public-domain-images/)
[Unsplash](https://unsplash.com/)

Notes:
You can also collect images manually, although be prepared to invest a lot of time. There are a number of sites that you can use for public domain or Creative Commons (CC) licenced images.



Preparing

Notes:
Images may have watermarks, frames, and other extraneous information on them. They should be cropped or removed.

The main challenge with images is resolution and/or dimension. Most models require a particular resolution of image to train on and usually a square resolution that is relatively small. 1024 x 1024 is quite large for contemporary training. This is a giant pain.

