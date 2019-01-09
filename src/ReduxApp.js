import React, { Component } from 'react';
import {createStore} from 'redux';
import ReduxDemo from './ReduxDemo';
import ExampleComponent from './ExampleComponent';

class ReduxApp extends Component{
  render(){
    return(
      <div>

      <ReduxDemo />
      <ExampleComponent />
      </div>
    );
  }
}
export default ReduxApp;
