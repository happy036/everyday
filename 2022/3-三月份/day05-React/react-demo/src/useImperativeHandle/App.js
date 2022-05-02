import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
// 2.子组件通过forwardRef获取钩子
const Message = forwardRef(
    (props, ref) => {
        const [text, setText] = useState('')
        // 3.在子组件中向钩子中添加属性或方法供父组件使用
        useImperativeHandle(ref, () => {
            return {
                getText() {
                    return text
                }
            }
        })
        return <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
    }
)
function App() {
    // 在App组件中获取子组件message里面text状态
    // 1.创建钩子，将钩子传递到子组件
    const messageRef = useRef()
    // 4.在父组件中获取子组件向钩子中添加的数据
    const onClickHandler = () => {
        console.log(messageRef.current.getText())
    }
    return (
        <>
            <Message ref={messageRef} />
            <button onClick={onClickHandler}></button>
        </>
    )
}

export default App