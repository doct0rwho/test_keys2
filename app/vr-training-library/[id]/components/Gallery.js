'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import cl from './Gallery.module.css'
import { useWindowSize } from './../../../hooks/useWindowWidth';
import { Modal } from '@/app/ui/modal/Modal';


function Gallery({ slides, title }) {
	const winWidth = useWindowSize();
	return (
		<div className={cl.gallery}>
			<div className="header__container">
				<div style={{ width: '100%' }}>
					<p className='main__header title'>{title}</p>

					{winWidth > 767.5 && <PcModule slides={slides} />}
				</div>
			</div>
			{winWidth < 767.5 && <MobileModule slides={slides.mob} />}
		</div>
	)
}

export default Gallery

function PcModule({ slides }) {
	const [modalOpen, setModalOpen] = useState(0)
	return <>
		<div className={cl.gallery__grid}>
			{slides.pc.map((el, i) => {
				return <div className={cl.gallery__grid_item} key={i} onClick={() => setModalOpen(i + 1)}>
					<Image
						src={el[0]}
						alt={el[1]}
						width={390}
						height={220}
						quality={80}
						sizes="30vw"
						style={{
							width: '100%',
							height: 'auto',
						}} 
						/>
				</div>;
			})}
		</div>
		<Modal modalisopen={modalOpen} setisopen={setModalOpen} className={cl.modal} callback={() => setModalOpen(0)}>
			<div className={cl.gallery__slider}>
				<ModalSlider modalOpen={modalOpen} setisopen={setModalOpen} slides={slides.pc} />
			</div>
		</Modal>
	</>;
}

function MobileModule({ slides }) {
	return <div className={cl.gallery__slider}><Swiper
		pagination={{
			clickable: true,
		}}

		navigation={false}
		modules={[EffectFade, Pagination, Navigation, Autoplay]}
		loop={true}
		className='gallery__swiper'
	>
		{slides.map((el, i) => {
			return <SwiperSlide key={i}>
				<div className={cl.gallery__slider_slide}>
					<Image 
					src={el[0]} 
					alt={el[1]} 
					width={720} 
					height={405} 
					quality={100}
					sizes="100vw"
					style={{
						width: '100%',
						height: 'auto',
					}} 
					/>
				</div>
			</SwiperSlide>;
		})}

	</Swiper>;
	</div>
}

function ModalSlider({ modalOpen, setisopen, slides }) {
	return modalOpen ? <Swiper
		initialSlide={modalOpen - 1}
		navigation={true}
		modules={[EffectFade, Navigation, Autoplay]}
		loop={true}
		className='gallery__swiper'
	>
		{slides.map((el, i) => {
			return <SwiperSlide key={i}>
				<div className={cl.gallery__slider_slide}>
					<Image
						src={el[0]}
						alt={el[1]}
						width={1536}
						height={864}
						quality={100}
						sizes="100vw"
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
			</SwiperSlide>;
		})}

	</Swiper> : null
}
