import React, { Fragment as div } from 'react'
import PreviousButton from '../../../components/PreviousButton'
import mail from '../../../assets/images/mail.png'
import zap from '../../../assets/images/zap.png'
import image from '../../../assets/images/image4.jpeg'

export default () => {
	return (
		<div className='contato-p'>
			<PreviousButton />
			<div id="div-img">
				<img src={image} height="270" width="250" />
			</div>
			<h1 id="nome">Claúdio Borges</h1>

			<div id="div-wpp-msg">
				<div id="fundo-wpp-msg">
					<a href="tel:11987654321">
						<div id="div-wpp">
							<img src={zap} width="50" id="img-wpp" />
						</div>
					</a>
					<a href="mailto:email@test.com.br">
						<div id="div-msg">
							<img src={mail} width="50" id="img-msg" />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}