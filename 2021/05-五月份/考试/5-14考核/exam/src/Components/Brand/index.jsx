import React from 'react';
import From from "./from";
import Table from "./table";
class App extends React.Component {
  // 定义数据
  state = {
    list: [
      { id: 1, name: '哈哈哈', ctime: new Date().toLocaleString() }
    ],
    id: '',
    name: '',
  }
  handleId = (id) => {
    this.setState({
      id: id
    })
  }
  handleName = (name) => {
    this.setState({
      name: name
    })
  }
  // 添加数据
  handleAdd = (list) => {
    // console.log(list)
    this.setState({
      list: list,
      id: '',
      name: ''
    })
  }
  // 删除数据
  handleDelete = (msg) => {
    const { list } = this.state
    const List = list.filter(item => item.id !== msg)
    this.setState({
      list: List
    })
  }
  render() {
    return (
      <div className="app">
        <From id={this.state.id} name={this.state.name} aa={this.handleId} bb={this.handleName} list={this.state.list} cc={this.handleAdd}></From>
        <Table list={this.state.list} delete={this.handleDelete}></Table>
      </div>
    )
  }
}
export default App