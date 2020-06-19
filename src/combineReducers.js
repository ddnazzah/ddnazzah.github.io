/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-10-21 01:17:39
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-08 17:24:14
 */

import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import { persistReducer } from "redux-persist";

const allReducers = combineReducers({
	firebase: firebaseReducer,
	// firebase: persistReducer({ key: "firebaseState", storage: localStorage }, firebaseReducer),
	firestore: firestoreReducer,
});

export default allReducers;
