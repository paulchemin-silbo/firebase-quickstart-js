import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { initFirebase } from './notifications/fcm';
import { showNotification } from './notifications/notification';

declare let self: ServiceWorkerGlobalScope;

// Default configuration for PWAs
// https://github.com/vite-pwa/vite-plugin-pwa/blob/main/examples/react-router/src/claims-sw.ts
// https://github.com/vite-pwa/nuxt/issues/54#issuecomment-1633334703
self.skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();
try {
  registerRoute(
    new NavigationRoute(createHandlerBoundToURL('index.html'), {
      allowlist: [/^\/$/],
    }),
  );
} catch (error) {
  console.warn(
    'Error while registering cache route (this error is expected in dev mode)',
    { error },
  );
}

// Firebase Messaging
const app = initFirebase();
const messaging = getMessaging(app);
// Handle push notifications when the app is in the background or closed
onBackgroundMessage(messaging, (payload) => {
  if (payload.notification) {
    // If `notification` is present, it is a "Notification Message" and this is already handled automatically by the fcm sdk
    // https://firebase.google.com/docs/cloud-messaging/concept-options
    return;
  }

  showNotification(
    {
      title: payload.data?.title ?? 'Silbo',
      body: payload.data?.message ?? '',
      icon: '/pwa-64x64.png',
    },
    { serviceWorkerRegistration: self.registration },
  );
});
