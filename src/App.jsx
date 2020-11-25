import './App.css';
import React from 'react';
import Form from './Form';
import Paperrr from './images/scroll.png';

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
    let statName = ["STR: ", "DEX: ", "CON: ", "INT: ", "WIS: ", "CHR: "];
    let forms = []
    for (const stat in statName){
     forms.push(<div key={stat}><div>{statName[stat]}<Form key={"F"+stat}/></div><br/></div>)
    }
    return (
      <div className="allTheStuff">
        <h1>PathFinder Stats</h1>

        {forms}

        <button onClick={this.diceRoll}>Rollllllll Em!(3d6)</button>
        <div>{this.state.dice}</div>

        <img className="papuh" src={Paperrr} alt="" />
      </div>
    );
  }
}

export default App;