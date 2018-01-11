import React from 'react';

const CompanyLogin = (props) => {

	return (
		<div className="loginDiv">
			<h1>Login</h1>
			<div id="loginForm">
				<input placeholder='Username' />
				<input placeholder='Password' />
				<button 
					className="btn btn-primary btn-block btn-large"
					onClick={props.loginButton}>
					Login
				</button>
			</div>
		</div>
	)
}

export default CompanyLogin;