'use client'
import React, { useState } from 'react'
import { SuccessSentOverlay } from '@/app/components/contactForm/SuccessSentOverlay';
import Button from '@/app/ui/button/Button';
import { Input } from '@/app/ui/input/Input';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

export default function ContactusForm({ successOverlay, successMessage, form }) {
	const [sent, setSent] = useState(false)

	const onSubmit = async (values) => {
		const { name, email, message } = values;
		try {
			const html = `
				<h1>Get in Touch</h1><br/>
				<p><b>Full Name</b>: ${name}</p><br/>
				<p><b>Email</b>: ${email}</p><br/>
				<p><b>Message</b>: ${message}</p><br/>
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
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
			setSent(true)

			return res
		} catch (e) {
			toast.error(form.errorMessage)
		}
	}

	return (
		<div className="contactus__form c-form">
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				validate={values => {
					const errors = {};
					if (!values.name) {
						errors.name = form.valedate;
					} else if (!values.email) {
						errors.email = form.valedate;
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = form.emailValidate;
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					onSubmit(values).then(() => {
						resetForm();
					}).finally(() => {
						setSubmitting(false);
					});
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="c-form__row">
							<div className="c-form__row-input">
								<Field name="name">
									{({ field, meta }) => (
										<Input
										id={field.name}
											small
											label={form.name}
											required
											{...field}
											err={meta.touched && meta.error}
											helperText={meta.error} />
									)}
								</Field>
							</div>
							<div className="c-form__row-input">
								<Field name="email">
									{({ field, meta }) => (
										<Input
										id={field.name}
											small
											label={form.email}
											required
											{...field}
											err={meta.touched && meta.error}
											helperText={meta.error} />
									)}
								</Field>
							</div>
						</div>
						<div className="c-form__row-full">
							<Field name='message'>
								{({ field, meta }) => (
									<Input
									id={field.name}
										small
										label={form.message}
										type='area'
										rows={4}
										style={{ resize: 'none' }}
										{...field}
										err={meta.touched && meta.error}
										helperText={meta.error} />
								)}
							</Field>
						</div>
						<Button
							type='submit'
							style={{ background: 'transparent' }}
							loading={isSubmitting}
							disabled={isSubmitting}
							className='btn secondary'
						>
							{form.submit}
						</Button>
					</Form>
				)}
			</Formik>
			{sent ? <SuccessSentOverlay {...successOverlay} text={successMessage} /> : null}
		</div>
	)
}
