import './App.css';
import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
    stat: "10",
    };
  }

  handleDaChange = (event) => {
    const statU = event.target.value;
    this.setState({stat: statU});
  }

//   clearUp = () => {
//     this.setState({stat: ""});
//   }

  render() {
    return (
        <form className="formLine">
          <input type="number" value={this.state.stat} onChange={this.handleDaChange} /><span> {Math.floor((this.state.stat - 10) / 2)}</span>
      </form>
    );
  }
}

export default Form;