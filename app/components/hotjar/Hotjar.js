'use client'
import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const HotjarComp = () => {
	useEffect(() => {
		Hotjar.init(3811937, 7, {
			debug: true
		 });
	}, []);

	return null;
};

export default HotjarComp;