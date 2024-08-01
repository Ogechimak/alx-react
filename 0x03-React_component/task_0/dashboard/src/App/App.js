import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Notifications from './Notifications';

class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;