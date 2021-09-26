import './App.css';
import React, { useState, useEffect } from 'react';
let flag = false
function App() {
  // 数据
  const [list, setList] = useState([
    { id: 1, name: '西游记', time: new Date().toLocaleDateString() },
    { id: 2, name: '水浒传', time: new Date().toLocaleDateString() },
    { id: 3, name: '红楼梦', time: new Date().toLocaleDateString() },
  ])
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [keywords, setKeywords] = useState('')
  // 输入框
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break;
      case 'id':
        setId(e.target.value)
        break;
      case 'keywords':
        setKeywords(e.target.value)
        break;
      default:
        break;
    }
  }
  // 添加功能
  const addBrand = () => {
    if (id.trim().length === 0 && name.trim().length === 0) return alert('不能为空')
    setList([...list, { id: id, name: name, time: new Date().toLocaleDateString() }])
    setId('')
    setName('')
  }
  // 搜索功能
  const searchBrand = () => {
    return list.filter(item => item.name.includes(keywords))
  }
  // 删除
  const deleteBrand = (id) => {
    const list2 = list.filter(item => item.id !== id)
    setList(list2)
  }
  // 监听更新
  useEffect(() => {
    if (!flag) {
      flag = true
    } else {
      alert('操作成功')
    }
  }, [list])
  return <div className="App">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">图书管理系统</h3>
      </div>

      <div className="panel-body">
        <div className="form-group form-inline">
          <div className="input-group">
            <div className="input-group-addon">编号</div>
            <input type="text" className="form-control" name="id" value={id} onChange={handleChange} />
          </div>

          <div className="input-group">
            <div className="input-group-addon">书籍名称</div>
            <input type="text" className="form-control" name="name" value={name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <button className="btn btn-primary" onClick={addBrand}>添加</button>
          </div>

          <div className="input-group pull-right">
            <div className="input-group-addon">按书名搜索</div>
            <input type="text" className="form-control" name="keywords" value={keywords} onChange={handleChange} />
          </div>
        </div>
      </div>

      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>编号</th>
            <th>书籍名称</th>
            <th>添加时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            <>
              {/* 渲染数据 */}
              {
                searchBrand().map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.time}</td>
                    <td>
                      {/* 删除 */}
                      <a href="#" onClick={() => { deleteBrand(item.id) }}>删除</a>
                    </td>
                  </tr>
                ))
              }
              {/* <tr >
                <td>2</td>
                <td>水浒传</td>
                <td>2021/7/10</td>
                <td>
                  <a href="#" >删除</a>
                </td>
              </tr>
              <tr >
                <td>3</td>
                <td>红楼梦</td>
                <td>2021/7/10</td>
                <td>
                  <a href="#" >删除</a>
                </td>
              </tr> */}

            </>
          }

        </tbody>
      </table>

    </div>
  </div>
}

export default App;
