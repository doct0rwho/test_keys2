'use client';

import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify'
import { Modal } from '@/app/ui/modal/Modal'
import { Input } from '@/app/ui/input/Input'
import { Checkbox } from '@/app/ui/checkbox/Checkbox'
import Button from '@/app/ui/button/Button'


function SubscrModal({ modalisopen, setisopen }) {
	const [vr, setVr] = useState(false)
	const [meta, setMeta] = useState(false)
	const [production, setProduction] = useState(false)
	const [error, setError] = useState('')

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

			const res = fetch("https://platform.metaenga.com/info/mail/send", {
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
			toast.success('Your message has been sent. We will contact you soon.')
		} catch (e) {
			toast.error('Message not sent. Try again later.')
		}
	}
	const onClose = () => {
		setisopen(false)
	}

	return (

		modalisopen && <Modal modalisopen={modalisopen} setisopen={setisopen} callback={onClose} >
			<div className="subscr__modal">
				<h6>Let&apos;s get in touch!</h6>
				<Formik
					initialValues={{
						name: '',
						email: '',
						message: '',
					}}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
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
						onClose()
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
												label='Full name*'
												required
												{...field}
												err={(meta.touched && meta.error) || error}
												helperText={errors.name} />
										)}
									</Field>
								</div>
								<div className="form__row-input">
									<Field name="email">
										{({
											field, // { name, value, onChange, onBlur }
											form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
											meta,
										}) => (
											<Input
												small
												label='Email*'
												required
												{...field}
												err={(meta.touched && meta.error) || error}
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
											label='Message'
											type='area'
											rows={3}
											{...field}
											err={(meta.touched && meta.error) || error}
											helperText={errors.message || error} />
									)}
								</Field>
							</div>
							<div className="form__check">
								<p>I&apos;m interested in</p>
								<div className="form__check-container">
									<div className="form__check-item">
										<Checkbox checked={vr} onChange={() => setVr(!vr)}>VR training</Checkbox>
									</div>
									<div className="form__check-item">
										<Checkbox checked={meta} onChange={() => setMeta(!meta)}>Metaenga</Checkbox>
									</div>
									<div className="form__check-item">
										<Checkbox checked={production} onChange={() => setProduction(!production)}>360° Production</Checkbox>
									</div>
								</div>
							</div>
							<div className="form__btns">
								<Button type='reset' className='btn secondary' onClick={onClose}>Cancel</Button>
								<Button type='submit'className='btn primary' loading={isSubmitting} disabled={isSubmitting}>Submit</Button>
							</div>

						</Form>
					)}
				</Formik>
			</div>
		</Modal>
	)
}

export default SubscrModal