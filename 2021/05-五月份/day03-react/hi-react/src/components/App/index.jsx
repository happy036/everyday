import React from "react";
// 引入CommFather组件
import CommFather from "../CommFather/index";
// 知识点 Context
// 1.引入Context
// const { Provider, Consumer } = React.createContext()
import { Provider } from "../../utils/context";
// 2.在App组件中提供数据(提供者 provider)

// 3.在AppGradeSon组件中提供数据(消费者 consumer){(data)=>{在这里拿到}}
class App extends React.Component {
  constructor() {
    super()
    this.txt = React.createRef()
  }
  getTxt = () => {
    console.log(this.txt.current.value)
  }
  render() {
    return (
      <Provider value='pink'>
        <div>
          <input type="text" ref={this.txt} />
          <button onClick={this.getTxt}>点我获取到input的值</button>
          <CommFather></CommFather>
          <p>我是App组件</p>
          <AppSon></AppSon>
        </div>
      </Provider>
    )
  }
}
// App的子组件
class AppSon extends React.Component {
  render() {
    return (
      <div>
        <div>我是App的子组件</div>
        {/* <AppGradeSon></AppGradeSon> */}
      </div>
    )
  }
}
// App的孙子组件
// class AppGradeSon extends React.Component {
//   render() {
//     return (
//       <div>我是App的孙子组件
//         <Consumer>
//           {(data) => (<strong>{data}</strong>)}
//         </Consumer></div>
//     )
//   }
// }
export default App