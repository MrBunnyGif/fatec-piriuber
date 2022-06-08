import React, { useState, Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Auth from '../../Auth';
import PreviousButton from '../../components/PreviousButton';

export default () => {
	const navigate = useNavigate()
	const [req, setReq] = useState()
	const [isDriver, setDriver] = useState(undefined)

	const logIn = type => {
		// Auth.getUserType()
		navigate('/login')
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
					Nova conta
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
						Telefone
					</label>
					<br />
					<input type="password" placeholder='(xx) x xxx-xxxx' required />
				</div>


				<div>
					<label>
						É motorista?
						<input className='w-n' onChange={e => setDriver(e.target.checked)} type="checkbox" required />
					</label>
				</div>

				{isDriver != undefined ?
					isDriver === true ?
						<Fragment>
						<div>
							<label>
								Modelo do carro?
								<input placeholder='Modelo aqui' required />
							</label>
						</div>
						</Fragment>
						:
						<Fragment>
							<div>
							<label>
								Nome da criança
								<input placeholder='Nome e idade aqui' required />
							</label>
						</div>
						</Fragment>
					:
					<Fragment>
					</Fragment>
				}

				<div>
					<label>
						Senha
					</label>
					<br />
					<input type="password" placeholder='Insira sua senha aqui' required />
				</div>

				<div>
					<label>
						Confirme a senha
					</label>
					<br />
					<input type="password" placeholder='Insira sua senha aqui' required />
				</div>
				<button disabled={req} className='some-btn'>{req ? 'Entrando...' : 'Entrar'}</button>
			</form>
		</div>
	)
}