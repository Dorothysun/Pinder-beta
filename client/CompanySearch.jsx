import React from 'react';

const CompanySearch = (props) => {

	return (
		<div className="CompanyMain">
			<div className="nav">
				<ul>
					<li className="New Search"><a href="#">Search</a></li>
					<li className="Favorites"><a href="#">Favorites</a></li>
					<li className="Profile"><a href="#">Profile</a></li>
				</ul>
			</div>
			<h1>Company Name</h1>
			<div id="testerFilter">
				<div className="profile">
					<span className="heading">User Rating: </span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star"></span>
					<p>Experience (years): 15</p>
					<p>Experience (systems): </p>
					<div className="skills">
						<ul>
							<li>Windows</li>
							<li>Linux</li>
						</ul>
					</div>
					<p>Certifications: </p>
					<div className="skills">										
						<ul>
							<li>CISSP</li>
							<li>CISA</li>
						</ul>
					</div>
					<a>Writing Sample</a> <br />
					<a>Reviews</a> <br />
					<label>Offer: </label>
					</div>
  				<input placeholder="Offer" /> <br />
				
				<button 
					className="btn btn-primary btn-block btn-large"
					>
					Make Offer
				</button>
				<button 
					className="btn btn-primary btn-block btn-large"
					>
					Not Interested
				</button>
			</div>
		</div>
	)
}

export default CompanySearch;