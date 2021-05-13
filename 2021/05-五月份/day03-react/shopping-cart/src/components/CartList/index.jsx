import React from "react";
class CartList extends React.Component {
  handleDelete = (id) => {
    this.props.deleteItem(id)
  }
  handleChange = (id, e) => {
    this.props.changeItem({
      type: 'change',
      id: id,
      num: e.target.value
    })
  }
  handleAdd = (id) => {
    this.props.changeItem({
      type: 'add',
      id: id
    })
  }
  render() {
    return (
      <div>
        {
          this.props.list.map(item => (
            <div className="item" key={item.id}>
              <img src={item.img} />
              <div className="name">{item.name}</div>
              <div className="change">
                <a href="#">－</a>
                <input type="text" className="num" value={item.num} onChange={(e) => this.handleChange(item.id, e)} />
                <a href="#" onClick={() => this.handleAdd(item.id)}>＋</a>
              </div>
              <div className="del" onClick={() => this.handleDelete(item.id)}>×</div>
            </div>
          ))
        }
      </div>
    )
  }
}
export default CartList