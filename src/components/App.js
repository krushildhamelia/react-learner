import React, { Component } from 'react';
import Home from './home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to React App World"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Adding the Home component here */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
