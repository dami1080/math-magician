import React from 'react';
import './App.css';
import Calculator from './components/UI/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <fragment>
        <Home />
        <div className="App">
          <Calculator />
        </div>
        <Quote />
      </fragment>
    );
  }
}

export default App;
