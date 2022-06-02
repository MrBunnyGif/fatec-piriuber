import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Auth from '../../Auth';
import newId from '../../functions/newId';

const MenuOption = ({ item }) => {
	return (
		<figure>
			<Link to={item.link}>{item.title}</Link>
		</figure>
	)
}

export default () => {
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

	console.log("🚀 ~ file: Home.js ~ line 70 ~ user", user)
	return (
		<Fragment>
			{renderOptions(menuOptions[user])}
		</Fragment>
	)
}