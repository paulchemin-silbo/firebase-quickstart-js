import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

export function initFcm() {
  return initializeApp(firebaseConfig);
}
