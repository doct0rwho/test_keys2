'use client' // Error components must be Client Components

import { ButtonLink } from '@/app/ui/button/ButtonLink'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div style={{height: 'fit-content', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, flexShrink: 0}}>
			<h2 style={{marginBottom: 24}}>Trainings not found</h2>
			<ButtonLink className='btn secondary' href="/">
				Home
			</ButtonLink>
		</div>
	)
}