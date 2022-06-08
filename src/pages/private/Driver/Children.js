import React, { Fragment as div, useState } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import newId from '../../../functions/newId'

const CheckinItem = ({ item, deleteFunc }) => {
	return (

		<div className="card" id="card1">
			<h3>{item.name}</h3>
			<div className="card-body">
				<p className="card-text">{item.endereco}</p>
			</div>
			<button onClick={() => deleteFunc(item.id)} className='delete-btn'>Deletar</button>
		</div>
	)
}

export default () => {
	const [childrenList, setChildrenList] = useState([
		{
			id: newId(),
			name: 'Lúcia',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
		{
			id: newId(),
			name: 'Luciana',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
		{
			id: newId(),
			name: 'Carlos',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
		{
			id: newId(),
			name: 'Olivia',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
		{
			id: newId(),
			name: 'Maria',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
		{
			id: newId(),
			name: 'João',
			endereco: 'Endereço Rua Avenida Numero 000',
		},
	])

	const deleteFunc = id => {
		const filtered = childrenList.filter(c => {
			if (c.id !== id)
				return c
		})
		setChildrenList(filtered)
	}

	const addChild = () => {
		const newChild = {
			id: newId(),
			name: 'Nome aqui',
			endereco: 'Endereço Rua Avenida Numero 000',
		}

		setChildrenList([...childrenList, newChild])
	}

	const renderChildrenList = drivers => {
		return drivers.map(c => <CheckinItem deleteFunc={deleteFunc} item={c} />)
	}

	return (
		<div id="c-c">

			<div id="div-header">
			<PreviousButton />
				<h1>Gerenciar crianças</h1>
				<h4>Vagas 18/20</h4>
			</div>

			<div className="div-fundo-card" id="skin">
				<div className="div-card">
				</div>
			</div>

			{renderChildrenList(childrenList)}
			<button className='some-btn fixed-btn' onClick={() => addChild()}>Adicionar</button>
		</div>
	)
}