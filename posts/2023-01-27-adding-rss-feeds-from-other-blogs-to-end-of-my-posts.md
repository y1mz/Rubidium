---
title: Adding RSS feeds from other blogs to end of my posts
date: 26.01.2023
author: Batuhan Y. Yılmaz
---

Hey guys I'm Batuhan and at the second post of this day I'm gonna talk about how I added latest posts from the RSS feeds I follow to my blog.

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202023-01-26%20at%2023.58.40.png)

Like that. 
So to do that I used a script named openring to do that. openring is a simple script that creates webrings using the RSS feeds. It fetches the RSS feeds that you've provided and creates an html file that you can place  into includes folder. So let's go a step by step on how you can do that.

### 1 ) Install go

So this script has written in go and before start using it you have to compile it using go. I'm currently on macOS and gonna show the macOS way. But if you're on a different OS than me you can go to https://go.dev/dl/ page and download the right binary for your OS. 
I'm going to use the macPorts to install the go into my system. To install it use the command ``` sudo port install go ``` and wait for it. After that you can get into step 2.


### 2 ) Clone openring and build it

Now open your terminal again and clone the openring using the command down below.
```
git clone https://git.sr.ht/~sircmpwn/openring && cd openring
```
After that command is done, run the ```go build ``` command and wait for it. After it's done, you can continue to step 3.

### 3 ) Use the openring

And here is the step that we're going to use the openring. Using it is very simple. 

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202023-01-27%20at%2000.21.39.png)

Now in there you can see a file named in.html. This file is our template, you can edit this file for your site's needs and have a much better look that fits into your site. Now we're going to create a file named out.html that includes our posts using the openring. To create that file you can use the command I put down below. 
```
openring \
-s https://www.joelchrono12.xyz/feed.xml \ 
-s https://andy-bell.co.uk/feed \ 
-s https://kevquirk.com/feed.xml \
< in.html \
> out.html 
```
This command takes the in.html, adds 3 sources I placed and outputs it as the out.html. You can change these feeds as you like these are the ones that I've added to my site. 

So now it's time to switch into jekyll part.

Now in order to add our webring to our Jekyll blog. This part is really simple. 
So now place the out.html file that you just created into _includes folder inside your jekyll blog and after that go to your _layouts folder and open the post.html file.  After that place the 
``` % include out.html % ``` line under the main tag. 

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202023-01-27%20at%2000.42.42.png)

Like in that picture. And you're done. 

I hope this post helps to everyone who wants to use openring on their own blog site. I wrote that blogpost while I'm so sleepy and I'm sorry for any mistakes I had. 


## Thank You!

Batuhan Yılmaz - 27.01.2023 - 5/100
