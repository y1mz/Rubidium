2 weeks ago I got myself 2 used Optiplexes and my idea with them was recreating my old setup and today I'm going to recreate my Optiplex Server. Before creating it I planned my use cases.
1. A webserver inside a Debian VM
2. A Nextcloud server inside Ubuntu Server 22.04 VM
3. SMB server for file sharing on local
4. A Minecraft server running bare metal
5. And some tiny services like dashy and uptime kuma inside a Arch VM. (I use arch btw)
These were the summary of things I planned to run on this server. So for that I needed to find the perfect OS for it. What I mean by that is, it should be optimized for virtualisation and it should be stable. And for these reasons I decided to go with Rocky Linux 9.1. I went their website, downloaded iso, burned using balenaEtcher and step 1 was completed. !![etcher](https://cdn.discordapp.com/attachments/789025765055791104/1105173951015035091/DBBB546C-E464-4A43-95F2-9B06204311BA.png)

Step 2 was finding an suitable OS drive. 
At the beginning I considered using a USB3.0 32GB USB stick but than I saw that these usb sticks were good at storing files but not at randomly accsesing them. I tried installing Debian onto this 32GB Kioxia USB 3.0 stick and it ran slow as hell. And becouse of that I decided to go with an SSD and I brought out a 240GB Crucial BX500 for that !![SSD and Optiplex server](https://cdn.discordapp.com/attachments/789025765055791104/1105173950578835566/A959E34E-8708-4BBC-ACF6-8079C1D5F5CB.jpeg)
I preferred this SSD becouse it was my best option for it's price. Thing makes this SSD better is it's dram. Dram is important for random acsessing the data on drive and since I'm gonna run bunch of different virtual machines on it at the same time, it's a feature that I need. Also when compared to it's dramless same priced alternatives like WD Green. 
After installing Rocky Linux 9 I greeted with the beautiful Gnome 40 desktop and it was ready to go. All things I needed (QEMU, Virt-Manager, Cockpit, HTTPD, OpenSSL, Samba) was installed upon installation since I selected them and only thing I needed to do was condfiguring them.

## Configration
My another reason for going with Rocky Linux was using terminal minimal as possible. Becouse since this OS is designed to be fast, production ready and easy to use I wanted to done most of the configration like users and samba shares over at Cockpit webui and for that I installed the cockpit-shares and cockpit-identification plugins and I've done configuring Samba without entering a single command. But of course when it comes to other parts such as setting up the Debian VM and other stuff I needed command line and here comes it.

### Debian VM
>  A webserver inside a Debian VM 
![CockpitUI](https://cdn.discordapp.com/attachments/789025765055791104/1105173951476416616/Screenshot_2023-05-07_at_22.34.03.png)
As you can see on top I've created a tiny VM and it's been serving as my webserver since the day I posted [this post](https://thebatuhansnetwork.xyz/the-page-you-currently-in/) and you're proably reading this from that virtual machine too.
![Htop](https://cdn.discordapp.com/attachments/789025765055791104/1105173951749038230/Screenshot_2023-05-07_at_22.35.18.png)

As you can see only 84MB of ram usage! While setting this VM up I've gone with less things installed as possible and when the setup has finished I had a very simple OS with base system and nothing more. Than I installed some stuff I needed for Jekyll ,apache2 and openssh-server becouse ssh doesn't uses too much memory and it's just easier for me to ssh in instead of opening a VNC client and connecting to VM. Since it doesn't has a GUI. 
You may ask if this VM is that simple, what brings this website to me? Well answer is simple. It's CloudFlare tunnel. I've installed it into servers itself and than created a Virtual network for this VM so it's reachable from server and than I used it's virtual IP and it worked! 
With that Crucial SSD booting this VM only takes a seconds and feels same as running a container.

### Ubuntu Server
>  A Nextcloud server inside Ubuntu Server 22.04 VM

Configuring Ubuntu Server VM was very simple. I just used the Nextcloud Snap package for it and with sime tiny configrations it was done. I'm not actually a fan of snaps becouse they're bloaed as hell and runs much slower when compared to it's alternative Faltpaks but since this VMs only purpose is Nextcloud I'm completely fine with it. 
I gaved the same amount of resources expect sotrage and usage on this VM is way more than other one like 400Mb while idling but this was expected and even under load it doesn't goes higher than 800Mbs and I'm happy with it. 

### Extras
And I've installed some extras like Resillio Sync for file synchronising, Xrdp for be able to login to GUI remotely and autoSSH for port forwarding to a VPS. 

In a summary this was it guys. Of course things went more complicated and I tried to keep it simple. I'm planning to host myself a [microblog.pub](https://sr.ht/~tsileo/microblog.pub/) instance like [Kev Quirk](https://qrk.social/) and a [minv](https://sr.ht/~thecashewtrader/minv/)
server but for now I don't have enough time to do these but when I do I'm gonna keep you guys updated about it. If you have any questions or need support for your server you can come and check out our [Discord server](https://discord.gg/5p27ZdzQzF) . 

## Reply via [e-mail](mailto://batuhan@thebatuhansnetwork.xyz) 
## Thank You!
Batuhan Yılmaz - 08.05.2023 - 16/100
