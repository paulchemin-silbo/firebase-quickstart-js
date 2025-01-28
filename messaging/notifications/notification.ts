import {
  getMessaging,
  getToken,
  onMessage,
  Unsubscribe,
} from 'firebase/messaging';
import { vapidKey } from './fcm';

type PushNotificationOptions = { title: string } & NotificationOptions;
type ServiceWorkerOptions = {
  serviceWorkerRegistration?: ServiceWorkerRegistration;
};

export async function showNotification(
  notificationOptions: PushNotificationOptions,
  serviceWorkerOptions?: ServiceWorkerOptions,
) {
  const registration =
    serviceWorkerOptions?.serviceWorkerRegistration ??
    (await getServiceWorkerRegistration());
  return registration.showNotification(
    notificationOptions.title,
    notificationOptions,
  );
}

let onMessageUnsubscribe: Unsubscribe | undefined;
export function subscribeToNotifications() {
  if (!onMessageUnsubscribe) {
    onMessageUnsubscribe = onMessage(getMessaging(), (payload) => {
      showNotification({
        title: payload.notification?.title ?? 'Silbo',
        body: payload.notification?.body,
        icon: './pwa-64x64.png',
        badge: './badge.png',
      });
    });
  }
}

export function unsubscribeFromNotifications() {
  if (onMessageUnsubscribe) {
    onMessageUnsubscribe();
    onMessageUnsubscribe = undefined;
  }
}

export async function retrieveAndStoreFcmToken() {
  // https://stackoverflow.com/a/66285624
  // https://firebase.google.com/docs/reference/js/messaging_.gettokenoptions.md#gettokenoptionsserviceworkerregistration
  const registration = await getServiceWorkerRegistration();
  const fcmToken = await getToken(getMessaging(), {
    vapidKey,
    serviceWorkerRegistration: registration,
  });

  alert(fcmToken);

  return fcmToken;
}

export function isNotificationSupported() {
  return 'Notification' in window;
}

async function getServiceWorkerRegistration() {
  return navigator.serviceWorker.ready;
}
