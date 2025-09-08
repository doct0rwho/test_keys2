

function Video({ src, thumb = '', alt = '', children }) {
	return (
		<video poster={thumb} autoPlay muted loop playsInline disablePictureInPicture >
			{children ? children : <source
				src={src}
				type="video/mp4"
			/>}
		</video>
	)
}

export { Video }