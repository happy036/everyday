import React, { useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const onClickHandler = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log(count)
    }, [count])
    return (
        <button onClick={onClickHandler}>{count}</button>
    )
}

export default App