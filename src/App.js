import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './components/autocomplete/AutoComplete';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <header>
                Welcome to the demo for the autocomplete component.
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className = "card">
                    <div className = "card-header" >
                        Autocomplete
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <AutoComplete />
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
