'use client';

import React from 'react'
import { ToastContainer } from 'react-toastify';
import { useWindowSize } from '@/app/hooks/useWindowWidth';

import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'
import { toast } from 'react-toastify';

function Toast() {
	const winWidth = useWindowSize();

	//const useTost = () => {
	//	setTimeout(() => {
	//		toast.success('Success!');
	//		toast.success('Success!');
	//		toast.success('Success!');
	//		toast.success('Success!');
	//	}, 2000)
	//}

	//useTost()
	return (
		winWidth > 991.5
			? <ToastContainer
				theme='colored'
				position="bottom-right"
				closeButton={false}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
			: <ToastContainer
				theme='colored'
				position="bottom-center"
				closeButton={false}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>


	)
}

export {Toast}  