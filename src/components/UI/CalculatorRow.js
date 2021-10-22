/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';

const CalculatorRow = (props) => {
  const { items, onClick } = props;

  return (
    <tr>
      <td><input type="button" value={items[0]} onClick={onClick} /></td>
      <td><input type="button" value={items[1]} onClick={onClick} /></td>
      <td><input type="button" value={items[2]} onClick={onClick} /></td>
      <td className="orange-colour"><input type="button" value={items[3]} onClick={onClick} /></td>
    </tr>
  );
};

CalculatorRow.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

CalculatorRow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CalculatorRow;
