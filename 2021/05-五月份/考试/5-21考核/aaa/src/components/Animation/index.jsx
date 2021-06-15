import React from 'react';
// import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./index.css"
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
        <button onClick={this.btnClick}>执行动画</button>
        <CSSTransition in={this.state.flag} timeout={2000} classNames='aa'>
          <div></div>
        </CSSTransition>
        {/* <Redirect to='/animation'></Redirect> */}
      </div>
    )
  }
}
export default Animation