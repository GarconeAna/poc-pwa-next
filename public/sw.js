if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f835abdca3ba1326a317fb5174d178b3"},{url:"/_next/static/9KyW6O9IHIKyp7Zd3i4TE/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/9KyW6O9IHIKyp7Zd3i4TE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/472-75d72c8cd9ea7b68.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/986-afeb89f6a530de77.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/_not-found-f29c372dd14da0fe.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/home/page-bb961a828c7c6588.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/layout-53cdba8f178ec44e.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/location/page-5f4fb51f87c3f3a6.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/minhaconta/page-677b1a04f4aebb5f.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/name/page-31ebbc7f5f50af9c.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/app/page-317ed1914bc5da05.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/fd9d1056-4dbbcf07a05c3f48.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/main-app-8fe623713c166a62.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/main-d7c5f0c385752431.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8a804fc441336097.js",revision:"9KyW6O9IHIKyp7Zd3i4TE"},{url:"/_next/static/css/398f52c1b7ebd396.css",revision:"398f52c1b7ebd396"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/icon-wallet.65c89f31.png",revision:"ad6f2b67eef3bd6f3634196fd9499ecc"},{url:"/_next/static/media/logo-mobile.8d95c4da.png",revision:"4f6a585c586f55ec61e0eeaf0fdf2a06"},{url:"/assets/icon-ajuda.png",revision:"d068fd05ac6b3a86a4ffc90e1c209edd"},{url:"/assets/icon-close.svg",revision:"825c34039b620eaf2e683a8bd3b37b2b"},{url:"/assets/icon-login.png",revision:"67d2c0b230d1119c35b9304706a5dd34"},{url:"/assets/icon-wallet.png",revision:"ad6f2b67eef3bd6f3634196fd9499ecc"},{url:"/assets/logo-mobile.png",revision:"4f6a585c586f55ec61e0eeaf0fdf2a06"},{url:"/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"/manifest.json",revision:"6fef7295adf58552d5200fa27765ca1a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/serviceWorker.js",revision:"a250065ea86ef190b01953e256f1d548"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
