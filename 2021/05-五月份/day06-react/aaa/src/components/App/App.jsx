import React from 'react';
import AppStyle from "./App.module.css";
import Home from "../Home/Home";
class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <p className={AppStyle.p}>我是App</p>
        <Home></Home>
      </div>
    )
  }
}
export default App