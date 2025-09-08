'use client';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react'

import cl from './ArrowUp.module.css'

function ArrowUp() {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={classNames(cl.pageup, isVisible && cl.visible)} onClick={scrollToTop}>
			<i className="icon-arrow-up" aria-hidden="true"></i>
		</div>
	);
}

export {ArrowUp}