import React, { Fragment, useState } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import newId from '../../../functions/newId'

const CheckinItem = ({ item, deleteFunc }) => {
	return (
		<figure>
			<img alt={item.name} width={50} src={item.img} />{' -- '}
			<span>{item.name}</span>
			<br />
			<span>{item.endereco}</span>{' -- '}
			<button onClick={() => deleteFunc(item.id)}>del</button>
		</figure>
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

	const renderChildrenList = drivers => {
		return drivers.map(c => <CheckinItem deleteFunc={deleteFunc} item={c} />)
	}

	return (
		<Fragment>
			<PreviousButton />
			<h1>Children</h1>
			{renderChildrenList(childrenList)}
		</Fragment>
	)
}