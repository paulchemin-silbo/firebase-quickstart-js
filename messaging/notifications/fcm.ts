import { initializeApp } from 'firebase/app';
import { isNotificationSupported, retrieveAndStoreFcmToken, subscribeToNotifications } from './notification';

export const vapidKey = 'BNzzAggNxmOojT02qwgki86L4FmcISXnaGKEKFhpbeKFWgv-BD8lKCH3bci7N1QucvHWowVR1ezyp7v20FRePmc';

const firebaseConfig = {
  apiKey: 'AIzaSyALas5seudUODEpU_fS9mq_rj4kGRV3Ipk',
  authDomain: 'hello-silbo.firebaseapp.com',
  projectId: 'hello-silbo',
  storageBucket: 'hello-silbo.firebasestorage.app',
  messagingSenderId: '388253311039',
  appId: '1:388253311039:web:371106f28bd330bd7b988a',
  measurementId: 'G-9C78TZZPFC',
};

export function initFirebase() {
  return initializeApp(firebaseConfig);
}

export function initFcm() {
  initFirebase();
  subscribeToNotifications();
  // https://firebase.google.com/docs/cloud-messaging/manage-tokens
  if (isNotificationSupported() && Notification.permission === 'granted') {
    retrieveAndStoreFcmToken();
  }
}
