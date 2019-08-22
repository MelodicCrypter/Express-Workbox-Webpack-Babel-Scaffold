[![Build Status](https://travis-ci.com/MelodicCrypter/Express-Workbox-Webpack-Babel-Scaffold.svg?branch=master)](https://travis-ci.com/MelodicCrypter/Express-Workbox-Webpack-Babel-Scaffold)

#### Express, Workbox, Webpack, and Babel Scaffolding

Let's you create a modern PWA (Progressive Web App) on the fly. You can setup a PWA app from scratch, but using well-tested and well-maintained technology like
**Workbox** will make your life a lot easier and faster.

<br>

#### Usage
1. **yarn install**
2. Since this scaffold uses Ngrok for tunnelling, so that you can test your app on devices while on development stage, you need to get your token at [Ngrok](https://ngrok.com). 
After that, put your token inside *webpack.config.js* (line 99) file.
3. **yarn prep** ( *run this once only*  )

<br>

###### If already ran -yarn prep- before, you can directly use these
0. **yarn dev:start-ar** (*with auto-reload*) or **dev:start** (*no auto-reload*)

<br>

![Screen Shot 2019-08-22 at 4 56 43 PM](https://user-images.githubusercontent.com/18341500/63503298-c9099b80-c501-11e9-8512-1f7976faa624.png)

<br>

#### Ports
You can change the port for Express inside *public/server.js*. You can change your port for Ngrok inside *.ngrok.js*. You can change Light-Server's port inside *.lightrc*.

*NOTE: For Ngrok to work, ports for Express and Ngrok must match.*


<br>

#### Workbox (PWA)
You can modify all your Service Worker stuffs inside *public/src-sw.js* file. You can put all your routes, caches, etc. Don't edit *public/sw.js* directly. **Webpack** will
automatically generate that file for you. You can modify or rename /public/views/fallback.html file but please don't delete it. If you rename it, please also update the 
*public/src-sw.js* file, in the number 9 section saying '*Provided offline or fallback support*'. Don't forget to update the manifest file inside *public/* to match the name
of your app, icons, settings, etc. Also, you can turn on Debug if you are still in development phase, still inside *src-sw.js* file.

<br>

#### Just Ignore These Files:
 These files are used if you are going to deploy to **Elastic Beanstalk**. You can delete these if you want.
1. .ebextensions
2. .ebignore

<br>

