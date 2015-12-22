---
title: React native 🆚 Swift
---

The title of this post is a bit strange and does not reflect entirely the content. I was wondering, after some experimentations, if **React native** was **faster** for the development 🤔. I am currently starting to think so. I will show you, with a very simple app. An App that's displaying an animated Image fetched on internet and a simple label. With auto layout of course. 👊

![Image alt]({{ site.baseurl }}/assets/img/simulator34.png "iphone")

### Swift
Alright, first in iOS, it's currently not possible to displaying an GIF, with an UIImageView, and Apple doesn't provide any component. The only solution should be to extract each frames on the GIF to an **UIImage**, and then use the **UIImageView** with the *animatedImages* property. No way !

A little bit messy, and hard stuff for nothing. So **cocoapods => FLAnimatedImage**.

Second point, the auto-layout. When you want to use it without StoryBoard, programately, it's a very big mess, and the API provided by Apple, is not very clear and readable. So one more time : **cocoapods => SnapKit**.

So, to create something, simple and clear code, we must to use some extra libraries for **iOS** (*this is only my point of view*).
This is the PodFile:

{% highlight ruby %}
use_frameworks!

pod 'SnapKit'
pod 'FLAnimatedImage'
{% endhighlight %}

<br/>

<script src="https://gist.github.com/remirobert/4cdb0c04e8329df03289.js"></script>

<br/>

### React native
For **React native**, everything is already provided. For the animated image, the **Image** component, is able, to download an image in async, and display animated Image !! For the auto-layout, we use **flexbox** here. Extremely clear, and easy to understand. Sounds perfect (*maybe it is...*).

<script src="https://gist.github.com/remirobert/27beba94b8d7e100f077.js"></script>

<br/>

### Conclusion
As we see, it's not a matter of number of lines, but about the complexity. The **iOS** code, at first, could be difficult to understand due first, about the librairies I am using. *It looks like we have a very big and heavy stuff here*. 🙀

For the **React native**, it looks very very easy to read. And also because the style is split to the implementation. It lightens the code.
That's the power of **React native**.

![swift vs react native](http://i.giphy.com/UXmasLUziR2Te.gif)

That's all for my comparaison 👋🤓.
