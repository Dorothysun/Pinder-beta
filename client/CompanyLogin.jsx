import React from 'react';

const CompanyLogin = (props) => {

	return (
		<section className="hero is-success is-fullheight">
			<div className="hero-body">
			<div className="container has-text-centered">
				<div className="column is-4 is-offset-4">
				<h3 className="title has-text-grey">Welcome Company</h3>
				<p className="subtitle has-text-grey">Please login to proceed.</p>
				<div className="box">
					<form>
						<div className="field">
							<div className="control">
							<input className="input is-large" type="email" placeholder="Your Email" autofocus="" />
						</div>
					</div>

					<div className="field">
						<div className="control">
						<input className="input is-large" type="password" placeholder="Your Password" />
						</div>
					</div>
					<div className="field">
						<label className="checkbox">
						<input type="checkbox" />
						Remember me
						</label>
					</div>
					<a className="button is-block is-info is-large"
					onClick={props.loginButton}>Login</a>
					</form>
				</div>
				<p className="has-text-grey">
					<a href="../">Sign Up</a> &nbsp;·&nbsp;
					<a href="../">Forgot Password</a> &nbsp;·&nbsp;
					<a href="../">Need Help?</a>
				</p>
				</div>
			</div>
			</div>
		</section>
	)
}

export default CompanyLogin;

{/* <div className="loginDiv">
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
</div> */}