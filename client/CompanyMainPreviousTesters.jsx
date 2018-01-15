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
                                    	<Link className="is-active"
											to="/companyprevioustesters"
											>
											Previously Used Testers
										</Link>
									</li>
									<li>
                                    	<Link className=""
											to="/companyresults"
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
								 <table className="table" width="100%">
									<tbody>
										<tr>
											<th className="head"><strong>Previous Testers</strong></th>
											<th>Rating</th>
											<th>Date</th>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 42892</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star-half checked"></span>
											</td>
											<td className="result"> 2018-01</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 82747</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star-half checked"></span>
											</td>
											<td className="result"> 2017-11</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 74802</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
											<td className="result"> 2017-07</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 12849</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star-half checked"></span>
											</td>
											<td className="result"> 2017-04</td>
										</tr>
										<tr>
										<td className="head"><a>&emsp;User 32472</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
											<td className="result"> 2017-02</td>
										</tr>
																				<tr>
											<td className="head"><a>&emsp;User 82747</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
											<td className="result"> 2017-02</td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 13578</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
											</td>
											<td className="result"> 2016-12 </td>
										</tr>
										<tr>
											<td className="head"><a>&emsp;User 75382</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star-half checked"></span>
											</td>
											<td className="result"> 2016-11 </td>
										</tr>
										<tr>
										<td className="head"><a>&emsp;User 42764</a></td>
											<td className="result">
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star checked"></span>
												<span className="fa fa-star-half checked"></span>
											</td>
											<td className="result"> 2016-09 </td>
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