/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 20:25:52
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-20 05:48:07
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useToasts } from 'react-toast-notifications';
import validate from 'validate.js';
import about from '../../_shared/assets/images/about.jpg';
import { Loader } from '../../_shared/components';
import { ContactSchema } from '../_services';

const Contact = () => {
	const [loading, setLoading] = useState(false);

	const firestore = useFirestore();
	const { addToast } = useToasts();

	const [formState, setFormState] = useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	});

	useEffect(() => {
		const errors = validate(formState.values, ContactSchema);

		setFormState((formState) => ({
			...formState,
			isValid: errors ? false : true,
			errors: errors || {},
		}));
	}, [formState.values]);

	const hasError = (field) => (formState.touched[field] && formState.errors[field] ? true : false);

	const handleChange = (event) => {
		event.persist();

		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]: event.target.value,
			},
			touched: {
				...formState.touched,
				[event.target.name]: true,
			},
		}));
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);

		try {
			await axios.post('https://ddmailer.herokuapp.com/mails/mails/dieudonnenazzah', { ...formState.values });

			await firestore.add('/messages', formState.values);

			setFormState({
				isValid: false,
				values: {},
				touched: {},
				errors: {},
			});

			addToast('Message Sent. I am glad to hear from you', { appearance: 'success', autoDismiss: true });
		} catch (error) {
			addToast(error.message, { appearance: 'error', autoDismiss: true });
		}

		return setLoading(false);
	};

	return (
		<section className='ddnazzah-section contact-section ddnazzah-no-pb' id='contact-section'>
			<div className='container'>
				<div className='row justify-content-center mb-5 pb-3'>
					<div className='col-md-7 heading-section text-center' data-aos='fade-up'>
						<h1 className='big big-2'>Contact</h1>
						<h2 className='mb-4'>Contact Me</h2>
						<p>Somewhere in Accra, in the great nation of Ghana</p>
					</div>
				</div>

				<div className='row d-flex contact-info mb-5'>
					<div className='col-md-6 col-lg-3 d-flex' data-aos='fade-up'>
						<div className='align-self-stretch box p-4 text-center'>
							<div className='icon d-flex align-items-center justify-content-center'>
								<span className='icon-map-signs'></span>
							</div>
							<h3 className='mb-4'>Address</h3>
							<p>East-Legon, Accra Ghana</p>
						</div>
					</div>
					<div className='col-md-6 col-lg-3 d-flex' data-aos='fade-up'>
						<div className='align-self-stretch box p-4 text-center'>
							<div className='icon d-flex align-items-center justify-content-center'>
								<span className='icon-phone2'></span>
							</div>
							<h3 className='mb-4'>Contact Number</h3>
							<p>
								<a href='tel://1234567920'>+233 20 132 9311</a>
							</p>
						</div>
					</div>
					<div className='col-md-6 col-lg-3 d-flex' data-aos='fade-up'>
						<div className='align-self-stretch box p-4 text-center'>
							<div className='icon d-flex align-items-center justify-content-center'>
								<span className='icon-paper-plane'></span>
							</div>
							<h3 className='mb-4'>Email Address</h3>
							<p>
								<a href='mailto:dieudonnenazzah@yahoo.co.uk'>dieudonnenazzah@yahoo.co.uk</a>
							</p>
						</div>
					</div>
					<div className='col-md-6 col-lg-3 d-flex' data-aos='fade-up'>
						<div className='align-self-stretch box p-4 text-center'>
							<div className='icon d-flex align-items-center justify-content-center'>
								<span className='icon-globe'></span>
							</div>
							<h3 className='mb-4'>Website</h3>
							<p>
								<a href='https://dieudonnenazzah.com'>dieudonnenazzah.com</a>
							</p>
						</div>
					</div>
				</div>

				<div className='row no-gutters block-9'>
					<div className='col-md-6 order-md-last d-flex'>
						<form
							className='bg-light p-4 p-md-5 pb-0 contact-form'
							autoComplete='off'
							// noValidate
							onSubmit={handleFormSubmit}
						>
							<div className='form-group'>
								<input
									type='text'
									className={`form-control ${hasError('name') ? 'is-invalid' : ''}`}
									placeholder='Your Name'
									name='name'
									onChange={handleChange}
									disabled={loading}
									value={formState.values.name || ''}
								/>
								<div className='invalid-feedback'>{hasError('name') ? formState.errors.name[0] : null}</div>
							</div>
							<div className='form-group'>
								<input
									type='email'
									className={`form-control ${hasError('email') ? 'is-invalid' : ''}`}
									placeholder='Your Email'
									name='email'
									onChange={handleChange}
									disabled={loading}
									value={formState.values.email || ''}
								/>
								<div className='invalid-feedback'>{hasError('email') ? formState.errors.email[0] : null}</div>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className={`form-control ${hasError('subject') ? 'is-invalid' : ''}`}
									placeholder='Subject'
									name='subject'
									onChange={handleChange}
									disabled={loading}
									value={formState.values.subject || ''}
								/>
								<div className='invalid-feedback'>{hasError('subject') ? formState.errors.subject[0] : null}</div>
							</div>
							<div className='form-group'>
								<textarea
									cols='30'
									rows='6'
									className={`form-control ${hasError('message') ? 'is-invalid' : ''}`}
									placeholder='Message'
									name='message'
									onChange={handleChange}
									disabled={loading}
									value={formState.values.message || ''}
								></textarea>
								<div className='invalid-feedback'>{hasError('message') ? formState.errors.message[0] : null}</div>
							</div>
							<div className='form-group'>
								{loading ? (
									<div className='py-3 px-5'>
										<Loader loading={loading} size={12} hCenter />
									</div>
								) : (
									<input
										type='submit'
										value='Send Message'
										className='btn btn-primary py-4 px-5'
										disabled={loading || !formState.isValid}
									/>
								)}
							</div>
						</form>
					</div>

					<div className='col-md-6 d-flex'>
						<div className='img' style={{ backgroundImage: `url(${about})` }}></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
