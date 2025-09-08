'use client'
import Error from 'next/error';
import React from 'react';

import { ButtonLink } from '@/app/ui/button/ButtonLink'
// Этот компонент будет вызываться, когда возникает ошибка, включая 404
const CustomErrorComponent = ({ statusCode }) => {
	if (statusCode === 404) {
		return (
			<div style={{ height: 'fit-content', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, flexShrink: 0 }}>
				<h2 style={{ marginBottom: 24 }}>Page not found</h2>
				<ButtonLink className='btn secondary' href="/">
					Home
				</ButtonLink>
			</div>
		);
	} 
	// Для всех остальных ошибок показываем стандартный компонент ошибки
	return <Error statusCode={statusCode} />;
};

CustomErrorComponent.getInitialProps = async (context) => {
	const { res, err } = context;
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default CustomErrorComponent;