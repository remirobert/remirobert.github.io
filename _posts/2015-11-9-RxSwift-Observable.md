---
title: RXSwift Observables
---

<p class="lead">Discovery of some <strong>observable</strong> creation method very useful for <strong>RxSwift</strong>.</p>

I recently discovered reactive programming, after experiencing the [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) framework, I started to [RxSwift](https://github.com/ReactiveX/RxSwift).
This post aims some way to generate **observable** available in the [RxSwift](https://github.com/ReactiveX/RxSwift) framework.
It's also a reminder for my future development, in case 🤔...


### ◼️ generate

{% highlight swift %}
func createObservable() -> Observable<Int> {
  return RxSwift.generate(0,
   condition: { (number: Int) -> Bool in
    //stop condition
    return number != 1000 ? true : false
  }) { (number: Int) -> Int in
    //handle the data
    //Iterate the counter here
    return number + 1
  }
}
{% endhighlight %}

### ◼️ repeat

{% highlight swift %}
func repeatObservable() -> Observable<String> {
  return RxSwift.repeatElement("hello world",
   MainScheduler.sharedInstance)
}
{% endhighlight %}

### ◼️ just

{% highlight swift %}
func jsutObservable() -> Observable<String> {
  return RxSwift.just("hello world")
}
{% endhighlight %}

### ◼️ sequence

{% highlight swift %}
func sequenceObservable() -> Observable<String> {
  return RxSwift.sequenceOf("hello", "world", "!!!")
}
{% endhighlight %}

### ◼️ range

{% highlight swift %}
func rangeSeqenceObservable() -> Observable<String> {
  return RxSwift.range(0, 5).map({ (_) -> String in
    return "hello world"
  })
}
{% endhighlight %}

### ◼️ interval

{% highlight swift %}
func intervalObservable() -> Observable<String> {
  return RxSwift.interval(1, MainScheduler.sharedInstance).map({ (_) -> String in
    return "hello"
  })
}
{% endhighlight %}

### ◼️ timer

{% highlight swift %}
func timerObservable() -> Observable<String> {
  return RxSwift.timer(10, MainScheduler.sharedInstance).map { (_) -> String in
    return "hello"
  }
}
{% endhighlight %}

As we saw here, [RxSwift](https://github.com/ReactiveX/RxSwift) includes a number of convenience variations of Observable generation.
Which the implementation is very trival, and powerfull. **Awesome** !! 😼👍

Now how to call them :

{% highlight swift %}
rangeSeqenceObservable().subscribeNext { (value: String) -> Void in
  //Will print hello world 5 times.
  //How easy is it .... 😕
  print(value)
}.addDisposableTo(self.disposeBag)
{% endhighlight %}


