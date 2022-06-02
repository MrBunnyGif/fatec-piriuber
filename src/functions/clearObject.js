export default obj => {
	const objCopy = { ...obj }
	Object.keys(objCopy).forEach(key => objCopy[key] === undefined && delete objCopy[key])
	return objCopy
}