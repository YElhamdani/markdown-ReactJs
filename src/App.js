import React, { Component } from 'react';
import './App.css';

import { sampleText } from './sampleText'

class App extends Component{
  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  
  render(){
  return (
    <div className="container">
      <div className="row">
      <div className='col-sm-6'>
            <textarea
             onChange={this.handleChange}
             value={this.state.text}
              className='form-control'
              rows='35' />
          </div>

        <div className="col-sm-6">
          <div>
            {sampleText}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
