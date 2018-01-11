import React from 'react';

const WhatAreYou = (props) => {

	return (
		<div className="CompanyMain">
				<button 
					className="btn btn-primary btn-block btn-large"
					onClick={props.amCompany}>
					Company
				</button>
				<button 
					className="btn btn-primary btn-block btn-large"
					onClick={props.amTester}>
					Tester
				</button>
		</div>
	)
}

export default WhatAreYou;