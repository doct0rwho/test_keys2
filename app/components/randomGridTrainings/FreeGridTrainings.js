import React from 'react'
import { VRLibGrid } from '../grid/VRLibGrid'
import { getFreeTraining } from '@/app/data/GetTrainingInfo'

import '../../vr-training-library/VrLib.css'


async function FreeGridTrainings() {
	const trainings = await getFreeTraining()

	return (
		trainings ?
			<VRLibGrid trainings={trainings} lite={true} />
			: null
	)
}

export default FreeGridTrainings