import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ReduxApp from './ReduxApp';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Appm from './Appm';
import todoApp from './reducers/reducers';

let store = createStore(todoApp)
let rootElement = document.getElementById('root')

render(
   <Provider store = {store}>
      <Appm />
   </Provider>,

   rootElement
);




// ReactDOM.render(
//
//     <ReduxApp />
//   ,
//   document.getElementById('root')
// );
