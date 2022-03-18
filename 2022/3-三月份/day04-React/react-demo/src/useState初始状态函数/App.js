import React from 'react'
import { useState } from 'react'
function App() {
    const [number, setNumber] = useState(() => {
        let inialState = 0
        for (let i = 0; i < 1000; i++) {
            inialState += i
        }
        return inialState
    })
    return (
        <button onClick={() => setNumber((prev) => prev + 1)}>{number}</button>
    )
}

export default App