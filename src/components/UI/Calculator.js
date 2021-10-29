import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import CalculatorRow from './CalculatorRow';

const tableData = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
];

const Calculator = () => {
  const initialValue = { total: 0, operation: '' };
  const [obj, setObj] = useState(initialValue);

  const handleClick = (e) => {
    setObj(calculate(obj, e.target.value));
  };

  return (
    <div className="calculator-page">
      <h2 className="calculator-heading">Let&apos;s do some math!</h2>
      <table className="calculator table-bordered">
        <tbody>
          <tr className="output">
            <td colSpan="4">
              {obj.total}
              {obj.operation}
              {obj.next}
            </td>
          </tr>
          <CalculatorRow items={tableData[0]} onClick={handleClick} />
          <CalculatorRow items={tableData[1]} onClick={handleClick} />
          <CalculatorRow items={tableData[2]} onClick={handleClick} />
          <CalculatorRow items={tableData[3]} onClick={handleClick} />
          <tr>
            <td colSpan="2"><input type="button" onClick={handleClick} value="0" /></td>
            <td><input type="button" onClick={handleClick} value="." /></td>
            <td className="orange-colour"><input type="button" onClick={handleClick} value="=" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
