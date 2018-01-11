import React from 'react';
import axios from 'axios';
import Chance from 'chance';
import CompanyMain from './CompanyMain.jsx';
const chance = new Chance();

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      users: [],
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.addRandomUser = this.addRandomUser.bind(this);
  }

  retrieveUsers () {
    axios.get('/api/users')
    .then(res => {
      const users = res.data;
      this.setState({
        users: users
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  addRandomUser () {
    axios.post('/api/users', {
      name: chance.name(),
      password: chance.word()
    })
    .then(res => {
      const users = res.data;
      this.setState({
        users: users
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  _onButtonClick() {
    console.log('hello');
    this.setState({
      showComponent: true,
    });
  }


  render () {
      return (
    <div className="loginDiv">
      <h1>Login</h1>
      <div id="loginForm">
        <input placeholder='Username' />
        <input placeholder='Password' />
        <button 
          className="btn btn-primary btn-block btn-large"
          onClick={this._onButtonClick}>
          Login
        </button>
        {this.state.showComponent ?
           <CompanyMain /> :
           null
        }
      </div>
    </div>
  )
  }
}

export default App;
