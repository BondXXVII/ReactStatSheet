import './App.css';
import React from 'react';
import Form from './Form';
import image from './images/scroll.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    dice: "0",
    };
  }

  diceRoll = () => {
    let yaRoll = (Math.floor(Math.random()*6)+1)+(Math.floor(Math.random()*6)+1)+(Math.floor(Math.random()*6)+1);
    this.setState({dice: yaRoll});
  }

  render() {
    return (
      <div className="idk">
        <h1>PathFinder Stats</h1>
        <div>STR: <Form key="1"></Form></div><br/>
        <div>DEX: <Form key="2"></Form></div><br/>
        <div>CON: <Form key="3"></Form></div><br/>
        <div>INT: <Form key="4"></Form></div><br/>
        <div>WIS: <Form key="5"></Form></div><br/>
        <div>CHR: <Form key="6"></Form></div><br/>
        <button onClick={this.diceRoll}>Rolllllllll(3d6)</button><br/>
        <div>{this.state.dice}</div><br/>
        <img className="papuh" src={image}/>
      </div>
    );
  }
}

export default App;