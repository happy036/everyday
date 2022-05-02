import React, { useEffect, useRef, useState } from 'react'

function App() {
    const [text, setText] = useState('')
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log(renderCount.current)
        setTimeout(() => {
            alert(1)
            renderCount.current = renderCount.current + 10
        }, 1000)
    })
    return (
        <>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
            <div>{renderCount.current}</div>
        </>
    )
}

export default App