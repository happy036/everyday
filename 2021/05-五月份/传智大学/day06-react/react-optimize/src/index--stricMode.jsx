import React from "react";
import ReactDOM from 'react-dom';
class App extends React.Component {
  btnClick = () => {
    console.log(this.refs.pRef)
  }
  render() {
    return (
      <div>
        <p ref={'pRef'}>我是p标签</p>
        <button onClick={this.btnClick}>点击我查看效果</button>
      </div>
    )
  }
}
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>
  , document.getElementById('root')
)