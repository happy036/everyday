import React from 'react';
class CartTotal extends React.Component {
  // 定义一个方法，计算总价
  calcPrice = () => {
    let sum = 0;
    this.props.list.forEach(item => {
      sum += item.price * item.num
    });
    return sum
  }
  render() {
    return (
      <div className="total">
        <span>总价：{this.calcPrice()}</span>
        <button>结算</button>
      </div>
    )
  }
}
export default CartTotal