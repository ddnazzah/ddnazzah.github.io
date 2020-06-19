import { isEmpty } from 'react-redux-firebase';
import Constants from '../constants';

// Create an encryptor:
var encryptor = require('simple-encryptor')(Constants.app.APP_KEY);

export const saveToLocalStorage = (key, value) => {
	const stringifiedValue = JSON.stringify(value);
	const encryptedValue = encryptor.encrypt(stringifiedValue);
	localStorage.setItem(key, encryptedValue);
};

export const getFromLocalStorage = (key) => {
	const encryptedValue = localStorage.getItem(key) || '';

	const decryptedValue = encryptor.decrypt(encryptedValue);

	if (isEmpty(encryptedValue)) {
		return null;
	}

	return JSON.parse(decryptedValue);
};
