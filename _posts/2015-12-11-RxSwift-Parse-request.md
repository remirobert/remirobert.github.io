---
title: RXSwift Parse request
---

<p class="lead">How to user <strong>Parse SDK</strong> with <strong>RxSwift</strong></p>

I use **Parse** a lot for my personals projects, or even for hackathons, et some experimentations.
So I know well the **iOS SDK**, than **Parse** provide us, and it's actually really awesome, and very simple to use 😮.
I am currently trying, to write an extension of all SDK's method, and class, for **RxSwift**, and use *reactive programming* pattern with **Parse**.
So here, just a very brief example of to make a very simple query throw **RxSwift**.

### Creating a custom observable

**RxSwift** allows us to create some custom **Observable** very easily.
For this example the idea 💡 is just to wrap the Parse request execution, in a **Observable**. 

{% highlight swift %}
func fetchQuerry(querry: PFQuery) -> Observable<[PFObject]?> {
  return RxSwift.create({ observer in
    querry.findObjectsInBackgroundWithBlock({ objects, error in
      if let error = error {
        observer.onError(error)
      }
      else {
        observer.onNext(objects)
        observer.onCompleted()
      }
    })
            
    return AnonymousDisposable {
      querry.cancel()
    }
  })
}
{% endhighlight %}

And then if we want to call it: 

{% highlight swift %}
let querry = PFQuery(className: "Good")
        
fetchQuerry(querry).subscribe { event in
  switch event {
  case .Next(let objects):
    print("objects fetched : \(objects)")
  case .Error(let error):
    print("error: \(error)")
  case .Completed:
    print("completed")
  }
}.addDisposableTo(self.disposeBag)
{% endhighlight %}

**Parse** uses currently the **Bolts** framework, which is very awsome, to manage *async operation*.
An example how to combine several requests, and then combine the fetched datas, in a very extremely easy example:

{% highlight swift %}
RxSwift.combineLatest(fetchQuerry(querry), fetchQuerry(querry)) { (goods1, goods2) -> [PFObject] in
  var combineGoods = [PFObject]()
  if let goods1 = goods1 {
    combineGoods.appendContentsOf(goods1)
  }
  if let goods2 = goods2 {
    combineGoods.appendContentsOf(goods2)
  }
  return combineGoods
 }.subscribeNext { finalObjects in
  print("combined objects : \(finalObjects)")
}.addDisposableTo(self.disposeBag)
{% endhighlight %}

So far as we have a **Observable**, we do everything, can be an awsome wrapper for the **Parse SDK**, with a great design.
