import React from "react";
import Home from "./components/Home/Home.jsx";
class App extends React.Component {
  state = {
    count: 0
  }
  btnClick = () => {
    this.setState({
      count: 1
    })
  }
  render() {
    console.log('App组件更新')
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={this.btnClick}>点击我改变状态</button>
        <Home count={this.state.count}></Home>
      </div>
    )
  }
}
export default App