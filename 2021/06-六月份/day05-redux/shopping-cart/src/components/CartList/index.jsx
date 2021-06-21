import React from "react";
function CartList(props) {
  const handleDelete = (id) => {
    props.deleteItem(id)
  }
  const handleChange = (id, e) => {
    props.changeItem({
      type: 'change',
      id: id,
      num: e.target.value
    })
  }
  const handleAdd = (id) => {
    props.changeItem({
      type: 'add',
      id: id
    })
  }
  const handleSub = (id) => {
    props.changeItem({
      type: 'sub',
      id: id
    })
  }
    return (
      <div>
        {props.list.map(item => (
            <div className="item" key={item.id}>
              <img src={item.img} />
              <div className="name">{item.name}</div>
              <div className="change">
                <a href="#" onClick={() =>handleSub(item.id)}>－</a>
                <input type="text" className="num" value={item.num} onChange={(e) =>handleChange(item.id, e)} />
                <a href="#" onClick={() =>handleAdd(item.id)}>＋</a>
              </div>
              <div className="del" onClick={() =>handleDelete(item.id)}>×</div>
            </div>
          ))
        }
      </div>
    )
}
export default CartList