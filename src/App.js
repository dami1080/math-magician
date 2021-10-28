import React from 'react';
import './App.css';
import Calculator from './components/UI/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/UI/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <fragment>
        <Navbar />
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
