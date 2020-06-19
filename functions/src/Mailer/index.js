"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sendMail = undefined;

var _nodemailer = require("nodemailer");

var nodemailer = _interopRequireWildcard(_nodemailer);

var _constants = require("../_helpers/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-03-13 17:02:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-03-13 18:55:38
 */

var transporter = nodemailer.createTransport({
	service: _constants.Constants.messagesConfig.SERVICE,
	auth: {
		user: _constants.Constants.messagesConfig.USER,
		pass: _constants.Constants.messagesConfig.PASSWORD
	}
});

var sendMail = exports.sendMail = function sendMail(message) {
	return transporter.sendMail(message, function (error, info) {
		if (error) {
			// return res.send(error.toString());
			console.log(error);

			return;
		}
		// return res.send('Sended');
		console.log("Send");
	});
};