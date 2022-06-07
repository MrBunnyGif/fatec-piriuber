import React, { Fragment } from 'react'
import { Link, Navigate } from "react-router-dom";
import Auth from '../../Auth';
import newId from '../../functions/newId';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/pngegg (28) 1.png'

const MenuOption = ({ item }) => {
	console.log("🚀 ~ file: Home.js ~ line 7 ~ teste", teste)
	return (
		<div className="card" style={{ width: "18rem" }} id="card1">
			<Link to={item.link}>
			<img src="pngegg (28) 1.png" className="card-img-top" id="img1" />
			<div className="card-body">
				<p className="card-text" style={{ marginLeft: "50px" }}>{item.title}</p>
			</div>
			</Link>
		</div>
		// <figure>
		// 	<Link to={item.link}>{item.title}</Link>
		// </figure>
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
			<button onClick={() => handleLogout()}>Logout</button>



			{/* <!-- Icone de menu hamburguer --> */}
			<div className="toggle">
				<i className="fa fa-bars menu-icone" aria-hidden="true" style={{ transform: "translateX(-30%)" }}></i>
			</div>
			{/* <!-- Fim do icone --> */}
			{/* <!-- Header e Menu de navegação --> */}
			<header>
				{/* <!-- Aqui eu não mudei muitas coisas, apenas deixei responsivo, olha no css que você vai entender melhor --> */}
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
				<h1 id="h1-cpf">CPF 111.111.111-11</h1>"
			</div>

			<section>
				<div className="div-fundo-card" id="skin">
					<div className="div-card">

						{renderOptions(menuOptions[user])}
						{/* <div className="card" style={{ width: "18rem" }} id="card1">
							<img src="pngegg (28) 1.png" className="card-img-top" id="img1" />
							<div className="card-body">
								<p className="card-text" style={{ marginLeft: "50px" }}>Checkin da Pirua</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }} id="card2">
							<img src="pngegg (27) 1.png" className="card-img-top" id="img2" />
							<div className="card-body">
								<p className="card-text" style={{ marginLeft: "50px" }}>Rotas Indicadas</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }} id="card3">
							<img src="pngegg (29) 1.png" className="card-img-top" id="img3" />
							<div className="card-body">
								<p className="card-text" style={{ marginLeft: "50px" }}>Entrar em contato com o Responsável</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }} id="card4">
							<img src="pngegg (30) 1.png" className="card-img-top" id="img4" />
							<div className="card-body">
								<p className="card-text" style={{ marginLeft: "50px" }}>Gerenciar Crianças</p>
							</div>
						</div> */}

					</div>
				</div>
			</section>

		</Fragment>
	)
}