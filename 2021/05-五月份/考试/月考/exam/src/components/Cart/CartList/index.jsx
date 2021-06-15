import React from 'react';
class CartList extends React.Component {
  // 全选
  checkAll = (e) => {
    // console.log(e.target.checked)
    this.props.checkAll(e.target.checked)
  }
  // 单击选中
  checkOne = (index, e) => {
    this.props.checkOne(index, e.target.checked)
  }
  // 加加
  handleAdd = (index) => {
    console.log(index)
    this.props.handleAdd(index)
  }
  // 减减
  handleSub = (index) => {
    this.props.handleSub(index)
  }
  // 删除
  handleDlete = (index) => {
    this.props.handleDlete(index)
  }
  // 改变输入框的值
  handleChange = (id, e) => {
    this.props.handleChange(id, e.target.value)
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="all" checked={this.props.check} onChange={(e) => { this.checkAll(e) }} />全选
          </th>
              <th>
                商品
          </th>
              <th>
                单价
          </th>
              <th>
                商品数量
          </th>
              <th>
                小计
          </th>
              <th>
                操作
          </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.list.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" checked={item.flag} onChange={(e) => { this.checkOne(index, e) }} />
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
                      <input type="text" value={item.count} onChange={(e) => this.handleChange(item.id, e)} />
                      <a href="#" className="add" onClick={() => { this.handleAdd(index) }}>+</a>
                    </div>
                  </td>
                  <td>
                    {item.count * item.price}￥
          </td>
                  <td>
                    <a href="#" alt="" className="del" onClick={() => { this.handleDlete(index) }}>删除</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default CartList