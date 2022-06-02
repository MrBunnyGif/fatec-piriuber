import React, { Fragment, useState } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import newId from '../../../functions/newId'
import image1 from '../../../assets/images/image1.jpeg'
import image2 from '../../../assets/images/image2.jpeg'
import image3 from '../../../assets/images/image3.jpeg'
import image4 from '../../../assets/images/image4.jpeg'
import image5 from '../../../assets/images/image5.jpeg'
import image6 from '../../../assets/images/image6.jpeg'

const CheckinItem = ({ item, checkChild }) => {
	return (
		<figure>
			<img alt={item.name} width={50} src={item.img} />{' -- '}
			<span>{item.name}</span>{' -- '}
			<input onChange={e => checkChild(item.id, e.target.checked)} name={item.name} value="checkin feito" checked={item.isChecked} type='checkbox' />
		</figure>
	)
}

const SaveButton = () => {
	return (
		<button onClick={() => alert('Lista salva!')}>salvar</button>
	)
}

export default () => {
	const [childrenList, setChildrenList] = useState([
		{
			id: newId(),
			img: image1,
			name: 'Olivia',
			isChecked: false
		},
		{
			id: newId(),
			img: image2,
			name: 'Lúcia',
			isChecked: false
		},
		{
			id: newId(),
			img: image3,
			name: 'Carlos',
			isChecked: false
		},
		{
			id: newId(),
			img: image4,
			name: 'Luciana',
			isChecked: true
		},
		{
			id: newId(),
			img: image5,
			name: 'João',
			isChecked: false
		},
		{
			id: newId(),
			img: image6,
			name: 'Maria',
			isChecked: false
		}
	])

	const renderDate = () => {
		var data = new Date();
		var dia = String(data.getDate()).padStart(2, '0');
		var mes = String(data.getMonth() + 1).padStart(2, '0');
		var ano = data.getFullYear();
		return dia + '/' + mes + '/' + ano;
	}
	renderDate()

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
			{renderDate()}
			{renderChildrenList(childrenList)}
			<SaveButton />
		</Fragment>
	)
}