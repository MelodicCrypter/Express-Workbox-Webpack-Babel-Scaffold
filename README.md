[![Build Status](https://travis-ci.com/MelodicCrypter/Express-Workbox-Webpack-Babel-Scaffold.svg?branch=master)](https://travis-ci.com/MelodicCrypter/Express-Workbox-Webpack-Babel-Scaffold)

#### Express, Workbox, Webpack, and Babel Scaffolding

Let's you create a modern PWA (Progressive Web App) on the fly. You can setup a PWA app from scratch, but using well-tested and well-maintained technology like
**Workbox** will make your life a lot easier and faster.

<br>

#### Usage
1. **yarn install**
2. Edit **/public/server.js**, put your **LOCAL_IP**, if you want to test your app in your devices locally
3. **yarn prep** ( *remove .git, create build dir, then dev build with watch, test, then launch with auto-reload in one - run this once only*  )

<br>

###### If all set, you can directly use these
0. **yarn dev-start-ar** (*with auto-reload*) or **dev-start** (*no auto-reload*)

<br>

#### Just Ignore These Files:
 These files are used if you are going to deploy to **Elastic Beanstalk**. You can delete these if you want.
1. .ebextensions
2. .ebignore
3. _elasticbeanstalk._travis.yml

<br>

#### Workbox (PWA)
You can modify all your Service Worker stuffs inside */public/src-sw.js* file. You can put all your routes, caches, etc. Don't edit */public/sw.js* directly. **Webpack** will
automatically generate that file for you. You can modify or rename /public/views/fallback.html file but please don't delete it. If you rename it, please also update the 
*/public/src-sw.js* file, in the number 9 section saying '*Provided offline or fallback support*'. Don't forget to update the manifest file inside */public* to match the name
of your app, icons, settings, etc. Also, you can turn on Debug if you are still in development phase, still inside *src-sw.js* file.

