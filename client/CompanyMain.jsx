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
				Company Rating
				Company Systems Used
				Company Minimum Qualifications
					Years Experience
					Certifications
				Previously Used Testers
			</div>
		</div>
	)
}

export default CompanyMain;