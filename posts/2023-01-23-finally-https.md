---
title: Finally HTTPS!
---

Hello everyone, I'm Batuhan and today I'm going to talk about how did I got the HTTPS working with my web server over cloudflare tunnel. Before starting that tutorial I should say that what works for me may not work for you, so please think before following these steps, in any case you can always come to our [discord server](https://discord.gg/5p27ZdzQzF) from the About page and get more help from there. So without any further words lets go.

## Why I'm creating this blogpost it's just too easy.

- I can hear you saying that becouse it's really easy to create a certificate and use with your domain when it comes to the Cloudflare and Cloudflare Tunnel. When you enable it from the Cloudflare dashboard, it encrypts everything for you, and it just works generally. But when it comes to hosting my web archive using Apache 2 with zero extra configuration, things become a bit problematic with resulting in mixed content and a website that doesn't work. 

![Mixed content error](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202022-04-02%20at%2010.53.34.png)

- The error that you're currently seeing above this text was the main reason why I didn't had HTTPS until now. At the beginning I was tried everything at the Cloudflare side to fix it but nothing has worked until I realised that main problem was at the server side. As I said at the beginning of the post, the server side was just a zero configration apache2 installation and was using the http protocol. And this was a problem for the Cloudflare and the browsers becouse while the main content is being served as https other stuff as well as the files and medias was still on the http and this was the problem. 
-  The fix was actually too simple and after fixing it just inside 3 minutes I just kept thinking "Why the fuck I wasn't knew that before!?".  But yeah I fixed it in the end :).
	

## How did I fix it?

- So let's come to the part where contains the fix. It's very simple and as I said before it only takes like 3 minutes to fix it. So here is the step by step guide:

Step 1 - Update the apache2 and OpenSSL into latest version avabile:

1. First you have to make sure that you have the latest version of the Apache2 and OpenSSL installed on your server just in case and for that just use the commands below to update them to latest version.
```
sudo apt update
sudo apt install apache2 openssl
```

Step 2 - Generate your certificates from Cloudflare Dashboard

1. Now go to your Cloudflare Dashboard and login. After that select your domain and go to the SSL/TLS section from the sidebar.
   ![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202022-12-02%20at%2022.58.50.png)
	In this page select the Full encryption for the best result.
3. After enabling the encryption go to the origin server section from the sidebar and create a certificate for your server. This certificate is gonna be used for the HTTPS and vertification of our server by the Cloudflare Tunnel. 

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202022-12-02%20at%2023.04.33.png)

	To create your certificate  press on the Create Certificate button and follow the pages.
	
	![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202022-12-02%20at%2023.04.48.png)

Press to the create button at the bottom and you should be able to see the page below.

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202022-12-02%20at%2023.06.08.png)

Now Cloudflare gives us 2 very random looking text outputs over there, the top one is your public certificate and the bottom one is your private key. Please make sure you saved them locally to your computer before pressing to the blue button, becouse as the name suggests the private key is private and Cloudflare doesn't stores it for you and you won't be able to see it again. And you have to save it to somewhere you know becouse it's needed for HTTPS.
Now after creating your certificate and saving it on somewhere safe on your computer, it's time to log into our server and configure the apache2. 

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202023-01-04%20at%2012.25.18.png)

Now change your dir into ```/etc/apache2```and create a folder named Certificates with the command below
```
cd /etc/apache2 && mkdir certificates
```
After that place the certificates that you've saved your computer to that folder. The important thing is do not save the public and private key into same file! I suggest you to save the public key as ``` domain.key.pub ``` and the private key as ```domain.key ```.  This will make managing your certificates for the different websites if you're hosting multiple sites on the same machine like me. 

![](https://archive.thebatuhansnetwork.xyz/Media/Images/blog/Screenshot%202023-01-23%20at%2022.33.27.png)

And now, the only thing has left is to add these certs to our  websites and it's actually very easy.
First you have to enable the ssl plugin of the apache and than add these certs to our website's config file. 
To enable the Apache2's ssl and rewrite plugin use the command I put down below.
```
sudo a2enmod ssl && sudo a2enmod rewrite
```
after running that command go to your websites config and add these 3 lines to your config.
```
SSLEngine on
SSLCertificateFile /etc/apache2/certs/<your-cert.crt>
SSLCertificateKeyFile /etc/apache2/certs/<your-key.key>
```
Make sure that these lines are placed under the VirtualHost tag, otherwise Apache won't gonna use our certs and we'll end with the same situation which we don't want. So after that it's done. Now restart the Apache and you're ready to go! 

This is how I get my https working on my server with Cloudflare Tunnel and apache2 I hope this post helps to you in any case you can always come to our [discord server](https://discord.gg/5p27ZdzQzF) and get more help from there.


## Thank You!

Batuhan Yılmaz - 23.01.2023 - 3/10
