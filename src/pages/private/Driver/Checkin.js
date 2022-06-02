import React, { Fragment, useState } from 'react'
import PreviousButton from '../../../components/PreviousButton'

const CheckinItem = ({ item }) => {
	return (
		<figure>
			<img width={50} src={item.img} />{' -- '}
			<span>{item.name}</span>{' -- '}
			<span>{item.isChecked ? 'S' : 'N'}</span>
		</figure>
	)
}

export default () => {
	const [childrenList, setChildrenList] = useState([
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-803a33ec6b8b060c3acb95ed1604b64f.jpg',
			name: 'Olivia',
			isChecked: false
		},
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-5937a06971cf66a9b2d242b3a4417c7e.jpg',
			name: 'Lúcia',
			isChecked: false
		},
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-2eb39d0e74ec8980afeddd9d45baf3ff.jpg',
			name: 'Carlos',
			isChecked: false
		},
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-639563554ff70b04814920715c539873.jpg',
			name: 'Maria',
			isChecked: true
		},
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-b483b61c31afc57cecb31a8a04dd18ea.jpg',
			name: 'João',
			isChecked: false
		},
		{
			img: 'https://this-person-does-not-exist.com/img/avatar-55f4dd7b723111eba9c1a8aeca8b7847.jpg',
			name: 'Maria',
			isChecked: true
		}
	])

	const renderChildrenList = children => {
		return children.map(c => <CheckinItem item={c} />)
	}

	return (
		<Fragment>
			<PreviousButton />
			<h1>Checkin</h1>
			{renderChildrenList(childrenList)}
		</Fragment>
	)
}