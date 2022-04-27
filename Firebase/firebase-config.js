import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAVkgsKIdA24L3wVPKhOgIgaqiXWLY5bZw',
  authDomain: 'react-native-store-locator.firebaseapp.com',
  projectId: 'react-native-store-locator',
  storageBucket: 'react-native-store-locator.appspot.com',
  messagingSenderId: '721109586385',
  appId: '1:721109586385:web:e9dd4ff9554c4c2c5990f0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
