import React, { useEffect, useState, memo } from 'react'
const ShowName = memo(({ person }) => {
    console.log('ShowName组件重新渲染了')
    return <div>{person.name}</div>
}, CompareFunction)
// memo 方法的第二个参数即为比较函数，可以通过它解决以上问题。比较函数的第一个参数为 prevProps，比较函数的第二个参数为 nextProps, 比较函数返回 true 不进行渲染，比较函数返回 false 组件重新渲染。
function CompareFunction(prevProps, nextProps) {
    if (prevProps.person.name === nextProps.person.name) {
        return true
    }
    return false
}
function App() {
    const [index, setIndex] = useState(0)
    // const [person] = useState({
    //     name: '张三'
    // })
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(timer)
    })
    return (
        <>
            <div>{index}</div>
            <ShowName person={{ name: '张三' }} />
        </>
    )
}
export default App