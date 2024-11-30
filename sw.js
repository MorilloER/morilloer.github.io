self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/", // Carga la página principal
        "/index.html", // Carga el archivo HTML
        "/manifest.json", // Carga el manifiesto
        "/icon-192x192.png", // Ícono 192x192
        "/icon-512x512.png", // Ícono 512x512
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
