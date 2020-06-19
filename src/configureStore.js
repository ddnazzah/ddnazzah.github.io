/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-01-02 05:13:41
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-08 17:26:54
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import allReducers from './combineReducers';
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Create store with reducers and initial state
const initialState = {};

// const persistConfig = {
// 	key: "root",
// 	storage,
// 	stateReconciler: autoMergeLevel2,
// };

// const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(allReducers, initialState, composeWithDevTools());

persistStore(store);

export default store;

export const persistor = persistStore(store);
