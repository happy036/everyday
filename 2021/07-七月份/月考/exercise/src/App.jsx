import { useState, useRef, useEffect } from "react";
import "./App Brand.css"
let flag = false
function App() {
    const inputRef1 = useRef('')
    const inputRef2 = useRef('')
    const [keyword, setKeyword] = useState('')
    // const [flag, setFlag] = useState(false)
    const [list, setList] = useState(
        [
            { id: 1, name: '奔驰', ctime: '2020/9/23', status: false },
            { id: 2, name: '宝马', ctime: '2020/9/21', status: false },
            { id: 3, name: '长安', ctime: '2014/6/23', status: false },
            { id: 4, name: '野马', ctime: '2020/5/3', statuxs: false }
        ]
    )
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    const addBrand = () => {
        if (inputRef1.current.value.trim().length === 0 && inputRef2.current.value.trim().length === 0) return alert('不能为空')
        setList([...list, { id: inputRef1.current.value, name: inputRef2.current.value, ctime: new Date().toDateString() }])
        inputRef1.current.value = ''
        inputRef2.current.value = ''
    }
    const deleteBrand = (id) => {
        const list2 = list.filter(item => item.id !== id)
        setList(list2)
    }
    const searchBrand = () => {
        return list.filter(item => item.name.includes(keyword))
    }
    useEffect(() => {
        if (!flag) {
            flag = true
        } else {
            alert('更新')
        }
    }, [list])
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
                            <input type="text" name="id" ref={inputRef1} className="form-control" />
                        </div>

                        <div className="input-group">
                            <div className="input-group-addon">品牌名称</div>
                            {/* // 1.3 书写受控组件 */}
                            <input type="text" name="name" ref={inputRef2} className="form-control" />
                        </div>

                        <div className="input-group">
                            <button className="btn btn-primary" onClick={addBrand}>添加</button>
                        </div>

                        <div className="input-group pull-right">
                            <div className="input-group-addon">按名称搜索</div>
                            {/* // 3.1 书写受控组件 */}
                            <input type="text" name="keywords" value={keyword} className="form-control" onChange={handleChange} />
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
                            searchBrand().map(item => (
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