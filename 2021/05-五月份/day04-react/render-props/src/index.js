import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
// import Img from "./image/cat.png"
// class App extends React.Component {
//   state = {
//     x: 0,
//     y: 0
//   }
//   componentDidMount() {
//     window.addEventListener('mousemove', this.fn)
//   }
//   fn = (e) => {
//     this.setState({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   // render() {
//   //   return (
//   //     // <div>根组件{this.state.x}--{this.state.y}</div>
//   //     <img alt="" src={Img} style={{ position: 'absolute', top: this.state.y, left: this.state.x }} />
//   //   )
//   // }
//   render() {
//     return this.props.render(this.state)
//   }
// }
// ReactDOM.render(
//   <App render={(mouse) => {
//     return (
//       <div>{mouse.x}--{mouse.y}</div>
//     )
//   }} />,
//   document.getElementById('root')
// );
ReactDOM.render(
  <App />,
  document.getElementById('root')
);