import React from 'react';
import './App.css';

class App extends React.Component {
  // 1.定义初始化数据
  state = {
    id: "",
    name: '',
    keywords: '',
    brandList: [
      { id: 1, name: '奔驰', ctime: '2020/9/23' },
      { id: 2, name: '宝马', ctime: '2020/9/21' },
      { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
      { id: 4, name: '千里马', ctime: '2020/5/3' }
    ]
  }
  handleModel = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state.id)
  }
  // 添加商品
  arrBrand = () => {
    const { id, name, brandList } = this.state
    if (!(id && name)) return alert('数据不能为空')
    this.setState({
      brandList: [...brandList, { id: parseInt(id), name: name, ctime: new Date().toLocaleDateString() }],
      id: '',
      name: ''
    })
  }
  // 删除商品
  deleteItem = (id) => {
    const List = this.state.brandList.filter(item => item.id !== id)
    this.setState({
      brandList: List
    })
  }
  // 搜索商品
  searchItem = () => {
    return this.state.brandList.filter(item => item.name.includes(this.state.keywords))
  }
  render() {
    return (
      <div className="App">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">添加品牌</h3>
          </div>

          <div className="panel-body">
            <div className="form-group form-inline">
              <div className="input-group">
                <div className="input-group-addon">编号</div>
                <input type="text" className="form-control" name='id' value={this.state.id} onChange={this.handleModel} />
              </div>

              <div className="input-group">
                <div className="input-group-addon">品牌名称</div>
                <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.handleModel} />
              </div>

              <div className="input-group">
                <button className="btn btn-primary" onClick={this.arrBrand}>添加</button>
              </div>

              <div className="input-group pull-right">
                <div className="input-group-addon">按名称搜索</div>
                <input type="text" className="form-control" name='keywords' value={this.state.keywords} onChange={this.handleModel} />
              </div>
            </div>
          </div>

          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>编号</th>
                <th>品牌名称</th>
                <th>添加时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {
                this.searchItem().map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.ctime}</td>
                    <td>
                      <a href="#" onClick={this.deleteItem.bind(this, item.id)}>删除</a>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>

        </div>
      </div>
    )
  }
}
export default App