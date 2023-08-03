---
title: Configuring Jekyll
date: 16.06.2022
author: Batuhan Y. Yılmaz
---

Hello everyone I’m Batuhan and today I’m going to talk about how I configured my Jekyll Blog from it’s stock look and feel to the current look and feel.

## Installing Jekyll and it’s plugins
Firstly you need to install Jekyll according to the documention. [Jekyll on Ubuntu | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/installation/ubuntu/) Since I’m using Ubuntu Server I linked the one for Ubuntu but it could work on other Debian based distros. Than I installed the[GitHub - tocttou/hacker-blog](https://github.com/tocttou/hacker-blog) theme by cloning it into a folder and configuring the _config.yml file. 
### Plugins 
Of course I’m using couple of plugins to improve the Jekyll experience.
These are the 
* Jekyll SEO tag 
* Jekyll Admin
* Jekyll Sitemap
* Jekyll Paginate
I’m using these plugins for improving the blog and creating posts easier. The Admin plugin is generally disabled because of the security flaws that it has but when creating posts I’m enabling it, creating post and disabling it.

This was basically an easy thing to setup as I want. Now let’s talk about why I’m not hosting that website on a GitHub pages and using my own server.
So basically hosting stuff on my own server is always better than hosting it somewhere online. But I’m gonna host a backup on Github pages too. Because my server could be unreliable sometimes and having a backup on Github is always a nice thing.

## How I setup the server side
So lets come to the most important part. Most people online has setup their server using ngix web server but I already have a Apache2 server setup and I don’t want to mess up with my server by setting up another web server or trying to get Apache working while breaking other websites. So for that I just used the Jekyll’s built in server function and systemd. 
But in there I had to install every GEM that I installed on my user on the root user to get the systemd serivce working. Otherwise it would show as working but in journals Ruby just spams a lot of can’t find gem errors. But it works now and here is the system.service file that I used for my setup:
```
[Unit]
Description=Jekyll
After=cloudflared.service # Staring it after cloudflared. You can change that.
[Service]
User=<user> # You need to replace it with the user that you want to run your blog.
TimeoutStartSec=0
Type=notify
WorkingDirectory=<directory of your blog>
ExecStart=/home/<user>/gems/bin/jekyll serve #The Jekyll executable that's located in your users home folder. You have to change that tho.
Restart=on-failure
RestartSec=10s

[Install]
WantedBy=multi-user.target
```
It was that simple and hopefully it works for you too. But always there is a chance of a thing that works for me not works for you. So in that situation you can come to our [Discord server](https://discord.gg/jt5wXUKa) and get help from there. 

### Thank You.
