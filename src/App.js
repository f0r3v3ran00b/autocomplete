import React, {Component} from 'react';
import './App.css';
import AutoComplete from './components/autocomplete/AutoComplete';
import tvShows from "./components/autocomplete/mock-data/tv-shows.js";


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card-body">
                    <AutoComplete allItems={tvShows}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
