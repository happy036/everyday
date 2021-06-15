import React from 'react';
import CartList from "../CartList/index";
import CartTotal from "../CartTotal/index";
class App extends React.Component {
  state = {
    List: [
      { id: 1, pName: "牛奶", src: "./uploads/01.jpg", price: 10, count: 3, flag: false },
      { id: 2, pName: "三只松鼠", src: "./uploads/02.jpg", price: 30, count: 1, flag: false },
      {
        id: 3,
        pName: "蓝牙播放器",
        src: "./uploads/03.jpg",
        price: 100,
        count: 1,
        flag: false
      },
      { id: 4, pName: "大米", src: "./uploads/04.jpg", price: 50, count: 1, flag: false },
      { id: 5, pName: "路由器", src: "./uploads/05.jpg", price: 110, count: 1, flag: false },
      { id: 6, pName: "罐头", src: "./uploads/06.jpg", price: 20, count: 1, flag: false },
    ],
    check: false
  }
  // 全选
  checkAll = (e) => {
    let arr = this.state.List
    arr.map(item => {
      item.flag = e
    })
    this.setState({
      List: arr,
      check: e
    })
  }
  // 单击选中
  checkOne = (index, e) => {
    let arr = this.state.List
    let status = true
    arr[index].flag = e
    arr.map(item => {
      if (!item.flag) {
        status = item.flag
      }
      if (status) {
        status = status
      }
    })
    this.setState({
      List: arr,
      check: status
    })
  }
  // 加加
  handleAdd = (index) => {
    let arr = this.state.List
    arr[index].count = arr[index].count + 1 <= 0 ? 0 : arr[index].count + 1
    this.setState({
      List: arr
    })
  }
  // 减减
  handleSub = (index) => {
    let arr = this.state.List
    arr[index].count = arr[index].count - 1 <= 0 ? 0 : arr[index].count - 1
    this.setState({
      List: arr
    })
  }
  // 删除
  handleDlete = (index) => {
    let arr = this.state.List
    arr.splice(index, 1)
    this.setState({
      List: arr
    })
  }
  // 删除所选商品
  handleDeleteCheck = (aaa) => {
    this.setState({
      List: aaa
    })
  }
  // 清空购物车
  handleClean = () => {
    this.setState({
      List: []
    })
  }
  // 改变输入框的值
  handleChange = (id, e) => {
    console.log(e)
    let arr = this.state.List
    this.setState({
      List: arr.map(item => {
        if (item.id === id) {
          let newList = {
            ...item,
            count: e < 0 || isNaN(e) ? 0 : e
          }
          // console.log(newList)
          return newList
        } else {
          return item
        }
      })
    })
  }
  render() {
    return (
      <div className='car'>
        <CartList
          list={this.state.List}
          checkAll={this.checkAll}
          checkOne={this.checkOne}
          check={this.state.check}
          handleAdd={this.handleAdd}
          handleSub={this.handleSub}
          handleDlete={this.handleDlete}
          handleChange={this.handleChange}
        ></CartList>
        <CartTotal
          list={this.state.List}
          handleDeleteCheck={this.handleDeleteCheck}
          handleClean={this.handleClean}
        ></CartTotal>
      </div>
    )
  }
}
export default App