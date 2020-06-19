/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-12-26 16:33:06
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-08 18:18:40
 */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyB3T1WFAoKH5qXVzNweF6FHyUu4u9soUko',
	authDomain: 'dieudonnenazzah-ddbee.firebaseapp.com',
	databaseURL: 'https://dieudonnenazzah-ddbee.firebaseio.com',
	projectId: 'dieudonnenazzah-ddbee',
	storageBucket: 'dieudonnenazzah-ddbee.appspot.com',
	messagingSenderId: '76979479647',
	appId: '1:76979479647:web:09aff0bd68782c4909a7ea',
	measurementId: 'G-YXX3JJ4TE0',
};

const app = firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
app.auth();

app.firestore();

app.storage();

// app.analytics();

export default app;
