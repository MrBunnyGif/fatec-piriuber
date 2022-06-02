import React, { Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Auth from '../../Auth';

export default () => {
	const navigate = useNavigate()

	const logIn = type => {
		Auth.login(type)
		navigate('/home')
	}

	return (
		<Fragment>
			<button onClick={() => logIn('driver')}>
				Motorista
			</button>
			<button onClick={() => logIn('parent')}>
				Responsável
			</button>
		</Fragment>
	)
}