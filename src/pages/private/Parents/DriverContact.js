import React, { Fragment } from 'react'
import PreviousButton from '../../../components/PreviousButton'

export default () => {
	return (
		<Fragment>
			<PreviousButton />
			<h1>Driver contact</h1>
			<img src={''}/>
			<a href="tel:11987654321">
				whatsapp
			</a>
<br/>
			<a href="mailto:email@test.com.br">
				email
			</a>
		</Fragment>
	)
}