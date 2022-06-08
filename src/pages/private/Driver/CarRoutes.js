import React, { Fragment } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import Map from '../../../components/Map'
export default () => {
	return (
		<Fragment>
			<header className='map-header'>
				<PreviousButton />
				<h1>Rotas indicadas</h1>
			</header>
			<Map />
		</Fragment>
	)
}