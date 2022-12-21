import {legacy_createStore} from "redux";
import {reducer} from './reducer'
//const [state]=useReducer(reducer,initialState)

const store=legacy_createStore(reducer,{count:16});