import React, { Fragment } from 'react'
import { Link, Navigate } from "react-router-dom";
import Auth from '../../Auth';
import newId from '../../functions/newId';
import { useNavigate } from 'react-router-dom';
import pencil from '../../assets/images/pencil.png'
import map from '../../assets/images/map.png'
import person from '../../assets/images/person.png'
import gadget from '../../assets/images/gadget.png'
import driver from '../../assets/images/driver.png'
import bus from '../../assets/images/bus.png'
import doc from '../../assets/images/doc.png'

const MenuOption = ({ item }) => {
	return (
		<div className="card" id="card1">
			<Link to={item.link}>
				<img src={item.icon} className="card-img-top" id="img1" />
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
				icon: pencil,
				link: '/checkin',
			},
			{
				title: 'Rotas Indicadas',
				icon: map,
				link: '/car-routes',
			},
			{
				title: 'Entrar em contato com Responsável',
				icon: person,
				link: '/parents-contact',
			},
			{
				title: 'Gerenciar Crianças',
				icon: gadget,
				link: '/manage-children',
			},
		],
		parent: [
			{
				title: 'Localizar filho(a)',
				icon: map,
				link: '/find-children',
			},
			{
				title: 'Entrar em contato com Perueiro',
				icon: driver,
				link: '/driver-contact',
			},
			{
				title: 'Lista de Perueiros',
				icon: bus,
				link: '/drivers-list',
			},
			{
				title: 'Informações do contrato',
				icon: doc,
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
				{
					user === 'driver' ?
						<h1 id="h1-cpf">CPF 111.111.111-11</h1>
						:
						<h1 id="h1-cpf">Pai do Carlos Almeida</h1>
				}
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