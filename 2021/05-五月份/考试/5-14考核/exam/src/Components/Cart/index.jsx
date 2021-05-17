import React from 'react';
import CartList from "./CartList";
import CartTotal from "./CartTotal";
class App extends React.Component {
  // 定义数据
  state = {
    list: [
      { pName: "牛奶", src: "./uploads/01.jpg", price: 10, count: 3, flag: false },
      { pName: "三只松鼠", src: "./uploads/02.jpg", price: 30, count: 1, flag: false },
      {
        pName: "蓝牙播放器",
        src: "./uploads/03.jpg",
        price: 100,
        count: 1,
        flag: false
      },
      { pName: "大米", src: "./uploads/04.jpg", price: 50, count: 1, flag: false },
      { pName: "路由器", src: "./uploads/05.jpg", price: 110, count: 1, flag: false },
      { pName: "罐头", src: "./uploads/06.jpg", price: 20, count: 1, flag: false },
    ],
    check: false
  }
  // 全选
  handleAll = (msg) => {
    let arr = this.state.list
    arr.map(item => (item.flag = msg))
    this.setState({
      list: arr,
      check: msg
    })
  }
  // 删除
  handleDelete = (index) => {
    const arr = this.state.list
    arr.splice(index, 1)
    this.setState({
      list: arr
    })
  }
  // 加加
  handleAdd = (index) => {
    // console.log(index)
    let arr = this.state.list
    arr[index].count = arr[index].count + 1
    this.setState({
      list: arr
    })
  }
  handleSub = (index) => {
    let arr = this.state.list
    arr[index].count = arr[index].count - 1 === 0 ? arr[index].count - 1 : 0
    this.setState({
      list: arr
    })
  }
  // 输入框
  handleChange = (index, e) => {
    let arr = this.state.list
    if (arr[index].count <= 0 || isNaN(arr[index].count)) {
      arr[index].count = 1
      alert('不能小于0')
    } else {
      arr[index].count = e
    }
    this.setState({
      list: arr
    })
  }
  // 点击当行选中
  handleCheck = (index, e) => {
    let arr = this.state.list
    let status = true
    arr[index].flag = e

    arr.map(item => {
      if (!item.flag) {
        return status = item.flag
      }
      if (status) {
        return status = item.flag
      }
    })
    this.setState({
      list: arr,
      check: status
    })

  }
  // 删除选中
  checkAll = () => {
    let arr = this.state.list;
    arr = arr.filter((item) => {
      if (item.flag === false) {
        return item;
      }
    });
    this.setState({
      list: arr,
    });
  }
  // 删除所有
  delAll = () => {
    this.setState({
      list: []
    })
  }
  render() {
    return (
      <div>
        <div className='car'>
          <CartList
            list={this.state.list}
            delete={this.handleDelete}
            add={this.handleAdd}
            checked={this.handleAll}
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            sub={this.handleSub}
            yes={this.state.check}
          >
          </CartList>
          <CartTotal list={this.state.list} checkAll={this.checkAll} delAll={this.delAll}></CartTotal>
        </div>
      </div>
    )
  }
}
export default App