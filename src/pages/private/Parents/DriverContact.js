import React, { Fragment } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import image from '../../../assets/images/image1.jpeg'

export default () => {
	return (
		<Fragment>
			<PreviousButton />
			<h1>Driver contact</h1>
			<img width={100} src={image} />
			<br />
			<a href="tel:11987654321">
				whatsapp
			</a>
			<br />
			<a href="mailto:email@test.com.br">
				email
			</a>
		</Fragment>
	)
}