import React from 'react';
class CartTotal extends React.Component {
  // 总价
  handleSum = () => {
    let num = 0
    this.props.list.map(item => {
      if (item.flag) {
        num += item.count * item.price
      }
    })
    // console.log(num)
    return num
  }
  // 计算选中商品数量
  checkAdd = () => {
    let sum = 0
    this.props.list.map((item) => {
      if (item.flag) {
        sum = item.count + sum
      }
    })
    return sum
  }
  // 删除选中
  checkAll = () => {
    this.props.checkAll()
  }
  // 删除全部
  delAll = () => {
    this.props.delAll()
  }
  render() {
    return (
      <div className="controls clearfix">
        <a href="#" className="del-all" onClick={this.checkAll}>删除所选商品</a>
        <a href="#" className="clear" onClick={this.delAll}>清理购物车</a>
        <a href="#" className="pay">去结算</a>
        <p>
          已经选中<span className="totalCount">{this.checkAdd()}</span>件商品;总价：<span id="totalPrice" className="total-price">{this.
            handleSum()}￥</span>
        </p>
      </div>
    )
  }
}
export default CartTotal