'use client'
import { useEffect, useRef } from 'react';

const VideoInSlider = ({ src, thumb = '', isActive }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		 if (isActive && videoRef.current) {
			  videoRef.current.play();
		 } else if (videoRef.current) {
			  videoRef.current.pause();
			  videoRef.current.currentTime = 0; // Сбросить видео к началу
		 }
	}, [isActive]);

	return (
			  <video
					ref={videoRef}
					src={src} 
					poster={thumb}
					muted
					loop
					playsInline
					disablePictureInPicture
			  />
	);
};

export {VideoInSlider}
