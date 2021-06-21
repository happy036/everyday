import reducer from "./reducer";
import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware=createSagaMiddleware()
const storeEnhance=applyMiddleware(sagaMiddleware)


const store=createStore(reducer,composeEnhancers(storeEnhance))
export default store