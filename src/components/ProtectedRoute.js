import React from 'react'
import { Navigate } from 'react-router-dom'
import Auth from '../Auth'

export default ({ component }) => {
	if (!Auth.getAuth())
		return <Navigate to="/" />
	return component
}