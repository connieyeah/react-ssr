import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// intial state
const startState = {
  cards: []
}

// Actions
export const intialCards = () => {
  return {
      type: 'INITIALCARDS',
      cards: data
  }
}



// create store
export const intialStore = ( initialState = startState ) => {
  return createStore(reducer, intialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}