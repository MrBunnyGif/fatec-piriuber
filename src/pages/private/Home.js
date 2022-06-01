import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

export default () => {
	return (
		<Fragment>
			<h2>Motorista:</h2>
			<p>
				<Link to='/checkin'>Checkin</Link>
			</p>
			<p>
				<Link to='/car-routes'>Rotas</Link>
			</p>
			<p>
				<Link to='/parents-contact'>Contato responsável</Link>
			</p>
			<p>
				<Link to='/manage-children'>Gerenciar crianças</Link>
			</p>
			<h2>Responsável:</h2>
			<p>
				<Link to='/find-children'>Localizar</Link>
			</p>
			<p>
				<Link to='/driver-contact'>Contato Perueiro</Link>
			</p>
			<p>
				<Link to='/drivers-list'>Lista de perueiros</Link>
			</p>
			<p>
				<Link to='/parents-profile'>Informações</Link>
			</p>
		</Fragment>
	)
}