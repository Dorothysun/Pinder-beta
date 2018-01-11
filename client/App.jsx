import React from 'react';
import axios from 'axios';
import Chance from 'chance';

import CompanyMain from './CompanyMain.jsx';
import TesterMain from './TesterMain.jsx';
import CompanyLogin from './CompanyLogin.jsx';
import TesterLogin from './TesterLogin.jsx';
import CompanySearch from './CompanySearch.jsx';
import TesterSearch from './TesterSearch.jsx';
import WhatAreYou from './WhatAreYou.jsx';

const chance = new Chance();

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      isCompany: false,
      currentView: 'companymain'
    };
    // this._onButtonClick = this._onButtonClick.bind(this);
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
    this.setState({
      currentView: 'main'
    });
  }

  getPage() {
    if (this.state.currentView == 'login') {
      return '<CompanyLogin />'
    }
  }

  render () {
      return (
        <div>
          {
            (this.state.currentView == 'companylogin')
            ? <CompanyLogin />
            : (this.state.currentView == 'testerlogin')
            ? <TesterLogin />
            : (this.state.currentView == 'companymain')
            ? <CompanyMain />
            : (this.state.currentView == 'testermain')
            ? <TesterMain />
            : (this.state.currentView == 'companysearch')
            ? <CompanySearch />
            : (this.state.currentView == 'testersearch')
            ? <TesterSearch />
            : <WhatAreYou />
          }
      </div>
      )
  }
}

export default App;
