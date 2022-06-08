import React, { Fragment } from 'react'
import Map from '../../../components/Map'
import PreviousButton from '../../../components/PreviousButton'

export default () => {
	return (
		<Fragment>
			<header className='map-header'>
				<PreviousButton />
				<h1>Find Children</h1>
			</header>
			<Map />
		</Fragment>
	)
}