/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-12-26 16:35:35
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-08 17:21:44
 */

import { createFirestoreInstance } from 'redux-firestore';
import store from '../configureStore';
import app from './services/firebase';

const Constants = {
	routes: {},
	app: {},
	messagesConfig: {
		PASSWORD: 'secret',
		USER: 'goldbergjaguar@gmail.com',
		SERVICE: 'gmail',
	},
	store: {},
};

export default Constants;

/**
 * firebase configuration
 */
export const firebaseConfig = {
	apiKey: 'AIzaSyBMAZlIdAXVRKasWyfUKTUd6HPm9veP20o',
	authDomain: 'sayetech-681e3.firebaseapp.com',
	databaseURL: 'https://sayetech-681e3.firebaseio.com',
	projectId: 'sayetech-681e3',
	storageBucket: 'sayetech-681e3.appspot.com',
	messagingSenderId: '183327726739',
	appId: '1:183327726739:web:acd97aacbad70bce134166',
	measurementId: 'G-14MZCH7824',
};

/**
 * react-redux-firebase config
 */
export const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
};

/**
 * ReactReduxFirebaseProvider props
 */
export const rrfProps = {
	firebase: app,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};
