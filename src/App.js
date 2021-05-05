import React, { Component } from 'react'
import './App.css';
import Button from './components/Button/button';
import Input from './components/Input/input';
import ClearButton from './components/ClearButton/clearButton';

import * as math from 'mathjs';

export default class App extends Component {
  state = {
    input: ""
  }

  addToInput = val =>{
    this.setState({ input: this.state.input + val})
  }

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="App">
        <div className="cal-wrapper">
          <div className="row">
            <Input input={this.state.input} />
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton
              handleClear={() => this.setState({ input : "" })}
            >
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    )
  }
}
