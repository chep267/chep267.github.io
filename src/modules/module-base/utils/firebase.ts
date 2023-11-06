/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { getApps, initializeApp } from 'firebase/app';

const firebaseConfig = Object.freeze({
    apiKey: 'AIzaSyBYZKhAWUgxDLqNZFMONEBCc05-7YQVt6Q',
    authDomain: 'imeeting-f3337.firebaseapp.com',
    databaseURL: 'https://imeeting-f3337-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'imeeting-f3337',
    storageBucket: 'imeeting-f3337.appspot.com',
    messagingSenderId: '907116964832',
    appId: '1:907116964832:web:932baede6c041e24e3d985',
    measurementId: 'G-YTD0GEHL7R',
});

if (!getApps().length) initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };
