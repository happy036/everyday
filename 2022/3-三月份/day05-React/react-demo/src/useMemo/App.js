import React, { useMemo, useState } from 'react'

function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const styles = useMemo(() => {
        return {
            background: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])
    const double = useMemo(() => {
        return slowFunction(number)
    }, [number])
    return (
        <>
            <input type='number' value={number} onChange={(event) => setNumber(event.target.value)} />
            <div style={styles} onClick={() => setDark(!dark)}>
                {double}
            </div>
        </>
    )
}
function slowFunction(n) {
    for (let i = 0; i < 1000000000; i++) { }
    return n * 2
}
export default App