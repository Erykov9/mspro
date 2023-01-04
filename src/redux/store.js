import { createStore, combineReducers } from "redux";
import initialState from './initialState';
import langDataReducer from "./langDataRedux";
import langMenuReducer from "./langMenuRedux";
import offertReducer from "./offertRedux";

const subreducers = {
  langData: langDataReducer,
  menu: langMenuReducer,
  offert: offertReducer
}

const reducer = combineReducers(subreducers)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store