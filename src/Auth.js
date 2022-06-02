class Auth {
	constructor() {
		this.isAuthenticated = false
		this.userType = undefined
	}

	login(type) {
		this.userType = type
		this.isAuthenticated = true
	}

	logout() {
		this.isAuthenticated = false
	}

	getAuth() {
		return this.isAuthenticated
	}

	getUserInfo() {
		return this.userType
	}
}

export default new Auth()