import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';


import axios from 'axios';
import Chance from 'chance';

import WhatAreYou from './WhatAreYou.jsx';

import CompanyMain from './CompanyMain.jsx';
import CompanyLogin from './CompanyLogin.jsx';
import CompanySearch from './CompanySearch.jsx';
import CompanyResults from './CompanyResults.jsx';


// import TesterResults from './TesterResults.jsx';
// import TesterData from '../data/';
// import CompanyData from '../data/';

const chance = new Chance();

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      isCompany: false,
      currentView: '',
      prevView: '',
      results: null
    };
    this.loginButton = this.loginButton.bind(this);
    this.amCompany = this.amCompany.bind(this);
    this.amTester = this.amTester.bind(this);
    this.search = this.search.bind(this);
    // this.printState = this.printState.bind(this);
    // this.getTestersFromDB = this.getTestersFromDB.bind(this);
    // this.getCompaniesFromDB = this.getCompaniesFromDB.bind(this);
    // this.goHome = this.goHome.bind(this);
    // this.backButton = this.backButton.bind(this);
    // this.showResults = this.showResults.bind(this);
    // this.retrieveUsers = this.retrieveUsers.bind(this);
    // this.addRandomUser = this.addRandomUser.bind(this);
  }

  // backButton() {
  //   let temp = this.state.prevView;
  //   this.setState({
  //     prevView: this.state.currentView,
  //     currentView: temp
  //   });  
  // }

  // goHome() {
  //   this.setState({
  //     prevView: this.state.currentView,
  //     currentView: ''
  //   });  
  // }

  // getTestersFromDB () {
  //   axios.get('/data/testers')
  //   .then(res => {
  //     const data = res.data;
  //     this.setState({
  //       results: res.data
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }
  
  // getCompaniesFromDB () {
  //   axios.get('/data/testers')
  //   .then(res => {
  //     const data = res.data;
  //     this.setState({
  //       results: res.data
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  // printState() {
  //   setTimeout(() => {
  //     console.log("\nCurrent State:");
  //     for (var i in this.state) {
  //       console.log("\t" + i + ": " + this.state[i]);
  //     }
  //   }, 1000);
  // }

  loginButton() {
    if (this.state.currentView === 'companylogin') {
      this.setState({
        prevView: this.state.currentView,
        currentView: 'companymain'
      });  
    }
    else if (this.state.currentView === 'testerlogin') {
      this.setState({
        prevView: this.state.currentView,
        currentView: 'testermain'
      });  
    }
    else {
      this.setState({
        prevView: '',
        currentView: ''
      });  
    }
  }

  amCompany() {
    this.setState({
      prevView: this.state.currentView,
      isCompany: true,
      currentView: 'companylogin'
    });
  }

  amTester() {
    this.setState({
      prevView: this.state.currentView,
      isCompany: false,
      currentView: 'testerlogin'
    });
  }

  search(){
    console.log("this.state.currentView"+this.state.currentView);    
    if (this.state.currentView === 'companymain') {
      this.setState({
        prevView: this.state.currentView,
        currentView: 'companysearch'
      });  
    }
    else if (this.state.currentView === 'testermain') {
      this.setState({
        prevView: this.state.currentView,
        currentView: 'testersearch'
      });  
    }
    else {
      this.setState({
        prevView: '',
        currentView: ''
      });  
    }
  }

  render () {
      return (
        <BrowserRouter>
        <div> 
            <Switch>
              <Route path='/companylogin' 
                  component={() => 
                    <CompanyLogin loginButton={this.loginButton} />} />
              <Route path='/companymain' 
                  component={() => 
                    <CompanyMain search={this.search} />} />
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
