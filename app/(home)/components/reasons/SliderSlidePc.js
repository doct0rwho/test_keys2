import React from 'react'
import { Video } from '../../../components/video/Video'

import './SliderSlide.css'
import { VideoInSlider } from '../../../components/video/VideoInSlider'

function SliderSlidePc({ data, isActive, ...props }) {
	return (
		<div className='reasons-slider__slide'>
			<div className="reasons-slider__slide-text">
				<p className="text__body-bold">{data.title}</p>
				<p className="text__body">
  {data.text_0}<br />
  {data.text_1}
</p>
			</div>
			<div {...props} className="reasons-slider__slide-video" >
				<VideoInSlider src={data.videoUrl} thumb={data.thumb} isActive={isActive}  />
			</div>
		</div>
	)
}

export default SliderSlidePc