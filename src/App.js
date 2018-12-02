import React, {Component} from 'react';
import './App.css';
import AutoComplete from './components/autocomplete/AutoComplete';
import allItems from './components/autocomplete/mock-data/tv-shows';

class App extends Component {
  render() {
    return (
      <div>
        <AutoComplete allItems={allItems}/>
      </div>
    )
  }
}

export default App;