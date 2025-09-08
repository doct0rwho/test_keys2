'use client';

import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { TABLET_WIDTH, useWindowSize } from '../../hooks/useWindowWidth'

import { toast } from 'react-toastify';

import './Contacts.css';
import { Input } from '../../ui/input/Input';
import { Checkbox } from '../../ui/checkbox/Checkbox';
import Button from '../../ui/button/Button';


function Contact({ texts }) {
	
	const [vr, setVr] = useState(false)
	const [meta, setMeta] = useState(false)
	const [production, setProduction] = useState(false)

	  const [mounted, setMounted] = useState(false);
  const winWidth = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (winWidth <= TABLET_WIDTH) return null;

	const onSubmit = async (values) => {
		const { name, email, message } = values;
		try {
			let html = `
			<h1>Get in Touch</h1> </br>
			<p><b>Full Name</b>: ${name}</p> </br>
			<p><b>Email</b>: ${email}</p> </br>
			<p><b>Message</b>: ${message}</p> </br>
			<p><b>Selected Topic</b>: ${vr ? 'VR training, ' : ''} ${meta ? 'Metaenga, ' : ''} ${production ? '360° Production' : ''}</p> </br>
			`;

			const res = await fetch("https://platform.metaenga.com/info/mail/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					mail: email,
					fullName: name,
					html
				})
			})

			setVr(false)
			setMeta(false)
			setProduction(false)
		
			toast.success(texts.toastSuccess)
		} catch (e) {
			
			toast.error(texts.toastError)
		}
	} 
	return (
		winWidth > TABLET_WIDTH ?
				<div className="subscribe">
					<div className="container">
						<div className="subscribe__container">
							<div className="subscribe__container-text">
								<h6 className='mid__header'>{texts.title}</h6>
								<p className='text__body'>
									{texts.textBody}
								</p>
							</div>
							<div className="subscribe__container-form form">
								<Formik
									initialValues={{
										name: '',
										email: '',
										message: '',
									}}
									validate={values => {
										const errors = {};
										if (!values.email) {
											errors.email = (texts.textError_0)
										} else if (
											!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
										) {
											errors.email = (texts.textError_1)
										}
										return errors;
									}}
									onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
										onSubmit(values).then(() => {
											setSubmitting(false);
											resetForm();
										})

									}}
									onReset={(values, { setSubmitting }) => {
										setTimeout(() => {
											setSubmitting(false);
										}, 400);
									}}
								>
									{({ isSubmitting }) => (
										<Form>
											<div className="form__row">
												<div className="form__row-input">
													<Field name="name">
														{({
															field, // { name, value, onChange, onBlur }
															form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
															meta,
														}) => (
															<Input
																small
																label={texts.fieldName}
																required
																{...field}
																err={meta.touched && meta.error}
																helperText={errors.name} />
														)}
													</Field>
												</div>
												<div className="form__row-input">
													<Field name="email">
														{({
															field,
															form: { touched, errors },
															meta,
														}) => (
															<Input
																small
																label={texts.fieldEmail}
																required
																{...field}
																err={meta.touched && meta.error}
																helperText={errors.email} />
														)}
													</Field>
												</div>

											</div>
											<div className="form__row-full">
												<Field name='message'>
													{({
														field, // { name, value, onChange, onBlur }
														form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
														meta,
													}) => (
														<Input
															small
															label={texts.fieldMessage}
															type='area'
															rows={3}
															{...field}
															err={meta.touched && meta.error}
															helperText={errors.message} />
													)}
												</Field>
											</div>
									
											<Button type='submit' style={{ background: 'transparent' }} loading={isSubmitting} disabled={isSubmitting} className='btn secondary'>{texts.buttonSend}</Button>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			: null

	)
}

export default Contact