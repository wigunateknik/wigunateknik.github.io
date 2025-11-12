importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

// 🔧 Tangani klik notifikasi (biar bisa dibuka saat ditekan)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://wigunateknik.github.io/')
  );
});
