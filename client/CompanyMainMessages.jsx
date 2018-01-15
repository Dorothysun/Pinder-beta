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
                                 </ul>
                              </aside>
                           </div>
                           <div class="column is-half">
                              <nav class="panel">
                                 <p class="panel-heading">
								 	Your conversation with User 42892
                                 </p>
								 <table className="table" />
								 <tbody>
								 <tr><th valign = "top"> You: </th><td> Hey! I'm interested in hiring you for our app. </td></tr>
                                 <tr> <th width = "28%" valign = "top"> User 42892: </th><td> Cool! What's it do tho </td> </tr>
                                 <tr><th valign = "top"> You: </th> <td> We connect Pen Testers and Companies. Kind of like what we're trying to do right now! </td> </tr>
                                 <tr> <th valign = "top"> User 42892: </th><td> OMG that joke was so lame not interested thank you {"\n\n\n"} </td> </tr>
								 </tbody>
								 <br/>
								 <br/>
								 <form>
                                 <input type = "text" style={{width: 320}} placeholder = "Enter Message" />
                                 </form>
                                 <div class="panel-block">
                                    <Link class="button is-link is-outlined is-fullwidth"
									to="/companyresults">
                                    Send
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