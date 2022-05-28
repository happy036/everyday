import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import {composeWithDevTools } from 'redux-devtools-extension'
import {getToken} from "../utils/token";
const initialState={
    login:getToken()
}
const store = createStore(reducers, initialState,composeWithDevTools(applyMiddleware(thunk)));
export{store}
