import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate('/home')}> ← Voltar</button>
	)
}