'use client'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { currentValute, pricePerModule, sumMonthly, sumAnnually, priceVideoSpace } from '@/app/variables/planPrice'

import { Checkbox } from '@/app/ui/checkbox/Checkbox'
import { Count } from '@/app/ui/count/Count'
import { Switch } from '@/app/ui/switch/Switch'
import Button from '@/app/ui/button/Button'
import CheckIcon from '@/app/ui/icons/CheckIcon'
import CircleInfo from '@/app/ui/icons/CircleInfo'
// import { TooltipIcon } from '@/app/ui/tooltipIcon/TooltipIcon'
import dynamic from 'next/dynamic'


const TooltipIcon = dynamic(() =>
	import('@/app/ui/tooltipIcon/TooltipIcon').then(mod => mod.default),
	{ ssr: false }
)


import './FlexForm.css'
 
function FlexForm({
	title,
	description_0,
	description_1,
	numberLicenses,
	tooltip_0,
	videoSet,
	tooltip_1,
	month,
	uploadVideo,
	classroom,
	videoPlayer,
	SubscriptionPeriod,
	period,
	tooltip_2,
	modulesMult,
	headsetMult,
	standardPlan,
	videoSetUpTo,
	uploadLimits,
	totalPrice: totalPriceText,
	buttonBack,
	buttonNext,
	likeStandard,
	licenses,
	limit,
	trainingsForRender 
}) {
	const [selectedTrainings, setSelectedTrainings] = useState(
	Object.fromEntries(trainingsForRender.map(t => [t.name, false]))
);


	const flexTrainingsCount = 10;

	const [count, setCount] = useState(1)
	const [trainingCount, setTrainingCount] = useState(0)
	const [onVideos, setOnVideos] = useState(false)
	const [radiobtn, setRadiobtn] = useState({
		value: 10,
		label: `${limit}`
	})

	const [totalPrice, setTotalPrice] = useState(0)
	const [trainingsPrice, setTrainingsPrice] = useState(0)
	const [videoPrice, setVideoPrice] = useState(0)
	const [standardTotal, setStandardTotal] = useState(0)

	const [loadingSend, setLoadingSend] = useState(false)

	useEffect(() => {
		// Проверяем, выполняется ли код на стороне клиента
		if (typeof window !== 'undefined') {
			// Создаем экземпляр URLSearchParams с текущей строкой запроса
			const queryParams = new URLSearchParams(window.location.search);
			// Получаем значение параметра 'ref'
			const refValue = queryParams.get('ref');
			if (refValue) {
				setSelectedTrainings({
					...selectedTrainings,
					[refValue]: true
				})
				setTrainingCount(trainingCount + 1)
			}
		}
	}, []);

	const options = [
		{ value: 'monthly', label: 'Monthly' },
		{ value: 'annually', label: 'Annual' },
	]

	const [selectOption, setSelectOption] = useState(options[0])

	const onChangeSelectFilter = (value) => {
		setSelectOption(value)
	}

	const onCheck = (e) => {
		setSelectedTrainings({ ...selectedTrainings, [e.target.name]: !selectedTrainings[e.target.name] })
		if (selectedTrainings[e.target.name]) {
			setTrainingCount(trainingCount - 1)
		} else {
			if (trainingCount === flexTrainingsCount) setOnVideos(false)
			setTrainingCount(trainingCount + 1)
		}
	}

	const calculatePrice = (price) => {
		if (selectOption.value === 'annually') {
			if (count >= 50) {

				return Math.round((sumAnnually - sumAnnuallySaleAbove50) * count)
			} else if (count >= 20) {

				return Math.round((sumAnnually - sumAnnuallySaleAbove20) * count)

			} else {

				return Math.round(sumAnnually * count)
			}
		} else {

			return Math.round(price * count)
		}
	}



	const onCalcTotalPrice = () => {
		let total = 0
		let trainPrice = 0
		let videoPrice

		if (trainingCount === flexTrainingsCount) {
			setStandardTotal(calculatePrice(sumMonthly, count, selectOption.value === 'annually' ? true : false))
			setOnVideos(false)
		}

		trainPrice = trainingCount * pricePerModule * count * (selectOption.value === 'annually' ? 12 : 1)
		setTrainingsPrice(trainPrice)

		videoPrice = selectOption.value === 'annually' ? +radiobtn.value * 10 : +radiobtn.value
		setVideoPrice(videoPrice)

		total = trainPrice + (onVideos ? videoPrice : 0)
		setTotalPrice(total)
	}

	useEffect(() => {
		onCalcTotalPrice()
	}, [trainingCount, count, onVideos, radiobtn, selectOption])


	const handleBack = (e) => {
		e.preventDefault();
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	const onSendForm = async (e) => {
		e.preventDefault()
		setLoadingSend(true)

		const trueKeys = Object.keys(selectedTrainings).filter(key => selectedTrainings[key] === true).join(',');
		const paramsString = '?' + 'selectedmoduls=' + trueKeys + '&quantitymoduls=' + count + '&videomodule=' + (onVideos ? '1' : '0')

		window.open(`https://app.metaenga.com/self-registration` + paramsString)

		setLoadingSend(false)
	}


	return (
		<div className={`flex-form`}>
			<h1 className="main__header">{title}</h1>

			<form onSubmit={onSendForm}>
				<p className="text__body">{description_0} <span className='text__body-light' style={{ fontSize: 16 }}>({currentValute}{pricePerModule}{description_1} )</span></p>
				<div className="flex-form__section form-section">

					{trainingsForRender.map((item, index) => {
						return (
							<div className="flex-form__row" key={index}>
								<Checkbox name={item.name} checked={selectedTrainings[item.name]} onChange={onCheck} > {item.label} {selectedTrainings[item.name] && <span style={{ whiteSpace: 'nowrap' }}>({licenses} {count})</span>}</Checkbox>
							</div>
						)
					})}
					<p className="caption-light" style={trainingCount === flexTrainingsCount ? { opacity: 1 } : { opacity: 0 }}>
						<CircleInfo fill='#1FB155' size={16} /> {likeStandard}{currentValute}{totalPrice - standardTotal}
					</p>
				</div>
				<div className="flex-form__section section__count">
					<div className="section__count-count ">
						<p className='text__body' style={{ marginBottom: 2 }}>{numberLicenses}<TooltipIcon tooltip={tooltip_0} place='top' />
						<span className='caption-light' style={{ width: '100%' }}>{currentValute}{pricePerModule} {description_1}</span></p>
						<Count id='licenses-count-calc' count={count} setCount={setCount} max={150} min={1} disabled={trainingCount === 0} />
					</div>
				</div>
				<div className={classNames('flex-form__section', 'video-section', onVideos ? '' : 'disabled')}>
					<div className="video-section__row">
						<div className={classNames('text__body')} style={{ marginBottom: 8 }}>{videoSet} <TooltipIcon tooltip={tooltip_1} place='top' /></div>

						<Switch checked={onVideos} onChange={() => setOnVideos(!onVideos)}><span style={{ display: 'flex', alignItems: 'baseline' }}>{currentValute}{priceVideoSpace}<span className='caption-light'>/{month}</span></span></Switch>
					</div>
					<div className="video-section__future">
						<CheckIcon fill={onVideos ? '#979DA5' : '#C1C4C9'} />
						<p className='text__body'>{uploadVideo}</p>
					</div>
					<div className="video-section__future">
						<CheckIcon fill={onVideos ? '#979DA5' : '#C1C4C9'} />
						<p className='text__body'>{classroom}</p>
					</div>
					<div className="video-section__future">
						<CheckIcon fill={onVideos ? '#979DA5' : '#C1C4C9'} />
						<p className='text__body'>{videoPlayer}</p>
					</div>
 
				</div>

				<div className="section__count-select">
				<div className='text__body' style={{ marginBottom: 2 }}>
  {SubscriptionPeriod} <span style={{ fontWeight: 400, marginLeft: 8 }}>{period}</span>
  <TooltipIcon tooltip={tooltip_2} place='top' />
</div>

				</div>

				<div className="flex-form__section total-section">
					<div className="total-section__subtext" style={trainingCount === 0 ? { opacity: 0 } : { opacity: 1 }}>
						<p className='caption-light' style={{ marginBottom: 2 }}>{currentValute}{pricePerModule}×{trainingCount} {modulesMult}{count} {headsetMult}{selectOption.value === 'annually' ? '12 ' : ''}{month} {trainingCount === flexTrainingsCount ? {standardPlan} : ''}</p>
						<p className='caption-light' style={{ marginBottom: 2 }}>{currentValute}{trainingCount === flexTrainingsCount ? standardTotal : trainingsPrice}</p>
					</div>
					<div className="total-section__subtext" style={(trainingCount === flexTrainingsCount || onVideos) ? { opacity: 1 } : { opacity: 0 }}>
						<p className='caption-light' style={{ marginBottom: 2 }}>{videoSetUpTo}{(` `)}{trainingCount === flexTrainingsCount ? {limit} : radiobtn.label}{(` `)}{uploadLimits}</p>
						<p className='caption-light' style={{ marginBottom: 2 }}>{currentValute}{trainingCount === flexTrainingsCount ? '0' : videoPrice}</p>
					</div>
					<div className="total-section__price">
						<p className="text__body">{totalPriceText}</p>
						<p className="text__body-bold">{currentValute}{trainingCount === flexTrainingsCount ? standardTotal : totalPrice}</p>
					</div>
					<div className="total-section__btns">
						<a className='btn-link secondary' onClick={handleBack} >{buttonBack}</a>
						<Button className='btn primary' type='submit' disabled={totalPrice === 0} loading={loadingSend}>{buttonNext}</Button>
					</div>
				</div>
			</form >
		</div >
	)
}

export default FlexForm