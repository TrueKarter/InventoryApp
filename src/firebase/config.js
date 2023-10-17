import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD5LfoqlZndA4D8idimCExxMlsLi7oIiiA',
  authDomain: 'inventory-app-f483b.firebaseapp.com',
  projectId: 'inventory-app-f483b',
  storageBucket: 'inventory-app-f483b.appspot.com',
  messagingSenderId: '1019258370890',
  appId: '1:1019258370890:web:d4862d20220049598d9fb3',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
