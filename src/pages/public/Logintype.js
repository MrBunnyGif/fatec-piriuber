import React, { Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Auth from '../../Auth';

export default () => {
	const navigate = useNavigate()

	const logIn = type => {
		Auth.login(type)
		navigate('/login')
	}

	return (
		<div className='interface'>

			<div id="div-btn-motorista">
				<button id="btn-motorista" onClick={() => logIn('driver')}>Interface Motorista/Assistente</button>
			</div>
			<div id="div-btn-responsavel">
				<button id="btn-responsavel" onClick={() => logIn('parent')}>Interface Responsável</button>
			</div>
		</div>
	)
}