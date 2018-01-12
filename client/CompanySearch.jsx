import React from 'react';

const CompanySearch = (props) => {

	return (
		<div className="CompanyMain">
			<div class="nav">
				<ul>
					<li class="New Search"><a href="#">Search</a></li>
					<li class="Favorites"><a href="#">Favorites</a></li>
					<li class="Profile"><a href="#">Profile</a></li>
				</ul>
			</div>
			<h1>Search Filters</h1>
			<div id="testerFilter">
				<div class="profile">
					<span class="heading">Minimum Rating: </span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<p>Minimum Years Experience: 15</p>
					<p>Experience (systems): </p>
					Drop down list to select systems?
					<p>Certifications: </p>
					Drop down list to select minimum certifications?
					<a>Writing Sample</a> <br />
					<a>Reviews</a> <br />
					</div>
  				
			</div>
		</div>
	)
}

export default CompanySearch;