import React, { Component } from 'react';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      name : "Krushil"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name : "Krushil - Devil Kid"
      })
    }, 1000);
  }

  render() {
    return (
      <div className="Home">
        <h1>
            This is Home Component owned by {this.state.name}
        </h1>
      </div>
    );
  }
}

export default Home;