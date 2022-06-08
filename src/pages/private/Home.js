import React, { Fragment } from 'react'
import { Link, Navigate } from "react-router-dom";
import Auth from '../../Auth';
import newId from '../../functions/newId';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/pngegg (28) 1.png'

const MenuOption = ({ item }) => {
	return (
		<div className="card" id="card1">
			<Link to={item.link}>
				<img src="pngegg (28) 1.png" className="card-img-top" id="img1" />
				<div className="card-body">
					<p className="card-text" style={{ marginLeft: "50px" }}>{item.title}</p>
				</div>
			</Link>
		</div>
	)
}

export default () => {
	const navigate = useNavigate()
	const user = Auth.getUserType()
	const menuOptions = {
		driver: [
			{
				title: 'Checkin da Pirua',
				icon: 'lapis',
				link: '/checkin',
			},
			{
				title: 'Rotas Indicadas',
				icon: 'mapa',
				link: '/car-routes',
			},
			{
				title: 'Entrar em contato com Responsável',
				icon: 'pessoa',
				link: '/parents-contact',
			},
			{
				title: 'Gerenciar Crianças',
				icon: 'engrenagem',
				link: '/manage-children',
			},
		],
		parent: [
			{
				title: 'Localizar filho(a)',
				icon: 'mapa',
				link: '/find-children',
			},
			{
				title: 'Entrar em contato com Perueiro',
				icon: 'motorista',
				link: '/driver-contact',
			},
			{
				title: 'Lista de Perueiros',
				icon: 'perua',
				link: '/drivers-list',
			},
			{
				title: 'Informações do contrato',
				icon: 'lapis',
				link: '/parents-profile',
			},
		]
	}

	const renderOptions = options => {
		return options.map(option => <MenuOption key={newId()} item={option} />)
	}

	const handleLogout = () => {
		Auth.logout()
		navigate('/')
	}

	return (
		<Fragment>
			<div className="toggle">
			<button onClick={() => handleLogout()}>Logout</button>

				<i className="fa fa-bars menu-icone" aria-hidden="true" style={{ transform: "translateX(-30%)" }}></i>
			</div>
			<header>
				<div className="header-menu">
					<div className="logo">
						<img src="" alt="" />
					</div>
					<nav>
						<ul>
							<li><a href="#"><i>Menu 1</i></a></li>
							<li><a href=""><i>Menu 2</i></a></li>
							<li><a href="#"><i>Menu 3</i></a></li>
							<li><a href="#"><i>Menu 4</i></a></li>
						</ul>
					</nav>
				</div>
			</header>

			<div id="nome-cpf">
				<h1 id="h1-nome">Marivaldo Soares</h1>
				<h1 id="h1-cpf">CPF 111.111.111-11</h1>
			</div>

			<section>
				<div className="div-fundo-card" id="skin">
					<div className="div-card">

						{renderOptions(menuOptions[user])}
					</div>
				</div>
			</section>

		</Fragment>
	)
}