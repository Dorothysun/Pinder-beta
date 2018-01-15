import React from 'react';
import {Link} from 'react-router-dom';

const CompanyMain = (props) => {

	return (
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item title" href="../">
					<img id="icon" src="../img/icon3.png" alt="Logo" height = "200" width = "80"/>
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
                                    <li>
                                    	<Link className="is-active"
											to="/companyprofile"
											>
											Company Profile
										</Link>
									</li>
                                    <li>
	                                    <Link className=""
											to="/companysearch"
											>
											Search for Testers
										</Link>
                                    </li>
                                    <li>
                                    	<Link className=""
											to="/companyprevioustesters"
											>
											Previously Used Testers
										</Link>
									</li>
									<li>
                                    	<Link className=""
											to="/companymain"
											>
											Recommended Testers
										</Link>
                                    </li>
                                    <li>
                                    	<Link className=""
											to="/companymatches"
											>
											Matches
										</Link>
                                    </li>
                                 </ul>
                              </aside>
                           </div>
                           <div class="column is-half">
                              <nav class="panel">
                                 <p class="">
								 	<strong>Company Information</strong>
                                 </p>
								 <table className="table" width="100%">
									<tbody>
										<tr>
											<td className="head">Rating </td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
										</tr>
										<tr>
											<td className="head">Recent Reviews</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 42892</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 74802</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 12849</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
										</tr>
									</tbody>
								</table>
								<p class="">
								 	<strong>Systems Used</strong>
                                </p>
								<table className="table" width="100%">
									<tbody>
										<tr>
											<td className="result">&emsp;Debian Linux<br />
																&emsp;Windows Server 2012<br />
																&emsp;McAfee Firewall 315-C1-P<br />
																&emsp;Cisco SG300 Switches<br />
																</td>
										</tr>
									</tbody>
								</table>
								<table className="table" width="100%">
									<tbody>
										<tr>
											<td className="result">
												<input></input>
											</td>
											<td className="result">
												<button>Add System</button>
											</td>
										</tr>
									</tbody>
								</table>
								<p class="">
								 	<strong>Minimum Tester Qualifications</strong>
                                </p>
                                <table className="table" width="100%">
									<tbody>
										<tr>
											<td className="headsub">Years Experience </td>
											<td className="result">5 </td>
										</tr>
										<tr>
											<td className="headsub">Certifications </td>
										</tr>
										<tr>
										<td className="result">&emsp;CISSP<br />
																&emsp;SSCP<br />
																&emsp;OSCP<br />
																</td>
										</tr>
									</tbody>
								</table>
																<table className="table" width="100%">
									<tbody>
										<tr>
											<td className="result">
												<input></input>
											</td>
											<td className="result">
												<button>Add Cetification</button>
											</td>
										</tr>
									</tbody>
								</table>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
         		</div>
      	</section>
	  </div>
	)
}

export default CompanyMain;