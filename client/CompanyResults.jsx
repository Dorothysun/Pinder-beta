import React from 'react';
var star = <span className="fa fa-star checked"></span>;
const CompanyResults = (props) => {

	return (
		<div className="container content-wrapper">
		    <div class="hero-body" id="header">
    		</div>	
			<div className="columns">

			<div className="column is-4">

				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 2 years<br />
				<strong>Skills:</strong> SQLi, XSS<br />
				<strong>Certifications:</strong> CISSP, CEH<br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong>  {star}{star}{star}<br />
				<strong>Reviews:</strong> No reviews
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>

				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 6 years<br />
				<strong>Skills:</strong> LAN/WAN VPN<br />
				<strong>Certifications:</strong> CISM<br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong>  {star}{star}{star}{star}<br />
				<strong>Reviews:</strong> No reviews
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
			</div>

			<div className="column is-4">
				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 3 years<br />
				<strong>Skills:</strong> SSH Firewall Understanding<br />
				<strong>Certifications:</strong> Security+<br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong> {star}{star}{star}<br />
				<strong>Reviews:</strong> No reviews
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 5 years<br />
				<strong>Skills:</strong> Security Monitoring, Web Security Auditing<br />
				<strong>Certifications:</strong> GSEC <br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong>  {star}{star}<br />
				<strong>Reviews:</strong> No reviews
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>
			</div>


			<div className="column is-4">
				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 2 years<br />
				<strong>Skills:</strong> Virtualization Environment, Web Security Auditing<br />
				<strong>Certifications:</strong> SSCP <br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong>  {star}{star}{star}{star}<br />
				<strong>Reviews:</strong> No reviews
				</div>
				<footer className="card-footer">
					<a className="card-footer-item yes">Interested</a>
					<a className="card-footer-item no">Not Interested</a>
				</footer>
				</div>

				<div className="card">
				<div className="card-content">
				<strong>Experience:</strong> 11 years<br />
				<strong>Skills:</strong>  SQLi, Web Security Auditing<br />
				<strong>Certifications:</strong> CISSP <br />
				<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
				<strong>Rating:</strong>  {star}{star}{star}{star}{star}<br />
				<strong>Reviews:</strong> No reviews
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


