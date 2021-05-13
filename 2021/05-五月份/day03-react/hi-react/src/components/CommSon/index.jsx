import React from 'react';
// const { Consumer } = React.createContext()
import { Consumer } from "../../utils/context";
class CommSon extends React.Component {
  // static defaultProps = {
  //   father: '曹操2'
  // }
  state = {
    father: '曹操2'
  }
  tiggerFather = () => {
    this.props.son2Father(this.state.father, "妹妹，我是你的哥哥")
  }
  render() {
    return (
      <div className='son'>
        {/* 直接使用this.props.属性 */}
        <h3>我是子组件({this.props.son})</h3>
        <button onClick={this.tiggerFather}>点我把值传递给父组件</button>
        <Consumer>
          {(data) => (<strong>{data}</strong>)}
        </Consumer>
      </div>
    )
  }
}
export default CommSon