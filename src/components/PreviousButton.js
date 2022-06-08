import React from "react";
import { useNavigate } from "react-router-dom";

export default ({ logout }) => {
	const navigate = useNavigate();
	return (
		<button className="some-btn" onClick={() => navigate(logout ? '/' : '/home')}> ← Voltar</button>
	)
}