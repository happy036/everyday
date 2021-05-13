import React from 'react';
// import App from './App';
// import Img from "./image/cat.png"
class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.fn)
  }
  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  // render() {
  //   return (
  //     // <div>根组件{this.state.x}--{this.state.y}</div>
  //     <img alt="" src={Img} style={{ position: 'absolute', top: this.state.y, left: this.state.x }} />
  //   )
  // }
  render() {
    return this.props.children(this.state)
  }
}
export default Mouse