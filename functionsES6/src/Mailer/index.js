/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-03-13 17:02:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-03-13 18:55:38
 */

import * as nodemailer from "nodemailer";
import { Constants } from "../_helpers/constants";

const transporter = nodemailer.createTransport({
	service: Constants.messagesConfig.SERVICE,
	auth: {
		user: Constants.messagesConfig.USER,
		pass: Constants.messagesConfig.PASSWORD,
	},
});

export const sendMail = (message) => {
	return transporter.sendMail(message, (error, info) => {
		if (error) {
			// return res.send(error.toString());
			console.log(error);

			return;
		}
		// return res.send('Sended');
		console.log("Send");
	});
};
