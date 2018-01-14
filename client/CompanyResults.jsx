import React from 'react';

const CompanyResults = (props) => {

	return (
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item title" href="../">
					<img id="icon" src="../img/icon.png" alt="Logo" />
				</a>
			</div>
		    {/* <div class="hero-body" id="header">
    		</div>	 */}
			<div className="columns content-wrapper">
			<div className="column is-4">

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Admin <small>(Light)</small></span>
					</p>
				</header>
				<div className="card-content">
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Forum</span>
					</p>
				</header>
				<div className="card-content">
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
			</div>

			<div className="column is-4">
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Blog</span>
					<span className="is-pulled-right">
					</span>
					</p>
				</header>
				<div className="card-content">
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Hero</span>
					<span className="is-pulled-right">
					</span>
					</p>
				</header>
				<div className="card-content">
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
			</div>


			<div className="column is-4">
				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Cover</span>
					<span className="is-pulled-right">
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/cover.png" alt="Cover template screenshot">
					</figure> */}
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>

				<div className="card">
				<header className="card-header">
					<p className="card-header-title">
					<span>Inbox</span>
					<span className="is-pulled-right">
					</span>
					</p>
				</header>
				<div className="card-content">
					{/* <figure className="image">
					<img src="images/inbox.png" alt="Inbox template screenshot" />
					</figure> */}
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>

			</div>

			</div>
		</div>
	)
}

export default CompanyResults;


