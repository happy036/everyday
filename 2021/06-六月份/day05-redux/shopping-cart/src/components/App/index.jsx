import React,{useState} from 'react';
// 引入CartTitle
import CartTitle from "../CartTitle/index";
import CartList from "../CartList";
import CartTotal from "../CartTotal"
function App() {
  // 1.1给根组件初始化状态
  const[nameState,setNamestate]=useState('范狗')
  const[listState,setListState]=useState([{
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
  }])
  const deleteItem = (id) => {
    let list = listState.filter(item => item.id !== id)
    setListState(list)
  }
  const changeItem = (value) => {
    if (value.type === 'change') {
      const list=listState.map(item => {
        if (item.id === value.id) {
          return { ...item, num: value.num < 0 ? 0 : value.num }
        } else {
          return item
        }
      })
      setListState(list)
    } else if (value.type === 'add') {
      const arr=listState.map(item => {
        if (item.id === value.id) {
          return { ...item, num: (item.num + 1) < 0 ? 0 : (item.num + 1) }
        } else {
          return item
        }
      })
      setListState(arr)
    }else if (value.type === 'sub') {
      const arr=listState.map(item => {
        if (item.id === value.id) {
          return { ...item, num: (item.num - 1) < 0 ? 0 : (item.num-1) }
        } else {
          return item
        }
      })
      setListState(arr)
    }
  }
    return (
      <div className="app">
        <div className="container">
          <div className="cart">
            <CartTitle name={nameState}></CartTitle>
            <CartList list={listState} changeItem={changeItem} deleteItem={deleteItem}></CartList>
            <CartTotal list={listState}></CartTotal>
          </div>
        </div>
      </div>
    )
}
export default App