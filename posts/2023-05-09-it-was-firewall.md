Last night I did some security hardening on my server and noticed that after rebooting it all my remote connections went down. 

Syncthing over port 9000, XRDP over port 3386 and uptime kuma over port 8000 was stopped working and even tho I added them to UFW it shouldn't be the problem right? Wrong! For some reason UFW was still blocking every single connection other than port 22 and 9090 and my only fix for it was disabling UFW. 

Disabling it fixed my problems instantly and I was happy becouse I was able to get my stuff up and running. But the problem now I don't have any firewalls securing my server. And I think I'll go that way but it isn't secure. But even tho this isn't a secure way to do that, this server doesn't actually open to world wide web other than tailscale network and my blog is being hosted using Cloudflare Tunnel and it doesn't directly opens my port 80 to open web.

So I think it's safe to say that I'm still secure with my setup and since I don't have any directly open ports. It isn't possible to have an attack on my server unless some malicious device pops up on tailscale. 

## Reply via [E-Mail](mailto://batuhan@thebatuhansnetwork.xyz)
## Thank You!
Batuhan Yılmaz - 09.05.2023 - 17/100
