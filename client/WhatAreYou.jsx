import React from 'react';
import {Link} from 'react-router-dom';

const WhatAreYou = (props) => {

	return (
		<section id="background" className="hero is-fullheight is-default is-bold">
		<div className="hero-head">
			<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item title" href="../">
						<img id= "icon" src="../img/icon.png" alt="Logo" />
					</a>
					<span className="navbar-burger burger" data-target="navbarMenu">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-end">
					<a className="navbar-item"><font color="white">Home</font>
					</a>
					<a className="navbar-item"><font color="white">Examples</font>
					</a>
					<a className="navbar-item"><font color="white">Features</font>
					</a>
					<a className="navbar-item"><font color="white">Team</font>
					</a>
					<a className="navbar-item"><font color="white">Help</font>
					</a>
				</div>
				</div>
			</div>
			</nav>
		</div>
			<div className="hero-body">
			<div className="container has-text-centered">
				<div className="columns is-vcentered">
				<div className="column is-5">
					<figure className="image is-4by3">
					{/* <img src="http://placehold.it/800x600" alt="Description" /> */}
					{/* <img id="logo" src="../img/front.png" alt="Logo" />					 */}
					</figure>
				</div>
				<div className="column is-6 is-offset-1">
					<h1 className="title is-2 font-color">
					Find the best date
					</h1>
					<h2 className="subtitle is-4 font-color">
					Today					
					</h2>
					<br />
					<p className="has-text-centered">
					<Link className="button is-medium is-info is-outlined"
						to="/companylogin">
						Company
					</Link>
					<a className="button is-medium is-info is-outlined"
						onClick={props.amTester}>
						Tester
					</a>
					</p>
				</div>
				</div>
			</div>
			</div>
			<div className="hero-foot">
			</div>
		</section>
	)
}

export default WhatAreYou;

{/* <div classNameName="CompanyMain">
<button 
	classNameName="btn btn-primary btn-block btn-large"
	onClick={props.amCompany}>
	Company
</button>
<button 
	classNameName="btn btn-primary btn-block btn-large"
	onClick={props.amTester}>
	Tester
</button>
</div> */}


