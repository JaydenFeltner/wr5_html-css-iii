import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      spinning: false
    }
  }

  animateSquare = () => {
    this.setState({ spinning: !this.state.spinning })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <p>Hello WR5!</p>

        {/* animated element - automatically animates*/}
        <div className='animated-square'></div>

        {/* animated element - on demand animation*/}
        <div 
          className={ this.state.spinning ? 'animated-square-ondemand animated-square-ondemand-spin' : 'animated-square-ondemand'}
          onClick={this.animateSquare}
        ></div>

        {/* transition circle */}
        <div className='transition-circle'></div>
      </div>
    );
  }
}
