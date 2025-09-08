import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.pageYOffset);
		};

		// Подписываемся на событие scroll
		window.addEventListener('scroll', handleScroll);

		// Очищаем подписку при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
};

