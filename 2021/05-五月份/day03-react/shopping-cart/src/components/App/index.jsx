import React from 'react';
// 引入CartTitle
import CartTitle from "../CartTitle/index";
import CartList from "../CartList";
import CartTotal from "../CartTotal"
class App extends React.Component {
  // 1.1给根组件初始化状态
  state = {
    name: "范狗",
    list: [{
      id: 1,
      name: 'TCL彩电',
      price: 1000,
      num: 1,
      img: 'img/a.jpg'
    }, {
      id: 2,
      name: '机顶盒',
      price: 1000,
      num: 1,
      img: 'img/b.jpg'
    }, {
      id: 3,
      name: '海尔冰箱',
      price: 1000,
      num: 1,
      img: 'img/c.jpg'
    }, {
      id: 4,
      name: '小米手机',
      price: 1000,
      num: 1,
      img: 'img/d.jpg'
    }, {
      id: 5,
      name: 'PPTV电视',
      price: 1000,
      num: 2,
      img: 'img/e.jpg'
    }]
  }
  deleteItem = (id) => {
    let list = this.state.list.filter(item => item.id !== id)
    this.setState({
      list: list
    })
  }
  changeItem = (value) => {
    let { list } = this.state
    if (value.type === 'change') {
      this.setState({
        list: list.map(item => {
          if (item.id === value.id) {
            return { ...item, num: value.num < 0 ? 0 : value.num }
          } else {
            return item
          }
        })
      })
    } else if (value.type === 'add') {
      this.setState({
        list: list.map(item => {
          if (item.id === value.id) {
            return { ...item, num: (item.num + 1) < 0 ? 0 : (item.num + 1) }
          } else {
            return item
          }
        })
      })
    }
  }
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="cart">
            <CartTitle name={this.state.name}></CartTitle>
            <CartList list={this.state.list} changeItem={this.changeItem} deleteItem={this.deleteItem}></CartList>
            <CartTotal list={this.state.list}></CartTotal>
          </div>
        </div>
      </div>
    )
  }
}
export default App