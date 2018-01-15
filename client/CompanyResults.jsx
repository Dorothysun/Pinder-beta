import React from 'react';
var star = <span className="fa fa-star checked"></span>;


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.isInterested = this.isInterested.bind(this);
		this.notInterested = this.notInterested.bind(this);
		
		this.state = {
			flipped: false,
		}
	}

	isInterested(evt) {
		this.setState({flipped: true});
	}
	notInterested(evt) {
		this.setState({flipped: true});
	}

	render() {
		return (
			<div className="card">
				<div className={`card-content equipment-card ${this.state.flipped ? 'flipped' : 'not-flipped'}`} style={{position: 'relative'}}>
					<div className="card-front card-face">
						<strong>Experience:</strong> {this.props.experience} years<br />
						<strong>Skills:</strong> SQLi, XSS<br />
						<strong>Certifications:</strong> CISSP, CEH<br />
						<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
						<strong>Rating:</strong>  {star}{star}{star}<br />
						<strong>Reviews:</strong> No reviews
					</div>

					<div className="card-back card-face">
						<strong>Experience:</strong> 2000000 years<br />
						<strong>Skills:</strong> SQLi, XSS<br />
						<strong>Certifications:</strong> CISSP, CEH<br />
						<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
						<strong>Rating:</strong>  {star}{star}{star}<br />
						<strong>Reviews:</strong> No reviews
					</div>

					<div style={{color:"transparent", backfaceVisibility: 'hidden'}}>
						<strong>Experience:</strong> {this.props.experience} years<br />
						<strong>Skills:</strong> SQLi, XSS<br />
						<strong>Certifications:</strong> CISSP, CEH<br />
						<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
						<strong>Rating:</strong>  {star}{star}{star}<br />
						<strong>Reviews:</strong> No reviews
					</div>
				</div>

				<footer className="card-footer">
					<a className="card-footer-item yes" onClick={this.isInterested}>Interested</a>
					<a className="card-footer-item no" onClick={this.notInterested}>Not Interested</a>
				</footer>
			</div>
		);
	}
}

const CompanyResults = (props) => {

	return (
		<div className="container content-wrapper">
		    <div className="hero-body" id="header">
    		</div>	
			<div className="columns">

			<div className="column is-4">
				<Card
					experience={23}
					skills="SQLi, XSS"
				/>
				<Card
					experience="2 years"
					skills="SQLi, XSS"
				/>
			</div>
				{/*
				<Card
					experience="2 years"
					skills="SQLi, XSS"
					
				/>
				
				<div className="card ">
					<div className="card-content equipment-card" style={{position: 'relative'}}>
						<div className="card-front card-face">
							<strong>Experience:</strong> 2 years<br />
							<strong>Skills:</strong> SQLi, XSS<br />
							<strong>Certifications:</strong> CISSP, CEH<br />
							<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
							<strong>Rating:</strong>  {star}{star}{star}<br />
							<strong>Reviews:</strong> No reviews
						</div>

						<div className="card-back card-face">
							<strong>Experience:</strong> 2000000 years<br />
							<strong>Skills:</strong> SQLi, XSS<br />
							<strong>Certifications:</strong> CISSP, CEH<br />
							<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
							<strong>Rating:</strong>  {star}{star}{star}<br />
							<strong>Reviews:</strong> No reviews
						</div>

						<div style={{color:"transparent", backfaceVisibility: 'hidden'}}>
							<strong>Experience:</strong> 2 years<br />
							<strong>Skills:</strong> SQLi, XSS<br />
							<strong>Certifications:</strong> CISSP, CEH<br />
							<strong>Writing sample:</strong> <a>writingsample.doc</a><br />
							<strong>Rating:</strong>  {star}{star}{star}<br />
							<strong>Reviews:</strong> No reviews
						</div>
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
				*/}

			<div className="column is-4">
				<Card
					experience={23}
					skills="SQLi, XSS"
				/>
				<Card
					experience="2 years"
					skills="SQLi, XSS"
				/>
				{/* <div className="card">
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
				</div> */}
			</div>


			<div className="column is-4">
				<Card
					experience={23}
					skills="SQLi, XSS"
				/>
				<Card
					experience="2 years"
					skills="SQLi, XSS"
				/>
				{/* <div className="card">
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
				</div> */}

			</div>

			</div>
		</div>
	)
}

export default CompanyResults;