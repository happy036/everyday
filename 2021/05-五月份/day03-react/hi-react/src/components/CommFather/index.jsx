import React from 'react';
import CommDaughter from "../CommDaughter";
import CommSon from "../CommSon";
class CommFather extends React.Component {
  // 在父组件中声明数据
  state = {
    daughter: '娃哈哈',
    son: '哈哈哈🍋'
  }
  // 在父组件上声明一个方法
  son2Father = (name, msg) => {
    // console.log(name)
    this.setState({
      fatherName: name,
      brotherMsg: msg
    })
  }
  render() {
    return (
      <div className='Father'>
        <h3>我是父组件{this.state.fatherName}</h3>
        {/* <CommDaughter daughter={this.state.daughter}></CommDaughter> */}
        <CommDaughter brotherMsg={this.state.brotherMsg}></CommDaughter>
        {/* <CommSon son={this.state.son}></CommSon> */}
        {/* 把父组件声明的方法传递给子组件 */}
        <CommSon son2Father={this.son2Father}></CommSon>
      </div>
    )
  }
}
export default CommFather