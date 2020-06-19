import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { sendEmail } from './Mailer';

admin.initializeApp();

export const newMessageReceived = functions.firestore.document('messages/{id}').onCreate((doc) => {
	const data = doc.data();

	const mailMessage = {
		to: 'dieudonnenazzah@yahoo.co.uk',
		from: data.email,
		subject: `New Contact Message | ${data.subject}`,
		// text: doc.message,
		html: `You have new message <p>${data.message} <h4>Sent by ${data.name}<br />${data.email}</h4></p>`,
	};

	sendEmail(mailMessage);
});
