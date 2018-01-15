import React from 'react';
import {Link} from 'react-router-dom';

var starinput = (<div class="stars">
<form action="">
  <input class="star star-5" id="star-5-2" type="radio" name="star"/>
  <label class="star star-5" for="star-5-2"></label>
  <input class="star star-4" id="star-4-2" type="radio" name="star"/>
  <label class="star star-4" for="star-4-2"></label>
  <input class="star star-3" id="star-3-2" type="radio" name="star"/>
  <label class="star star-3" for="star-3-2"></label>
  <input class="star star-2" id="star-2-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2-2"></label>
  <input class="star star-1" id="star-1-2" type="radio" name="star"/>
  <label class="star star-1" for="star-1-2"></label>
</form>
</div>);

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
                                 <p class="panel-heading">
								 	Search for Tester
                                 </p>
								 <table className="table" />
									<tbody>
										<tr>
											<strong><td className="head">Rating </td></strong>
											<td className="result">{starinput} </td>
										</tr>
										<tr>
										<strong><td className="head">Systems Used </td></strong>
										</tr>
										<tr>
											<td id="systems">
											<form>
											&emsp;<input type="checkbox" name="system" value="Windows"/> Windows<br/>
											&emsp;<input type="checkbox" name="system" value="Linux"/> Linux<br/>
											&emsp;<input type="checkbox" name="system" value="Linux"/> Unix<br/>
											&emsp;<input type="checkbox" name="system" value="Mac"/> Cisco Hardware<br/>
											&emsp;<input type="checkbox" name="system" value="Other"/> McAfee Firewall<br/>
											&emsp;<input type="checkbox" name="system" value="Other"/><input type="text" placeholder="Other System" /> <br/>
											</form>
											</td>
										</tr><br/>
										<tr>
											<strong><td className="head" colspan="3">Minimum Qualifications</td></strong>
										</tr>
										<tr>
											<strong><td className="headsub">Years Experience </td></strong>
											<td className="result"><input type="text"/> </td>
										</tr>
										<tr>
											<strong><td className="headsub">Certifications </td></strong>
											<td className="result"><input type="text"/> </td>
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