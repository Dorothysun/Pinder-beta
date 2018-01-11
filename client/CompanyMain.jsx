import React from 'react';

const CompanyMain = (props) => {

	return (
		<div className="CompanyMain">
			<div class="nav">
				<ul>
					<li class="New Search"><a href="#">Search</a></li>
					<li class="Favorites"><a href="#">Favorites</a></li>
					<li class="Profile"><a href="#">Profile</a></li>
				</ul>
			</div>
			<h1>Company Name</h1>
			<div id="testerFilter">
				<form>
					<input placeholder="Minimum Rating" /> <br />
					<input placeholder="Years Experience" /> <br />
					<input placeholder="System Experience" /> <br />
					<input placeholder="Certifications" />
				</form>
				<button 
					className="btn btn-primary btn-block btn-large"
					>
					Search for Security Testers
				</button>
			</div>
		</div>
	)
}

export default CompanyMain;