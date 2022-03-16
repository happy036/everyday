// import Home from "./pages/Home"
// import List from "./pages/List"
// import TextOne from "./TextOne"
// import TextTwo from "./TextTwo"
import React from 'react'
function App() {
    // const onHandler = (a, b, event) => {
    //     console.log(a, b, event)
    // }
    // return (
    // <>
    // {/* <button onClick={(event) => onHandler(1, 2, event)}>button</button> */}
    // </>
    // )

    // if条件判断
    // if (true) {
    //     return <TextOne />
    // } else {
    //     return <TextTwo />
    // }

    // 三元运算符
    // return (<><div>{true ? <TextOne /> : <TextTwo />}</div></>)

    // AND运算符
    // return <div>{true && <TextOne />}</div>

    // 列表渲染
    // const data = ["The beach", "The mountains", "Vibrant cities", "Roughing it"]
    // const jsxArray = [
    //     <li>list-item-1</li>,
    //     <li>list-item-2</li>,
    //     <li>list-item-3</li>,
    // ];
    // return (<><ul>{jsxArray}</ul></>)

    // map
    // let data = ["Data1", "Data2", "Data3"]
    // return (<><ul>{data.map(item => (<li>{item}</li>))}</ul></>)

    // 组件过滤
    // const list = [
    //     { id: 1, name: "The beach", topDestination: true },
    //     { id: 2, name: "The mountains", topDestination: false },
    //     { id: 3, name: "Vibrant cities", topDestination: true },
    //     { id: 4, name: "Roughing it", topDestination: false },
    // ];
    // return (<ul>{list.filter((item) => item.topDestination).map((item) => (<li key={item.id}>{item.name}</li>))}</ul>)

    // 组件状态
    // const [value, setValue] = React.useState('aaa')
    // const [count, setCount] = React.useState(0)
    // return (<>
    //     <p>{value}</p>
    //     <button onClick={() => setValue('bbb')}>更改视图状态</button>
    //     <p>{count}</p>
    //     <button onClick={() => setCount(count + 1)}>+1</button>
    //     <button onClick={() => setCount(count - 1)}>-1</button>
    // </>)

    // useEffect
    const [value, setValue] = React.useState('aaa')
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        document.title = count
        console.log(111)
    }, [count])
    return (<>
        <p>{value}</p>
        <button onClick={() => setValue('bbb')}>更改视图状态</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </>)
}
export default App