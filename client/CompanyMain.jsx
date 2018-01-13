import React from 'react';

const CompanyMain = (props) => {

	return (
		<section class="section is-medium">
               <div class="container">
                  <div class="columns">
                     <div class="column is-1">
                     </div>
                     <div class="column is-7">
                        <div class="columns">
                           <div class="column is-half">
                              <aside class="menu">
                                 <p class="menu-label">
                                    General
                                 </p>
                                 <ul class="menu-list">
                                    <li><a>Profile</a></li>
                                    <li><a>History</a></li>
                                 </ul>
                                 <p class="menu-label">
                                    Administration
                                 </p>
                                 <ul class="menu-list">
                                    <li><a>Team Settings</a></li>
                                    <li>
                                       <a class="is-active">Search for Tester</a>
                                       <ul>
                                          <li><a>Members</a></li>
                                          <li><a>Plugins</a></li>
                                          <li><a>Add a member</a></li>
                                       </ul>
                                    </li>
                                    <li><a>Invitations</a></li>
                                    <li><a>Cloud Storage Environment Settings</a></li>
                                    <li><a>Authentication</a></li>
                                 </ul>
                                 <p class="menu-label">
                                    Transactions
                                 </p>
                                 <ul class="menu-list">
                                    <li><a>Payments</a></li>
                                    <li><a>Transfers</a></li>
                                    <li><a>Balance</a></li>
                                 </ul>
                              </aside>
                           </div>
                           <div class="column is-half">
                              <nav class="panel">
                                 <p class="panel-heading">
								 	Search for Tester
                                 </p>
                                 {/* <a class="panel-block is-active">
                                 <span class="panel-icon">
                                 <i class="fas fa-book"></i>
                                 </span>
                                 bulma
                                 </a>
                                 <a class="panel-block">
                                 <span class="panel-icon">
                                 <i class="fas fa-book"></i>
                                 </span>
                                 marksheet
                                 </a>
                                 <a class="panel-block">
                                 <span class="panel-icon">
                                 <i class="fas fa-book"></i>
                                 </span>
                                 minireset.css
                                 </a>
                                 <a class="panel-block">
                                 <span class="panel-icon">
                                 <i class="fas fa-book"></i>
                                 </span>
                                 jgthms.github.io
                                 </a>
                                 <a class="panel-block">
                                 <span class="panel-icon">
                                 <i class="fas fa-code-branch"></i>
                                 </span>
                                 daniellowtw/infBoard
                                 </a>
                                 <a class="panel-block">
                                 <span class="panel-icon">
                                 <i class="fas fa-code-branch"></i>
                                 </span>
                                 mojs
                                 </a>
                                 <label class="panel-block">
                                 <input type="checkbox" />
                                 Remember me
								 </label> */}
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
                                    <button class="button is-link is-outlined is-fullwidth"
									onClick={props.search}>
                                    Search
                                    </button>
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