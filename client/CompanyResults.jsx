import React from 'react';
var star = <span className="fa fa-star checked"></span>;

function stars () {
	let num = Math.round(Math.random() * 4) + 1;
	if (num === 1)
		return (<div>
					<span className="fa fa-star checked"></span>
				</div>);
	if (num === 2) 
		return (<div>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
				</div>);
	if (num === 3) 
		return (<div>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
				</div>);
	if (num === 4) 
		return (<div>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
				</div>);
	if (num === 5) 
		return (<div>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
				</div>);
}

function getYearsExp() {
	return (Math.round((Math.random() * 20) + 1));
}

var certs = [ 
	'CISSP', 'SSCP', 'CAP', 'CSSLP', 'CCFP', 'CCSP', 
	'HCISPP', 'CASP', 'CSA+', 'Security+', 'OSCP', 
	'OSWP', 'OSCE', 'OSEE', 'OSWE', 'CISA', 'CISM', 
	'CRISC', 'GISF', 'GSEC', 'GISP', 'GCFE', 'GPPA', 
	'GCIA', 'GCIH', 'GCUX', 'GCWN', 'GCED', 'GPEN', 
	'GWAPT', 'GSLC', 'GCPM', 'GSSP-NET', 'GSSP-JAVA', 
	'GSNA', 'GCFA', 'GLEG', 'GAWN', 'GXPN', 'GREM', 
	'GSE', 'CEH', 'ECSA', 'LPT', 'CHFI', 'ECIH', 'ENSA', 
	'CCISO', 'EDRP', 'ECVP', 'ECES', 'ECCSP', 'EITCA/IS', 
	'CCNA Security', 'CCNP Security', 'CCIE Security', 
	'CCNA CyberOps', 'CIPP', 'CIPM', 'CIPT', 'eJPT', 
	'eCPPT Gol', 'eWP', 'eCRE', 'eMAPT', 'eNDP'
];

function getCerts() {
	let numCerts = Math.round((Math.random() * 4) + 1);
	let ret = [];
	for (let i = 0; i < numCerts; i++) {
		let cert = certs[Math.round(Math.random() * (certs.length - 1))];
		while (ret.includes(cert))
			cert = certs[Math.round(Math.random() * (certs.length - 1))];
		ret.push(cert);
	}
	return ret.join(', ');
}

var skills = [ 
	'Denial-of-Service', 'Backdoor', 'Direct-Access Attacks', 'Spoofing',
	'Tampering', 'Privilege Escalation', 'Phishing', 'Spear Phishing',
	'Clickjacking', 'Social Engineering', 'XSS', 'Session Hijacking',
	'Password Hash Cracking', 'SQL Injection'
];

function getSkills() {
	let numSkills = Math.round((Math.random() * 2) + 2);
	let ret = [];
	for (let i = 0; i < numSkills; i++) {
		let skill = skills[Math.round(Math.random() * (skills.length - 1))];
		while (ret.includes(skill))
			skill = skills[Math.round(Math.random() * (skills.length - 1))];
		ret.push(skill);
	}
	return ret.join(', ');
}

var systems = [ 
	'Linux', 'Unix', 'Windows Server 2008/2012', 'CISCO Switches',
	'McAfee Firewalls', 'Sonic Wall Firewalls', 'Sophos Firewalls',
	'Catalyst Switches'
];

function getSystems() {
	let numSystems = Math.round((Math.random() * 2) + 1);
	let ret = [];
	for (let i = 0; i < numSystems; i++) {
		let system = systems[Math.round(Math.random() * (systems.length - 1))];
		while (ret.includes(system))
			system = systems[Math.round(Math.random() * (systems.length - 1))];
		ret.push(system);
	}
	return ret.join(', ');
}

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
				<div 
					className={`card-content equipment-card ${this.state.flipped ? 'flipped' : 'not-flipped'}`} 
					style={{position: 'relative'}}>
					<div className="card-front card-face">
						<table height="50%" width="75%">
							<tr>
								<th width="40%"> Rating </th>
								<td width="50%">{stars()}</td>
							</tr>
							<tr>
								<th> Experience </th>
								<td> {getYearsExp()} Years</td>
							</tr>
							<tr>
								<th> Skills </th>
								<td> {getSkills()}</td>
							</tr>
							<tr>
								<th> Certifications </th>
								<td> {getCerts()}</td>
							</tr>
							<tr>
								<th> Systems </th>
								<td> {getSystems()}</td>
							</tr>
							<tr>
								<th> Writing Sample </th>
								<td><a>View Writing Sample</a></td>
							</tr>
							<tr>
								<th> Reviews </th>
								<td><a>Read Reviews</a></td>
							</tr>
						</table>
					</div>

					<div className="card-back card-face">
						<table width="75%">
							<tr>
								<th width="40%"> Rating </th>
								<td width="50%">{stars()}</td>
							</tr>
							<tr>
								<th> Experience </th>
								<td> {getYearsExp()} Years</td>
							</tr>
							<tr>
								<th> Skills </th>
								<td> {getSkills()}</td>
							</tr>
							<tr>
								<th> Certifications </th>
								<td> {getCerts()}</td>
							</tr>
							<tr>
								<th> Systems </th>
								<td> {getSystems()}</td>
							</tr>
							<tr>
								<th> Writing Sample </th>
								<td><a>View Writing Sample</a></td>
							</tr>
							<tr>
								<th> Reviews </th>
								<td><a>Read Reviews</a></td>
							</tr>
						</table>
					</div>

					<br /> <br /> <br />
					<br /> <br /> <br />
					<br /> <br /> <br />
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
					<Card />
					<Card />
				</div>
				<div className="column is-4">
					<Card />
					<Card />
				</div>
				<div className="column is-4">
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default CompanyResults;