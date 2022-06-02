import React, { Fragment } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import { Navigate } from 'react-router-dom'
import Auth from '../../../Auth'

export default () => {
	if (!Auth.getAuth())
		return <Navigate to="/" />
	return (
		<Fragment>
			<PreviousButton />
			<h1>Children</h1>
		</Fragment>
	)
}