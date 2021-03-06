import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Auth from '../../Auth';
import PreviousButton from '../../components/PreviousButton';

export default () => {
	const navigate = useNavigate()
	const [req, setReq] = useState()

	const logIn = type => {
		// Auth.getUserType()
		navigate('/home')
	}

	const handleSubmit = e => {
		e.preventDefault()
		setReq(true)

		setTimeout(() => {
			logIn('driver')
		}, 2000)
	}

	return (
		<div className='form'>
			<div className='h1'>
				<PreviousButton logout />
				<h1>
					Login
				</h1>
			</div>
			<form onSubmit={e => handleSubmit(e)}>
				<div>
					<label>
						E-mail
					</label>
					<br />
					<input type="email" placeholder='Insira seu email aqui' required />
				</div>
				<div>
					<label>
						Senha
					</label>
					<br />
					<input type="password" placeholder='Insira sua senha aqui' required />
				</div>
				<button disabled={req} className='some-btn'>{req ? 'Entrando...' : 'Entrar'}</button>
			</form>
			<Link to="/create">
				Criar conta
			</Link>
		</div>
	)
}