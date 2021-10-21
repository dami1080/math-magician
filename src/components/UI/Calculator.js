import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  handleClick(event) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, operation, next }, event.target.value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <table className="table table-bordered">
        <tbody>
          <tr className="output">
            <td colSpan="4">
              {total}
              {operation}
              {next}
            </td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="AC" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="+/-" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="%" /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick.bind(this)} value="÷" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="7" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="8" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="9" /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick.bind(this)} value="x" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="4" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="5" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="6" /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick.bind(this)} value="-" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="1" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="2" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="3" /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick.bind(this)} value="+" /></td>
          </tr>
          <tr>
            <td colSpan="2"><input type="button" onClick={this.handleClick.bind(this)} value="0" /></td>
            <td><input type="button" onClick={this.handleClick.bind(this)} value="." /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick.bind(this)} value="=" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
