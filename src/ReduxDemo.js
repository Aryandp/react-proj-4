import React, { Component } from 'react';

import {createStore} from 'redux';
class ReduxDemo extends Component{
  render(){
//step 2.create reducer(it is a pure function it have action,state).
    const reducer=function(state,action){
      if(action.type==="Text"){
        return action.payload
      }

      return state;
    }
    //step:1. create a store.
    const store = createStore(reducer);
    //step 3 .subscribe (detail of reducer)

    store.subscribe(()=>{
      console.log(store.getState());
    })
    //step 4. dispatch define the task of reducers
    store.dispatch({
      type:"Text",
      payload:"Hello World"
    })

    return(
      <div>

    {store.getState()}
      </div>
    );
  }
}
export default ReduxDemo;
