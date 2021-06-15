import React from "react";
import ReactDOM from 'react-dom';
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
    return (
      <div>
        <p >我是p标签{this.state.count}</p>
        <button onClick={this.btnClick}>点击我查看效果</button>
      </div>
    )
  }
}
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>
  , document.getElementById('root')
)