import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: 0 };
  }

  render() {
    const { output } = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr className="output">
              <td colSpan="4">{output}</td>
            </tr>
            <tr>
              <td id="ac">AC</td>
              <td>+/-</td>
              <td>%</td>
              <td className="orange-colour">÷</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td className="orange-colour">x</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td className="orange-colour">-</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td className="orange-colour">+</td>
            </tr>
            <tr>
              <td colSpan="2">0</td>
              <td>.</td>
              <td className="orange-colour">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
