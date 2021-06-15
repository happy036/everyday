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
    console.log('App组件更新')
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={this.btnClick}>点击我改变状态</button>
        <AppSon>
          <div>
            <h3>我是AppSon组件</h3>
            <p>我是AppSon的内容</p>
          </div>
        </AppSon>
      </div>
    )
  }
}
class AppSon extends React.Component {
  render() {
    // return (
    //   <div>
    //     <h3>我是AppSon组件</h3>
    //     <p>我是AppSon的内容</p>
    //   </div>
    // )
    return ReactDOM.createPortal(this.props.children, document.getElementById('app'))
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);