import React from 'react';
class From extends React.Component {
  handleChange = (e) => {
    this.props.aa(e.target.value)
  }
  handleChangeName = (e) => {
    this.props.bb(e.target.value)
  }
  // 添加数据
  hanleAdd = () => {
    // console.log(this.props.id)
    if (this.props.id.trim().length === 0 || this.props.name.trim().length === 0) return alert('不能为空')
    this.props.cc([...this.props.list, { id: this.props.id, name: this.props.name, ctime: new Date().toLocaleDateString() }])
  }
  render() {
    return (
      <div className="shopping-left">
        <input value={this.props.id} onChange={this.handleChange} type="text" placeholder="输入编号" />
        <input value={this.props.name} onChange={this.handleChangeName} type="text" placeholder="输入名称" />
        <button onClick={this.hanleAdd}>添加数据</button>
        <hr />
      </div>
    )
  }
}
export default From