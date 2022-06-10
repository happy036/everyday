import { combineReducers } from 'redux'
import login from './login';
import profile from './profile';
import Home from './home';
import article from './article';
import search from './search';
const reducers = combineReducers({
  login,
  profile,
  Home,
  article,
  search
});
export default reducers