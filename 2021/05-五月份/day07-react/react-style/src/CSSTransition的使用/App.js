import React from "react"
import { CSSTransition } from "react-transition-group"
import "./App.css"
class App extends React.Component {
  state = {
    isShow: false
  }
  btnClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <CSSTransition in={this.state.isShow} classNames='box' timeout={3000}>
          <div></div>
        </CSSTransition>
        <button onClick={this.btnClick}>按钮</button>
      </div>
    )
  }
}
export default App