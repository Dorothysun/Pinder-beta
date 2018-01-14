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
                                    <li>
                                    	<Link className=""
											to="/companyprofile"
											>
											Company Profile
										</Link>
									</li>
                                    <li>
	                                    <Link className="is-active"
											to="/companysearch"
											>
											Search for Testers
										</Link>
                                    </li>
                                    <li>
                                    	<Link className=""
											to="/companymain"
											>
											Search History
										</Link>
                                    </li>
                                    <li>
                                    	<Link className=""
											to="/companymain"
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
											to="/companymain"
											>
											Matches
										</Link>
                                    </li>
                                    <li>
                                    	<Link className=""
											to="/companymain"
											>
											Messages
										</Link>
                                    </li>
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
                                 </div>
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