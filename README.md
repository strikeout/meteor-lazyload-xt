# Lazy Load XT jQuery plugin


Mobile-oriented, fast and extensible jQuery plugin for lazy loading of images/videos with build-in support of jQueryMobile framework.

Currently tested in IE 6-11, Chrome 1-31, Firefox 1.5-27.0, Safari 3-7, Opera 10.6-18.0, iOS 5-7, Android 2.3-4.4, Amazon Kindle Fire 2 and HD 8.9, Opera Mini 7.


### Install

`meteor add strikeout:lazyload-xt`


### Usage


For normal images

`{{> img src="/img/test123.png" }}`

Normal with width and height

`{{> img src="/img/test123.png" width="909px" height="303px"}}`

For responsive images (create three seperate images for retina 2x resolution screens, small screens and small screens with retina 2x resoultion)

`{{> img srcset="/img/test123-retina.jpg 2x, /img/test123-small.jpg 360w, /img/test123-small-retina.jpg 360w 2x" }}`
