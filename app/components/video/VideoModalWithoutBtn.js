'use client';

import React, { useEffect, useState } from 'react'
import { Modal } from '../../ui/modal/Modal'
import Button from '../../ui/button/Button';
import classNames from 'classnames';


function VideoModalWithoutBtn({ src, setVideoSrc, videoTitle, setModalOpen, modalOpen, ...props }) {

	const callback = () => {
		setVideoSrc('')
		setModalOpen(false)
	}

	return (
		<>
			{modalOpen && <Modal className='video__modal' modalisopen={modalOpen} setisopen={setModalOpen} callback={callback}>
				<div className="video-responsive">
					<iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</div>

			</Modal>}
		</>
	)
}

export default VideoModalWithoutBtn