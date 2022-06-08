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
<div className="card c-c-c" id="card1">
			<img alt={item.name} width={50} src={item.img} />
			<h3>{item.name}</h3>
			<div className="card-body">
				<p className="card-text">{item.endereco}</p>
			</div>
			<input onChange={e => checkChild(item.id, e.target.checked)} name={item.name} value="checkin feito" checked={item.isChecked} type='checkbox' />
		</div>
	)
}

const SaveButton = () => {
	return (
		<button className='some-btn fixed-btn' onClick={() => alert('Lista salva!')}>salvar</button>
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
			<div id="div-header">
				<PreviousButton />
				<h1>Gerenciar crianças</h1>
				<h4>Vagas 18/20</h4>
			</div>
			<div className='d-flex'>
				<span>Listagem diária</span>
				<span>
					{renderDate()}
				</span>
			</div>

			<div className="div-fundo-card" id="skin">
				<div className="div-card">
				</div>
			</div>
			{renderChildrenList(childrenList)}
			<SaveButton />
		</Fragment>
	)
}