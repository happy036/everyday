import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import aaa from "redux-thunk";
const store = createStore(reducer, applyMiddleware(aaa))
export default store