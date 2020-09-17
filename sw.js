self.addEventListener('install', (event) => {
    event.waitUntil(
     caches.open("cache").then(function(cache) {
       return cache.addAll(
         [
           '/images/tor_maskable.png'
         ]
       );
     })
   );
 });
 
 self.addEventListener('activate', (event) => {
   console.log('Inside the activate handler:', event);
 });
 
 self.addEventListener('fetch', (event) => {
   event.respondWith(
     caches.open('mysite-dynamic').then(function(cache) {
       return cache.match(event.request).then(function (response) {
         return response || fetch(event.request).then(function(response) {
           cache.put(event.request, response.clone());
           return response;
         });
       });
     })
   );
 });