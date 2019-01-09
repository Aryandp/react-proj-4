//default initila state for store
const INITIAL_STATE = {
  count:0
}

/**
reducer function contains a switch case statement. It takes two parameters - state and action.
action object has this strucutre
{
type: "something",
otherdata: {}
}
Every action object must contain a type property. Based on this type property reducer function perfroms an operation on state. You can not mutate the state. You must return a new object.
**/
 const reducer = function(state = INITIAL_STATE, action){
  switch(action.type) {
    case "IncreaseCounter":
      return Object.assign({}, state, { count: state.count + 1});
    case "DecreaseCounter":
      return Object.assign({}, state, { count: state.count - 1});

    default:
      return state;
  }
}

/**
We create store by passing reducer function and state into it. Passing the state is optional. If state is not passed in createStore function, it will take INITIAL_STATE passed into reducer as intial state.
**/
const store = Redux.createStore(reducer);

/**
This is our main Component. After creating it, we will have to connect it with store, so that it can access state saved in the store and modify it. State can be modified only by dispatch function. We will pass the state and dispatch function in this component with help of mapStateToProps and mapDisaptchToProps below. This component will receive them in it's props.
**/
class Counter extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  IncreaseHandler(){
    this.props.Increase();
  }

  DecreaseHandler(){
    this.props.Decrease();
  }

  render() {
    return(
      <div>
        <div className="box-heading"><span>React + Redux</span></div>
      <div className="box">
        <div className="box-count"><h2>{this.props.count}</h2></div>
        <div className="box-buttons">
          <button onClick={this.IncreaseHandler.bind(this)}>Increase</button>
          <button onClick={this.DecreaseHandler.bind(this)}>Decrease</button>
        </div>
      </div>
        </div>
    )
  }
}

const {Provider, connect} = ReactRedux;

const mapStateToProps = function(state){
  return state;
}

const mapDispatchToProps = function(dispatch){
  return{
    Increase: function(){ return dispatch({type: "IncreaseCounter"})},
    Decrease: function(){ return dispatch({type: "DecreaseCounter"})}
  }
}

/**
connect Counter component with store. mapStateToProps, mapDispatchToProps functions help us to define how we want to expose store to this component. We can control which data we want this component to access and which dispatch actions we want this component to have.
**/
const Index = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
)
