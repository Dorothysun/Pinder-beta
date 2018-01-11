import React from 'react';

const TesterResults = (props) => {

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
				<div class="profile">
					<span class="heading">User Rating: </span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<p>Experience (years): 15</p>
					<p>Experience (systems): </p>
					<div class="skills">
						<ul>
							<li>Windows</li>
							<li>Linux</li>
						</ul>
					</div>
					<p>Certifications: </p>
					<div class="skills">										
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

export default TesterResults;