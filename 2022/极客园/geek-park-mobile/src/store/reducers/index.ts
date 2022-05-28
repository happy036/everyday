import { combineReducers } from 'redux'
import login from './login';
import profile from './profile';
import Home from './home';
const reducers = combineReducers({
  login,
  profile,
  Home
});
export default reducers