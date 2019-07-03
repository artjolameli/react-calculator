import React from 'react';
import './App.css';
import "./styles.css";
//import Dropdown from "./dropdown";


class App extends React.Component {
  state = {
    value1: 0,
    value2: 0,
   
  };

  updateInputValue = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseInt(value)
    });
  };

  add = () => {
    const { value1, value2 } = this.state;
    alert(value1 + value2);
  };

  substract = () => {
    const { value1, value2 } = this.state;
    alert(value1 - value2);
  };

  multiply = () => {
    const { value1, value2 } = this.state;
    alert(value1 * value2);
  };

  division = () => {
    const { value1, value2 } = this.state;
    alert(value1 / value2);
  };

  render() {
    return (

      <div className="body"> 

        <input className= "input1"
          value={this.state.inputValue}
          name="value1"
          onChange={evt => this.updateInputValue(evt)}
        />
      
        <input className= "input2"
          value={this.state.inputValue}
          name="value2"
          onChange={evt => this.updateInputValue(evt)}
        />
        
        <div className="button">
        <button onClick={this.add}>+</button> 
        <button onClick={this.substract}>-</button>
        <button onClick={this.multiply}>*</button>        
        <button onClick={this.division}>/</button>

          </div> 
        </div>
        
    );
  }
}

export default App;

 {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Get Value 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button onClick={this.add} class="dropdown-item" type="button">+</button>
    <button onClick={this.substract} class="dropdown-item" type="button">-</button>
    <button onClick={this.multiply} class="dropdown-item" type="button">*</button>
    <button onClick={this.division} class="dropdown-item" type="button">/</button>

  </div>
</div> */}
