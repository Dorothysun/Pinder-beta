import React from 'react';
import {Link} from 'react-router-dom';

const CompanyMain = (props) => {

	return (
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item title" href="../">
					<img id="icon" src="../img/icon.png" alt="Logo" />
				</a>
				<span className="navbar-burger burger" data-target="navbarMenu">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>
		<section class="section">
               <div class="container">
                  <div class="columns">
                     <div class="column is-1">
                     </div>
                     <div class="column is-7">
                        <div class="columns">
                           <div class="column is-half">
                              <aside class="menu">
                                 <ul class="menu-list">
                                    <li><a class='is-active'>Company Profile</a></li>
                                    <li><a>Tester Search</a></li>
                                    <li><a>Search History</a></li>
                                    <li><a>Previously Used Testers</a></li>
                                    <li><a>Messages</a></li>
                                 </ul>
                              </aside>
                           </div>
                           <div class="column is-half">
                              <nav class="panel">
                                 <p class="panel-heading">
								 	Search for Tester
                                 </p>
								 <table className="table" />
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
                                 <div class="panel-block">
                                    <Link class="button is-link is-outlined is-fullwidth"
									to="/companyresults">
                                    Search
                                    </Link>
									{/* <Link className="button is-block is-info is-large"
										to="/companymain">
										Company
									</Link> */}
                                 </div>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               {/* </div>
            </div> */}
         </div>
      </section>
	  </div>
	)
}

export default CompanyMain;





{/* <div className="CompanyMain">
			<div className="nav">
				<li className="New Search"><a href="#">Search</a></li>
				<li className="Favorites"><a href="#">Favorites</a></li>
				<li className="Profile"><a href="#">Profile</a></li>
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
		</div> */}

	// 	<div className="navbar-brand">
	// 	<a className="navbar-item title" href="../">
	// 		{/* <img id="logo" src="../img/logo.png" alt="Logo" /> */}
	// 		Pinder
	// 	</a>
	// </div>