import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

export default () => {
	return (
		<Fragment>
			<p>
				<Link to='/home'>Motorista</Link>
			</p>
			<p>
				<Link to='/home'>Responsável</Link>
			</p>
		</Fragment>
	)
}