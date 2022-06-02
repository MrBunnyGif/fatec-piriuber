import clearObject from "./functions/clearObject"

class Auth {
	constructor() {
		this.isAuthenticated = false
		this.currUser = {}
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
		this.isAuthenticated = true
	}

	logout() {
		this.currUser = {}
		localStorage.removeItem('currUser')
		this.isAuthenticated = false
	}

	getAuth() {
		return this.isAuthenticated
	}

	getUserType() {
		const storagedUser = localStorage.getItem('currUser')
		if (storagedUser) {
			this.currUser = JSON.parse(storagedUser)
			return this.currUser.userType
		}
		this.currUser = {}
		return undefined
	}
}

export default new Auth()