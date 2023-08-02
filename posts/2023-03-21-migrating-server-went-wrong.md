---
title: Migrating server went wrong
author: Batuhan Yılmaz <batuhan@thebatuhansnetwork.xyz>
date: '2023-03-20 20:01:28'
---

Hello everyone I’m Batuhan. 2 days ago I decided to migrate my new server’s 80 GB OS HDD into a 32 GB USB 3.0 drive and even tho migration has finished without any problems but since we aren’t livin in the perfect world. It created lots of problems and I had to reverse it and now the site you’re currently in works from that HDD. Let’s hope into details.
The idea of doing this migration isn’t actually new. I had that idea since the day I got this server. Becouse Hdd of this server is an OEM Seagate Barracuda 80 GB drive from January of 2010 and at the time I got this server it had total of 38K hours of runtimes and 2 days ago this number was about to hit to the 39K. Actually drive works perfectly fine. I never encountered any problems with it. Since its most I/O tasks are done while the server boots and it just idles most of it’s uptimes. But since this drive is an 13 years old drive it just scares me. To fix that not existing problem I was thinking about doing a whole reinstall of the Debian 11 on that USB drive and start from fresh on my server which I already did 5 weeks ago lol. Than I gave up from that idea becouse reconfiguring things and most importantly the RAID 1 isn’t a thing I would like to do and for that I decided to clone the OS drive and continue from where I left before. But sonce I said earlier we aren’t living in the perfect awesome world and things always goes wrong.
The migration progress went perfectly fine. To do the migration I booted up my laptop and ssh’d into server, than used dd to create an image of the HDD and after getting the image I used the gzip to compress it. I used [this wiki page](https://wiki.archlinux.org/title/Dd) as an referance on Ach wiki to do that. Please be carefull when using DD on your own machine.
After getting the image and compression progress is done. I copied the image to my Laptop using Nautilus (Yes I used a GUi program instead of scp command line. I don’t use Arch btw.) While the imaging the drive, I downloaded the Clonezilla-live and created a VM with it. After that I mounted my Ventoy USB, Clonezilla LiveCD, the USB drive I’m gonna use for the OS and the image I just got from my server into the virtual machine and booted it. Before migrating anything I had to do some changes on the image. Becouse the image was to big for my 32GB USB and that scares the clonezilla. For that I booted the Fedora 38 pre-release from the Ventoy USB and changed the partitions of the image. I removed the swap and resized the root partition to 26 GB and it went perfectly fine. After that I booted up the CloneZilla Live and cloned the image to the USB drive. Until that actually everything went perfectly fine. But the problems started when I try to boot the USB on my server.

### Problem 1:

So the first problem I encountered is mdadm. First thing that showed up when I booted up my server was mdadm wasn’t detecting my RAID 1 and becouse of that fstab was failing to mount the RAID volume and OS wasn’t booting. To investigate the problem on the OS side I shutdown the server and plugged that USB back to my laptop and edited the fstab and commented it out. And after that it booted just fine if we don’t mind the mdadm errors.

### Problem 2

The second and the biggest problem was the server was slow. In any terms it was very slow. For some reason when I boot the USB on my Laptop via the USB 3.0 port it runs perfectly fine but on server it was slow as hell. And that was leading systemD to go crazy. Booting it up were takes 2 minutes and even logging on over the TtY were almost impossible. It was leading the OS to crash after waiting for 5 minutes.

These were the 2 problem I was having and since I already had 3 days of downtime I wanted to give up on it and just keep a backup of the drive on my laptop and do a reinstall of the OS when it's time has come. But for now it works perfectly fine and on programming world we have term. If it works, don't fix it.  And this is what I'm going to do.


## Thank You!

Batuhan Yılmaz - 21.03.2023 - 9/100
