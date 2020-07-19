/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-12-26 16:35:35
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-19 04:44:16
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
