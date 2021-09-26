import { useState } from "react";
import "./App.css";
function App() {
  // 声明id
  const [idState, setId] = useState('')
  // 声明name
  const [nameState, setName] = useState('')
  // 声明keywords
  const [keywords, setKeywords] = useState('')
  // 声明list
  const [list, setList] = useState([
    { id: 1, name: '奔驰', ctime: '2020/9/23' },
    { id: 2, name: '宝马', ctime: '2020/9/21' },
    { id: 3, name: '长安', ctime: '2014/6/23' },
    { id: 4, name: '野马', ctime: '2020/5/3' }
  ])
  // 监听数据变化 给state赋值
  const handlerChange = (e) => {
    switch (e.target.name) {
      case 'id':
        setId(e.target.value)
        break;
      case 'name':
        setName(e.target.value)
        break;
      case 'keywords':
        setKeywords(e.target.value)
        break;
      default:
        throw new Error("出错了")
    }
  }
  // 添加数据
  const addBrand = () => {
    if (idState.trim().length === 0 || nameState.trim().length === 0) return alert('请您输入编号和品牌名称')
    setList([...list, { id: idState, name: nameState, ctime: new Date().toLocaleDateString() }])
    setId('')
    setName('')
  }
  // 删除数据
  const deleteBrand = (id) => {
    const aaa = list.filter(item => item.id !== id)
    setList(aaa)
  }
  // 搜索数据
  const searchResult = () => {
    return list.filter(item => item.name.includes(keywords))
  }
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
              {/* // 1.3 书写受控组件 */}
              <input type="text" name="id" className="form-control" value={idState} onChange={handlerChange} />
            </div>

            <div className="input-group">
              <div className="input-group-addon">品牌名称</div>
              {/* // 1.3 书写受控组件 */}
              <input type="text" name="name" className="form-control" value={nameState} onChange={handlerChange} />
            </div>

            <div className="input-group">
              <button className="btn btn-primary" onClick={addBrand}>添加</button>
            </div>

            <div className="input-group pull-right">
              <div className="input-group-addon">按名称搜索</div>
              {/* // 3.1 书写受控组件 */}
              <input type="text" name="keywords" className="form-control" value={keywords} onChange={handlerChange} />
            </div>
          </div>
        </div>

        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>品牌名称</th>
              <th>添加时间</th>
              <th>操作</th>
            </tr>
          </thead>
          {/* diff算法 */}
          <tbody>
            {/* 1.2 把初始数据渲染出来 */}
            {
              // this.state.brandList.map(item => (
              searchResult().map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ctime}</td>
                  <td>
                    {/* 2.2 给删除按钮添加点击事件 */}
                    <a href="#" onClick={() => { deleteBrand(item.id) }}>删除</a>
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
export default App