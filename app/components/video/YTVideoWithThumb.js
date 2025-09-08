'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import cl from '../../vr-training-library/[id]/components/Overview.module.css'


function YTVideoWithThumb({source}) { 
	const [playVideo, setPlayVideo] = useState(false)
	useEffect(() => {
		setPlayVideo(false)
	  return () => {
		 setPlayVideo(false)
	  }
	}, [source])

  return (
	playVideo
		? <div className={cl.overview__video_iframe}>
			<iframe width="100%" height="100%" src={source?.ytvideo} title={source?.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
		: <div className={cl.overview__video_picture} onClick={() => setPlayVideo(true)}>
			<Image src={source?.thumb} alt={source?.videoalt} width={960} height={540}  />
			<i className="icon-play2"></i>
		</div>

	
  )
}

export default React.memo(YTVideoWithThumb);