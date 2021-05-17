import React from 'react';
class Table extends React.Component {
  handleDelete = (id) => {
    this.props.delete(id)
  }
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.list.length === 0 ? <tr><td>暂无数据</td></tr> :
              this.props.list.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ctime}</td>
                  <td><a onClick={() => { this.handleDelete(item.id) }}>删除</a></td>
                </tr>
              ))
          }
        </tbody>
      </table>
    )
  }
}
export default Table