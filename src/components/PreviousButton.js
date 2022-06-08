import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
	const navigate = useNavigate();
	return (
		<button className="some-btn" onClick={() => navigate('/home')}> ← Voltar</button>
	)
}