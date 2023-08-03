---
title: I'm using an Hackintosh for 6 months. Now what?
date: 23.06.2022
author: Batuhan Y. Yılmaz
---

Hello everyone I'm Batuhan and I'm a Linux user for the past 8 years and I'm using an hackintosh as my daily driver on desktop for 6 months. And I'm always asking myself that question: Now what? Am I gonna ditch the Linux on desktop or just gonna reinstall Fedora? Let's talk about that.

## Beginning
So the idea of hackintoshing my Dell Optiplex 7050 was a thing that I really wanted to do since the 2019, the year that I got my computer. Since then I tried hackintoshing 3 times until I got it running sucsessfully on the hardware. Before that I was using an Ivy Bridge computer with macOS High Sierra running on it with clover bootloader. And since I was knew a bit about clover and I wanted to use clover for my second hackintosh and it was unsuccessful. For some reason the OS just kept kernel panicking and I was gave up on it. Than 1 year later I found out that a bootloader named OpenCore exist and I wanted to try it for a second time. And the result of it was better. I was able to get the installation screen and I was able to install macOS Catalina into the HDD and it was working fine. Until I realized that the GPU acceleration wasn't working on either iGPU or dGPU. So in there I was gaved up second time. And after doing some research I found out that a guy got macOS running perfectly fine on his Dell Optiplex 7050 Micro which doesn't have much difference than the tower which I have. So I started to working on his EFI and after tweaking it a bit I was able to fix the GPU problem that I had and was able to run Catalina perfectly fine. Than I tried upgrading the OS like a real mac and it ran pretty well. I was able to upgrade to the Monterey from Cataling and I didn't had to change anything on the EFI side. I was too happy about that becouse not just I got it working without any problem, I was got an Unix based OS which could run some of the Linux apps that I was using a lot via the Macports and can run the properitary Adobe programs that I need soo much becouse of our video projects.

## What I'm gonna do in future?
So as you know the next release of the macOS named Ventura got announced and cut support for lot's of devices. So the good side is it's compatible with my hardware and the SMBIOS I do use so I can upgrade it. But I'm not gonna upgrade to the Ventura anytime soon. Even if it becomes stable. The reason for this is becouse there is not a real difference between these 2 versions of the OS. And there is always the risk of breaking a working system which I don't really want to do. But when the patchers for the old hardware comes out I'll try to get it running on my old computer which has a Intel Core I5-3570K CPU in it.

## What I'm doing with my Hackintosh?
So let's come to the question that's important for me. What I'm doing with my computer. So the main thing is I do play games like OSU!, Minecraft, CIV6 and Terraria ,doing video editing a lot. Like I do have 3 different video editing software installed on my computer and I do use 2 of them a lot. These are the KDEnlive and Adobe Premiere PRO. Since I know both of these software I do use them. KDEnlive for basic video editing like cutting videos, merging videos or just adding a background music to them. And using Adobe Premiere PRO for advenced tasks. And virtualizing stuff with the UTM APP and QEMU. Otherwise I'm mostly using it for web browsing and my computer really does these tasks really well.

Also I want to point a thing that most people online just loves to judge these Dell Optiplex users and says "Oh do you have a Optiplex man my toaster is more powerfull than your computer". I know most people not gonna think same with me but I believe that these computers are really fast and powerful computers if you use them in the right configration. Like using custom AMD GPU drivers named NimeZ on Windows 10 really unlocks the potential of the stock GPU that computer comes with.

## Now what?
So as I asked on the header of that post is "Now what?" So I'll keep it using until I decide to switch back to Linux on my desktop. But until that I'm going to keep it on the macOS Monterey and use it for my daily bases and if I do need a Linux environment runs on bare metal hardware, I can just use my server for that. It has the complete same hardware in it expect the storage side and I even used it while building the EFI and it helped me a lot while tinkering stuff.  So even if I need Linux I don't need to install it.

## Should you create a hackintosh?
So if you gonna ask me that question my answer will be no, unless you have free time and want to mess up with your hardware. But why I said no? Becouse believe or not building an hackintosh needs a lot of time and passion. It doesn't ends with just installing the OS, you need to do lot's of testing after installing OS, like getting the sleep working, mapping your USB ports, getting wifi and bluetooth working and etc. It needs lot's of time and tinkering to get it running stable as a real mac.  You don't have to do these stuff or have to tinker that much on even installing Gentoo, I'm serious about that. If you need a computer for production I just suggest you to go and install either Windows or Linux. But even ef you want to do an hackintosh than good luck man, just make sure you have an extra computer while working on your hackintosh.


Thanks for reading that blog post. This was a post that I really wanted to share with you for long time. If you want to build a hackintosh or discuss about technology, please join our [Discord server](https://discord.gg/jt5wXUKa) !

# Thank You!
