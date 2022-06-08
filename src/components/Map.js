import React, { Fragment } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyB7_VZnBjrAb_cM75LO0UZFtaCGAy0raTk"
	})

	return isLoaded ? (
		<div className='map-container'>
			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '100%' }}
				center={{
					lat: -23.496088,
					lng: -46.578231
				}}
				zoom={15}
			>
			</GoogleMap>
		</div>
	) : <Fragment></Fragment>
}