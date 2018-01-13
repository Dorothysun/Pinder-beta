import React from 'react';

const CompanyResults = (props) => {

	return (
		<div className="container content-wrapper">
		    <div class="hero-body" id="header">
    		</div>	
			<div className="columns">

			<div className="column is-4">

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Admin <small>(Light)</small></span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-danger">WIP</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/admin.png" alt="Admin template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/admin.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/admin.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Forum</span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-default">Mobile</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/forum.png" alt="Hero template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/forum.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/forum.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>
			</div>

			<div className="column is-4">
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Blog</span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-danger">WIP</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/blog.png" alt="Blog template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/blog.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/blog.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Hero</span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-default">Mobile</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/hero.png" alt="Hero template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/hero.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/hero.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>
			</div>


			<div className="column is-4">
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Cover</span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-default">Mobile</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/cover.png" alt="Cover template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/cover.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/cover.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Inbox</span>
					<span className="is-pulled-right">
						<span className="tag is-default">v0.6.0</span>
						<span className="tag is-default">Desktop</span>
						<span className="tag is-default">Mobile</span>
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/inbox.png" alt="Inbox template screenshot" />
					</figure> */}
				</div>
				<footer className="card-footer">
					<a href="templates/inbox.html" className="card-footer-item">Preview</a>
					<a href="https://github.com/dansup/bulma-templates/blob/master/templates/inbox.html" className="card-footer-item">Source Code</a>
				</footer>
				</div>

			</div>

			</div>
		</div>
	)
}

export default CompanyResults;




  {/* <div className="CompanyResults">
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
		</div> */}