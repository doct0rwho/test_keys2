// app/components/contactForm/ContactusFormWrapper.tsx
import { getTranslations } from 'next-intl/server';
import ContactusForm from '@/app/contact-us/contactus/ContactusForm';

export default async function ContactusFormWrapper() {
	const tForm = await getTranslations('ContactUs.form');
	const tOverlay = await getTranslations('AboutUs.SuccessSentOverlay');

	const form = {
		name: tForm('name'),
		email: tForm('email'),
		message: tForm('message'),
		submit: tForm('submit'),
		valedate: tForm('valedate'),
		emailValidate: tForm('emailValidate'),
		errorMessage: tForm('errorMessage'),
	};

	const successOverlay = {
		title: tOverlay('title'),
		description0: tOverlay('description_0'),
		description1: tOverlay('description_1'),
		buttonHome: tOverlay('buttonHome'),
		buttonStart: tOverlay('buttonStart'),
	};

	const successMessage = tForm('successMessage');

	return (
		<ContactusForm
			form={form}
			successOverlay={successOverlay}
			successMessage={successMessage}
		/>
	);
}
