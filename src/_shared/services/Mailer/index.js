/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-03-13 17:02:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-08 17:17:24
 */

import * as nodemailer from 'nodemailer';
import Constants from '../../constants';

const transporter = nodemailer.createTransport({
	service: Constants.messagesConfig.SERVICE,
	auth: {
		user: Constants.messagesConfig.USER,
		pass: Constants.messagesConfig.PASSWORD,
	},
});

export const sendMessageToClientEmail = (message) => {
	return transporter.sendMail(message, (error, info) => {
		if (error) {
			// return res.send(error.toString());
			console.log(error);

			return;
		}
		// return res.send('Sended');
		console.log('Send');
	});
};
