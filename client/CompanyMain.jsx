import React from 'react';

const CompanyMain = (props) => {

	return (
		<div className="CompanyMain">
			<div className="nav">
				<ul>
					<li className="New Search"><a href="#">Search</a></li>
					<li className="Favorites"><a href="#">Favorites</a></li>
					<li className="Profile"><a href="#">Profile</a></li>
				</ul>
			</div>
			<h2>Company Profile</h2>
			<div id="companyProfile" align="left">
				<table className="table">
				<tbody>
					<tr>
						<td className="head">Company Rating </td>
						<td className="result"><span className="fa fa-star checked"></span>
						 	<span className="fa fa-star checked"></span>
			 				<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>  </td>
					</tr>
					<tr>
						<td className="head">Company Systems Used </td>
					</tr>
					<tr>
						<td id="systems"><ul>
							<li>Windows</li>
							<li>Linux</li>
							</ul></td>
					</tr>
					<tr>
						<td className="head">Company Minimum Qualifications</td>
					</tr>
					<tr>
						<td className="headsub">Years Experience </td>
						<td className="result">5 </td>
					</tr>
					<tr>
						<td className="headsub">Certifications </td>
						<td className="result">5 </td>
					</tr>
					<tr>
						<td className="head">Previously Used Testers </td>
						<td className="result">Result </td>
					</tr>
				</tbody>
				</table>
			</div>
		</div>
	)
}

export default CompanyMain;