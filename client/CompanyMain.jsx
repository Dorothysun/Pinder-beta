import React from 'react';
import {Link} from 'react-router-dom';

const CompanyMain = (props) => {

	return (
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item title" href="../companymain">
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
                                    	<Link className=""
											to="/companymatches"
											>
											Matches
										</Link>
                                    </li>
                                 </ul>
                              </aside>
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