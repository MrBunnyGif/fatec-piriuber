import clearObject from "./functions/clearObject"

class Auth {
	constructor() {
		this.currUser = undefined
	}

	login(type) {
		const currUser = {
			userType: type,
			name: 'Nome',
			children: 'Criança',
			prefix: 'prefix',
			cpf: 'cpf',
		}
		this.currUser = currUser
		localStorage.setItem('currUser', JSON.stringify(currUser))
	}

	logout() {
		this.currUser = undefined
		localStorage.removeItem('currUser')
	}

	getAuth() {
		const storagedUser = localStorage.getItem('currUser')
		if(storagedUser)
			this.currUser = JSON.parse(storagedUser)
		return this.currUser !== undefined
	}

	getUserType() {
		const storagedUser = localStorage.getItem('currUser')
		if (storagedUser) {
			this.currUser = JSON.parse(storagedUser)
			return this.currUser.userType
		}
		this.currUser = undefined
		return undefined
	}
}

export default new Auth()