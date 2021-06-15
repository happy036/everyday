import React from 'react';
class CartTotal extends React.Component {
  // 计算总价格
  handleSum = () => {
    let sum = 0
    this.props.list.map(item => {
      if (item.flag) {
        sum += item.count * item.price
      }
    })
    return sum
  }
  // 计算商品
  handleNum = () => {
    let num = 0
    this.props.list.map(item => {
      if (item.flag) {
        num++
      }
    })
    return num
  }
  // 删除所选商品
  handleDeleteCheck = () => {
    const aaa = this.props.list.filter(item => item.flag == false)
    this.props.handleDeleteCheck(aaa)
  }
  // 清空购物车
  handleClean = () => {
    this.props.handleClean()
  }
  render() {
    return (
      <div>
        <div className="controls clearfix">
          <a href="#" alt="" className="del-all" onClick={this.handleDeleteCheck}>删除所选商品</a>
          <a href="#" alt="" className="clear" onClick={this.handleClean}>清理购物车</a>
          <a href="#" alt="" className="pay">去结算</a>
          <p>
            已经选中<span id="totalCount">{this.handleNum()}</span>件商品;总价：<span id="totalPrice" className="total-price">{this.handleSum()}￥</span>
          </p>
        </div>
      </div>
    )
  }
}
export default CartTotal