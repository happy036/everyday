import React, { useLayoutEffect, useRef, useState } from 'react'

function App() {
    const [isShow, setIsShow] = useState(false)
    const divRef = useRef()
    useLayoutEffect(() => {
        if (!divRef.current) return
        // 当div被渲染时，让它的top值为100
        divRef.current.style.top = '100px'
    }, [isShow])
    return (
        <>
            <button onClick={() => setIsShow((prev) => !prev)}>button</button>
            {isShow ? (<div ref={divRef} style={{ position: 'absolute' }}>我是div</div>) : null}
        </>
    )
}

export default App