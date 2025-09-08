'use client'

import React, { useEffect } from 'react'

function AutoScrollUp() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		 });
		 
	}, [])

	return (
		<></>
	)
}

export default AutoScrollUp