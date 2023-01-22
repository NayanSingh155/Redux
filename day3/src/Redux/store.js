import { legacy_createStore } from "redux";
import {reducer} from "./reducer";
 const Store=legacy_createStore(reducer,{count:16});
 export {Store};