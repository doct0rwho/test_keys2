'use client'
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { ButtonLink } from '@/app/ui/button/ButtonLink';
import React from 'react';

export default function OffsetStartFreeBtn({ label }) {
	const scrollPosition = useScrollPosition();
	return scrollPosition > 400 ? (
		<ButtonLink className='btn-link primary' id='free-btn-header' href="https://app.metaenga.com/self-registration?referrer=metaenga" >
			{label}
		</ButtonLink>
	) : (
		<ButtonLink className='btn-link secondary' id='free-btn-header' href="https://app.metaenga.com/self-registration?referrer=metaenga" >
			{label}
		</ButtonLink>
	);
}
