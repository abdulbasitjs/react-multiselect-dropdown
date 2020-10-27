// import logo from './logo.svg';
import React, { Component } from 'react';
import { MultiSelect } from './components/multi-select/multi-select.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: [
        {
          id: 1,
          label: "English"
        },
        {
          id: 2,
          label: "Mandarian"
        },
        {
          id: 3,
          label: "Russian"
        },
        {
          id: 4,
          label: "Arabic"
        },
        {
          id: 5,
          label: "Urdu"
        }
      ],
      selected: [1,5],
      defaultText: "No Prefrences"
    }
  }

  onSave(items) {
    this.setState({ ...this.state, selected: items }); 
  }

  render() {
    return (
      <div id="container">
        <MultiSelect selected={this.state.selected} onSave={this.onSave.bind(this)} dropdown={this.state.dropdown} defaultText={this.state.defaultText}></MultiSelect>
      </div>
    );
  }
}

export default App;
