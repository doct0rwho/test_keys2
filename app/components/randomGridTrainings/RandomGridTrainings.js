import React from 'react'
import { VRLibGrid } from '../grid/VRLibGrid'
import { getRandomTrainings } from '@/app/data/GetTrainingInfo'

import '../../vr-training-library/VrLib.css'


async function RandomGridTrainings() {
	const trainings = await getRandomTrainings()
	return (
		trainings ?
			<VRLibGrid trainings={trainings} lite={true} />
			: null
	)
}

export default RandomGridTrainings