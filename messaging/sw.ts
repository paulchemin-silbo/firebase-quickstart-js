import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

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
const app = initializeApp({
  apiKey: 'AIzaSyALas5seudUODEpU_fS9mq_rj4kGRV3Ipk',
  authDomain: 'hello-silbo.firebaseapp.com',
  projectId: 'hello-silbo',
  storageBucket: 'hello-silbo.firebasestorage.app',
  messagingSenderId: '388253311039',
  appId: '1:388253311039:web:371106f28bd330bd7b988a',
  measurementId: 'G-9C78TZZPFC',
});
const messaging = getMessaging(app);
// Handle push notifications when the app is in the background or closed
onBackgroundMessage(messaging, (payload) => {
  if (payload.notification) {
    // If `notification` is present, it is a "Notification Message" and this is already handled automatically by the fcm sdk
    // https://firebase.google.com/docs/cloud-messaging/concept-options
    return;
  }

  self.registration.showNotification('Background Message Title', {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  });
});
