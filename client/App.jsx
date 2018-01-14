import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';


import axios from 'axios';
import Chance from 'chance';

import WhatAreYou from './WhatAreYou.jsx';

import CompanyMain from './CompanyMain.jsx';
import CompanyLogin from './CompanyLogin.jsx';
import CompanySearch from './CompanySearch.jsx';
import CompanyResults from './CompanyResults.jsx';


const chance = new Chance();

class App extends React.Component {

  render () {
      return (
        <BrowserRouter>
        <div> 
            <Switch>
              <Route path='/companylogin' 
                  component={() => 
                    <CompanyLogin />} />
              <Route path='/companymain' 
                  component={() => 
                    <CompanyMain  />} />
              <Route path='/companyresults' 
                  component={() => 
                    <CompanyResults />} />

              <Route exact path='/' component={WhatAreYou} />
            </Switch>
        </div>
        </BrowserRouter>
      )
  }
}

export default App;
