import React from "react"
import { CSSTransition } from "react-transition-group"
import "./App.css"
class App extends React.Component {
  state = {
    isShow: false
  }
  btnClickShow = () => {
    this.setState({
      isShow: true
    })
  }
  btnClickHide = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div>
        <CSSTransition in={this.state.isShow} classNames='box' timeout={3000} unmountOnExit={true}>
          <div></div>
        </CSSTransition>
        <button onClick={this.btnClickShow}>显示按钮</button>
        <button onClick={this.btnClickHide}>隐藏按钮</button>
      </div>
    )
  }
}
export default App