import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import productEdit from "./product/reducerCart";
export default combineReducers({ productReducer, productEdit })