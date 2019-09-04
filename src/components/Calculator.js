import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class Calculator extends Component {


  static propTypes = {
    handleClick: PropTypes.func
  };
  handleValue = e => {
    this.props.handleClick(e);
  };
  render() {
    return (
      <div className="buttons-area">
      
        <Button className="clear" value={"C"} handleClick={this.handleValue}/>
        <Button className="digit" value={"CE"}  handleClick={this.handleValue} />
        <Button className="backspace" value={"⬅"} handleClick={this.handleValue} />
        <Button className="sign" value={"±"} handleClick={this.handleValue} />
        <Button className="digit" value={'7'} handleClick={this.handleValue} />
        <Button className="digit" value={'8'} handleClick={this.handleValue} />
        <Button className="digit" value={'9'} handleClick={this.handleValue} />
        <Button className="operator" value={"/"} handleClick={this.handleValue} />
        <Button className="digit" value={'4'} handleClick={this.handleValue} />
        <Button className="digit" value={'5'} handleClick={this.handleValue} />
        <Button className="digit" value={'6'} handleClick={this.handleValue} />
        <Button className="operator" value={"*"} handleClick={this.handleValue} />
        <Button className="digit" value={'1'} handleClick={this.handleValue} />
        <Button className="digit" value={'2'} handleClick={this.handleValue} />
        <Button className="digit" value={'3'} handleClick={this.handleValue} />
        <Button className="operator" value={"-"} handleClick={this.handleValue} />
        <Button className="digit" value={'0'} handleClick={this.handleValue} />
        <Button className="digit" value={"."} handleClick={this.handleValue} />
        <Button className="equal" value={"="} handleClick={this.handleValue} />
        <Button className="operator" value={"+"} handleClick={this.handleValue} />
      </div>
    );
  }
}

export default Calculator;
