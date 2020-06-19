'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.newMessageReceived = undefined;

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _Mailer = require('./Mailer');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

admin.initializeApp();

var newMessageReceived = exports.newMessageReceived = functions.firestore.document('messages/{id}').onCreate(function (doc) {
	var data = doc.data();

	var mailMessage = {
		to: 'dieudonnenazzah@yahoo.co.uk',
		from: data.email,
		subject: 'New Contact Message | ' + data.subject,
		// text: doc.message,
		html: 'You have new message <p>' + data.message + ' <h4>Sent by ' + data.name + '<br />' + data.email + '</h4></p>'
	};

	(0, _Mailer.sendEmail)(mailMessage);
});