import React, { Component } from 'react';
import "./App.css";
import store from "../store/store";
import { getNum } from "../store/actions";
class App extends Component {
  state = {
    num: ''
  }
  constructor() {
    super()
    this.state.num = store.getState().bbb
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(
        {
          num: store.getState().bbb
        }
      )
    })
  }
  getData = () => {
    store.dispatch(getNum)
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>获取随机码</button>
        <h1 className="num">{this.state.num}</h1>
      </div>
    );
  }
}

export default App;