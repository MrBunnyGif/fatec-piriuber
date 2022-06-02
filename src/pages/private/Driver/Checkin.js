import React, { Fragment, useState } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import newId from '../../../functions/newId'

const CheckinItem = ({ item, checkChild }) => {
	return (
		<figure>
			<img alt={item.name} width={50} src={item.img} />{' -- '}
			<span>{item.name}</span>{' -- '}
			<input onChange={e => checkChild(item.id, e.target.checked)} name={item.name} value="checkin feito" checked={item.isChecked} type='checkbox' />
		</figure>
	)
}

export default () => {
	const [childrenList, setChildrenList] = useState([
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-803a33ec6b8b060c3acb95ed1604b64f.jpg',
			name: 'Olivia',
			isChecked: false
		},
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-5937a06971cf66a9b2d242b3a4417c7e.jpg',
			name: 'Lúcia',
			isChecked: false
		},
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-e9528e4af6eb67fef293bb4bed714b2d.jpg',
			name: 'Carlos',
			isChecked: false
		},
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-639563554ff70b04814920715c539873.jpg',
			name: 'Luciana',
			isChecked: true
		},
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-b483b61c31afc57cecb31a8a04dd18ea.jpg',
			name: 'João',
			isChecked: false
		},
		{
			id: newId(),
			img: 'https://this-person-does-not-exist.com/img/avatar-55f4dd7b723111eba9c1a8aeca8b7847.jpg',
			name: 'Maria',
			isChecked: false
		}
	])

	const checkChild = (id, value) => {
		let listModified = [...childrenList]
		listModified = listModified.map(currChild => {
			if (currChild.id === id) {
				return { ...currChild, isChecked: value }
			}
			return currChild
		})
		setChildrenList(listModified)
	}

	const renderChildrenList = children => {
		return children.map(c => <CheckinItem item={c} checkChild={checkChild} />)
	}

	return (
		<Fragment>
			<PreviousButton />
			<h1>Checkin</h1>
			{renderChildrenList(childrenList)}
		</Fragment>
	)
}