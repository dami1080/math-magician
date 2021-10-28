import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/calculator">
            <div className="App">
              <Calculator />
            </div>
          </Route>

          <Route path="*">
            <Quote />
          </Route>
        </Switch>
      </fragment>
    );
  }
}

export default App;
