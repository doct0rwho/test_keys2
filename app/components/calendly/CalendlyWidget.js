'use client'
import Script from 'next/script';
import { useEffect } from 'react';

const CalendlyWidget = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);

		// Очистка эффекта, чтобы скрипт не добавлялся несколько раз
		return () => {
			document.body.removeChild(script);
		};
	}, []); 
	return (
		<div style={{marginTop: 16, marginBottom: 16}}>
			<div id="calendly-widget" className='calendly-inline-widget' data-url="https://calendly.com/slav-metaenga/30min" style={{ minWidth: '320px', height: '670px' }}></div>

		</div>
	);
};

export default CalendlyWidget;
