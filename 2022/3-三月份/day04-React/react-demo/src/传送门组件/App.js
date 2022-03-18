import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
function App() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{ width: 500, height: 500, transform: 'translate(0,0)' }}>
            <button onClick={() => setIsOpen(!isOpen)}>open</button>
            {isOpen ? <Modal /> : null}
        </div>
    )
}

export default App