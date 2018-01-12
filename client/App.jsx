import React from 'react';
import axios from 'axios';
import Chance from 'chance';

import WhatAreYou from './WhatAreYou.jsx';

import CompanyMain from './CompanyMain.jsx';
import CompanyLogin from './CompanyLogin.jsx';
import CompanySearch from './CompanySearch.jsx';

import TesterMain from './TesterMain.jsx';
import TesterLogin from './TesterLogin.jsx';
import TesterSearch from './TesterSearch.jsx';

// import TesterData from '../data/';
// import CompanyData from '../data/';

const chance = new Chance();

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      isCompany: false,
      currentView: '',
      prevView: ''
    };
    this.loginButton = this.loginButton.bind(this);
    this.amCompany = this.amCompany.bind(this);
    this.amTester = this.amTester.bind(this);
    // this.retrieveUsers = this.retrieveUsers.bind(this);
    // this.addRandomUser = this.addRandomUser.bind(this);
  }

  // retrieveUsers () {
  //   axios.get('/api/users')
  //   .then(res => {
  //     const users = res.data;
  //     this.setState({
  //       users: users
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  // addRandomUser () {
  //   axios.post('/api/users', {
  //     name: chance.name(),
  //     password: chance.word()
  //   })
  //   .then(res => {
  //     const users = res.data;
  //     this.setState({
  //       users: users
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
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

  render () {
      return (
        <div>
          {
            (this.state.currentView == 'companylogin')
            ? <CompanyLogin loginButton={this.loginButton} />
            : (this.state.currentView == 'testerlogin')
            ? <TesterLogin loginButton={this.loginButton} />
            : (this.state.currentView == 'companymain')
            ? <CompanyMain />
            : (this.state.currentView == 'testermain')
            ? <TesterMain />
            : (this.state.currentView == 'companysearch')
            ? <CompanySearch />
            : (this.state.currentView == 'testersearch')
            ? <TesterSearch />
            : <WhatAreYou amTester={this.amTester} amCompany={this.amCompany} />
          }
      </div>
      )
  }
}

export default App;
