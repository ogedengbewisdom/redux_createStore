const redux = require("redux")

const reducerFunction = (state = {counter: 0}, action) => {
    let counter;
    if ( action.type === "increament" ) {
       counter = {counter: state.counter + 1}
    } else if ( action.type === "decreament" ) {
       counter =  {counter: state.counter - 1}
    } 
    return counter   
}

const store = redux.createStore(reducerFunction)

const subscriberFunction = () => {
    const latestState = store.getState()
    console.log(latestState.counter)
}

store.subscribe(subscriberFunction)

store.dispatch({type: "increament"})
store.dispatch({type: "decreament"})
store.dispatch({type: "increament"})

