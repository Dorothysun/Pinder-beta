import React from 'react';

const CompanyMain = (props) => {

	return (
		<div className="CompanyMain">
			<div className="nav">
				<ul>
					<li className="New Search"><a href="#">Search</a></li>
					<li className="Favorites"><a href="#">Favorites</a></li>
					<li className="Profile"><a href="#">Profile</a></li>
				</ul>
			</div>
			<h1>Company Profile</h1>
			<div id="testerFilter">
<<<<<<< HEAD
				<form>
					<input placeholder="Minimum Rating" /> <br />
					<input placeholder="Years Experience" /> <br />
					<input placeholder="System Experience" /> <br />
					<input placeholder="Certifications" />
				</form>
				<button 
					className="btn btn-primary btn-block btn-large"
					onClick={props.search}>
					Search for Security Testers
				</button>
=======
				Company Rating
				Company Systems Used
				Company Minimum Qualifications
					Years Experience
					Certifications
				Previously Used Testers
>>>>>>> de64794adcc873f512f035b9495a410db96584ab
			</div>
		</div>
	)
}

export default CompanyMain;