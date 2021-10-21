import React from 'react';

class CalculatorRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    const { props } = this.state;
    return (
      <tr>
        <td><input type="button" value={props.items[0]} onClick={props.handler} /></td>
        <td><input type="button" value={props.items[1]} onClick={props.handler} /></td>
        <td><input type="button" value={props.items[2]} onClick={props.handler} /></td>
        <td className="orange-colour"><input type="button" value={props.items[3]} onClick={props.handler} /></td>
      </tr>
    );
  }
}
export default CalculatorRow;
