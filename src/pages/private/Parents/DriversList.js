import React, { Fragment } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import newId from '../../../functions/newId'
import image1 from '../../../assets/images/image1.jpeg'
import image2 from '../../../assets/images/image2.jpeg'
import image3 from '../../../assets/images/image3.jpeg'
import image4 from '../../../assets/images/image4.jpeg'
import image5 from '../../../assets/images/image5.jpeg'
import image6 from '../../../assets/images/image6.jpeg'
import tel from '../../../assets/images/tel.png'

const CheckinItem = ({ item, checkChild }) => {
	return (
		<div className="card c-c-c" id="card1">
			<img alt={item.name} className="radius" width={50} src={item.img} />
			<h3>{item.name}</h3>
			<div className="card-body">
				<p className="card-text">
					{item.endereco}
				</p>
				<span>{item.vagas}</span>
			</div>
			<a href={`tel:${item.tel}`}>
				<img width={25} src={tel} />
			</a>
		</div>

		// <figure>
		// 	<img alt={item.name} width={50} src={item.img} />{' -- '}
		// 	<span>{item.name}</span>{' -- '}
		// </figure>
	)
}

export default () => {
	const driversList = [
		{
			id: newId(),
			img: image2,
			name: 'Lúcia',
			vagas: 'Vagas 7/10',
			tel: '11987654321'
		},
		{
			id: newId(),
			img: image4,
			name: 'Luciana',
			vagas: 'Vagas 1/10',
			tel: '11987654321'
		},
		{
			id: newId(),
			img: image3,
			name: 'Carlos',
			vagas: 'Vagas 17/20',
			tel: '11987654321'
		},
		{
			id: newId(),
			img: image1,
			name: 'Olivia',
			vagas: 'Vagas 8/10',
			tel: '11987654321'
		},
		{
			id: newId(),
			img: image6,
			name: 'Maria',
			vagas: 'Vagas 5/10',
			tel: '11987654321'
		},
		{
			id: newId(),
			img: image5,
			name: 'João',
			vagas: 'Vagas 0/10',
			tel: '11987654321'
		},
	]

	const renderDriversList = drivers => {
		return drivers.map(c => <CheckinItem item={c} />)
	}

	return (
		<Fragment>
			<div id="div-header">
			<PreviousButton />
				<h1>Lista de motoristas</h1>
			</div>

			<div className="div-fundo-card" id="skin">
				<div className="div-card">
				</div>
			</div>
			<h1>Driver list</h1>
			{renderDriversList(driversList)}
		</Fragment>
	)
}