import React, { Component } from 'react';
import Home from './home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import FunctionalHeader from './FunctionalHeader/FunctionalHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to React App World"/>
        <FunctionalHeader title="Welcome to React App World with Functional/stateless component"/>
        <Content>
          <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
