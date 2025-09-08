"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import SliderSlidePc from "./SliderSlidePc";

import './ReasonsSlider.css';
import Image from "next/image";
import classNames from "classnames";
import { CircularProgress } from "@/app/ui/circularProgress/CircularProgress";



function ReasonsSlider({ blocks, intervalDuration = 7000 }) {
	const [swiperInstance, setSwiperInstance] = useState(null);
	const menuItemsRef = useRef([]);
	const [isSliderVisible, setIsSliderVisible] = useState(false);
	const sliderRef = useRef(null);
	const [usedSlide, setUsedSlide] = useState(0);

	const onMenuItemClick = (index) => {
		if (swiperInstance) {
			swiperInstance.slideToLoop(index);
		}
	};

	const onSwiper = (swiper) => {
		setSwiperInstance(swiper);
		swiper.autoplay.stop(); // Always stop autoplay initially
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setIsSliderVisible(true);
				observer.unobserve(sliderRef.current);
			}
		});

		if (sliderRef.current) {
			observer.observe(sliderRef.current);
		}

		return () => {
			if (sliderRef.current) {
				observer.unobserve(sliderRef.current);
			}
		};
	}, [sliderRef]);

	useEffect(() => {
	if (isSliderVisible && swiperInstance?.autoplay?.start) {
		swiperInstance.slideToLoop(0);
		swiperInstance.autoplay.start();
	} else if (swiperInstance?.autoplay?.stop) {
		swiperInstance.autoplay.stop();
	}
}, [isSliderVisible, swiperInstance]);


	return (
		<>
			<div className="reasons__flex" style={{ display: "flex" }}>
				<div
					ref={sliderRef}
					className={`reasons__slider ${isSliderVisible ? "active" : ""}`}
				>
					<Swiper
						initialSlide={0}
						slidesPerView={"auto"}
						onSwiper={onSwiper}
						spaceBetween={0}
						centeredSlides={true}
						autoplay={{
							delay: intervalDuration,
							disableOnInteraction: false,
							enabled: false, // Autoplay disabled initially
						}}
						loop={true}
						pagination={true}
						modules={[Pagination, Autoplay]}
						className="reasons__swiper"
						onSlideChange={(swiper) => setUsedSlide(swiper.realIndex)}
					>
						{blocks.map((block, index) => (
							<SwiperSlide key={block.id}>
								<SliderSlidePc data={block} isActive={usedSlide === index} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="reasons__menu">
					{blocks.map((block, index) => (
						<div
							key={block.id}
							ref={(el) => (menuItemsRef.current[index] = el)}
							onClick={() => onMenuItemClick(index)}
							className={classNames(
								"reasons__menu-item",
								usedSlide === index ? "active" : ""
							)}
						>
							<div className="reasons__menu-item-icon">
								{usedSlide === index ? (
									<div className="reasons__menu__circular-progress">
										<CircularProgress duration={intervalDuration / 1000} />
									</div>
								) : (
									<Image src={block.icon} alt="icon" width={24} height={24} />
								)}
							</div>
							  <div className="reasons__menu-item-text">
              <p className="text__body-bold">{block.title}</p>
              <p className="text__body">
                {block.text_0}
                <br />
                {block.text_1}
              </p>
            </div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ReasonsSlider;
