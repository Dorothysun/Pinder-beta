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
	                                    <Link className=""
											to="/companysearch"
											>
											Search for Testers
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
                                    	<Link className="is-active"
											to="/companymatches"
											>
											Matches
										</Link>
                                    </li>
                                 </ul>
                              </aside>
                           </div>
                           <div class="">
                              <nav class="">
								 <table className="table" width="100%">
									<tbody>
										<tr>
											<th className="head"><strong>Matched Users</strong></th>
											<th>Date Matched</th>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 42892</a></td>
											<td className="result">
												Jan 1, 2018 07:23 PM
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 82747</a></td>
											<td className="result">
												Jan 8, 2018 01:03 PM
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 74802</a></td>
											<td className="result">
												Jan 12, 2018 01:27 PM
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 12849</a></td>
											<td className="result">
												Jan 14, 2018 05:16 PM
											</td>
										</tr>
										<tr>
										<td className="head"><a>&emsp;User 32472</a></td>
											<td className="result">
												Jan 14, 2018 05:23 PM
											</td>
										</tr>
																				<tr>
											<td className="head"><a>&emsp;User 82747</a></td>
											<td className="result">
												Jan 14, 2018 05:43 PM
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 13578</a></td>
											<td className="result">
												Jan 15, 2018 02:12 PM
											</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 75382</a></td>
											<td className="result">
												Jan 15, 2018 02:50 PM
											</td>
										</tr>
										<tr>
										<td className="head"><a>&emsp;User 42764</a></td>
											<td className="result">
												Jan 15, 2018 04:17 PM
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