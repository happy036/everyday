import React from 'react';
import { CSSTransition } from "react-transition-group";
class Animation extends React.Component {
  state = {
    flag: false
  }
  btnClick = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <div className='right'>
        <h2>Animation页面</h2>
        <button onClick={this.btnClick}>执行动画</button>
        <CSSTransition in={this.state.flag} classNames='aa' timeout={2000}>
          <div></div>
        </CSSTransition>
      </div>
    )
  }
}
export default Animation