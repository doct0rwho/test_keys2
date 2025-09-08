'use client';
import React, { useEffect, useState } from 'react'
import CookieModal from './cookie/CookieModal'

function Cookie() {
	const [cookieModal, setCookieModal] = useState(false)

	useEffect(() => {
		let cookie = localStorage.getItem('cookie')
		if (!cookie) {
			setCookieModal(true)
		} 
	}, [])

	return (
		cookieModal ? <CookieModal modal={cookieModal} setModal={setCookieModal} /> : null
	)
}

export default Cookie