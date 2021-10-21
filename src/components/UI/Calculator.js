import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import CalculatorRow from './CalculatorRow';

const tableData = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { total, operation, next } = this.state;
    this.setState(calculate({ total, operation, next }, event.target.value));
  }

  render() {
    const { total, operation, next } = this.state;

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
          <CalculatorRow items={tableData[0]} handler={this.handleClick} />
          <CalculatorRow items={tableData[1]} handler={this.handleClick} />
          <CalculatorRow items={tableData[2]} handler={this.handleClick} />
          <CalculatorRow items={tableData[3]} handler={this.handleClick} />
          <tr>
            <td colSpan="2"><input type="button" onClick={this.handleClick} value="0" /></td>
            <td><input type="button" onClick={this.handleClick} value="." /></td>
            <td className="orange-colour"><input type="button" onClick={this.handleClick} value="=" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
