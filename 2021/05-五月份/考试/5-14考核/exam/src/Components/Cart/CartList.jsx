import React from 'react';
class CartList extends React.Component {
  // 全选
  handleAll = (e) => {
    // console.log(e.target.checked)
    this.props.checked(e.target.checked)
  }
  // 删除
  handleDelete = (index) => {
    this.props.delete(index)
  }
  // 增加
  handleAdd = (index) => {
    this.props.add(index)
  }
  handleSub = (index) => {
    this.props.sub(index)
  }
  // 输入框
  handleChange = (index, e) => {
    this.props.handleChange(index, e.target.value)
  }
  // 点击选中
  handleCheck = (index, e) => {
    // console.log(index, e)
    this.props.handleCheck(index, e.target.checked)
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" readOnly className="all" checked={this.props.yes} onClick={(e) => { this.handleAll(e) }} />全选
          </th>
            <th>
              商品
          </th>
            <th>单价</th>
            <th>商品数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.list.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" readOnly checked={item.flag} onClick={(e) => { this.handleCheck(index, e) }} />
                </td>
                <td>
                  <img src={item.src} />
                  <p>{item.pName}</p>
                </td>
                <td>
                  {item.price}￥
            </td>
                <td>
                  <div className="count-c clearfix">
                    <a href="#" className="reduce " onClick={() => { this.handleSub(index) }}>-</a>
                    <input type="text" value={item.count} onChange={(e) => { this.handleChange(index, e) }} />
                    <a href="#" className="add" onClick={() => { this.handleAdd(index) }}>+</a>
                  </div>
                </td>
                <td>
                  {item.price * item.count}￥
            </td>
                <td>
                  <a href="#" className="del" onClick={() => { this.handleDelete(index) }}>删除</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
export default CartList