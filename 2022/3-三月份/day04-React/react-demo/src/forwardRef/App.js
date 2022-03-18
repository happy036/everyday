import { useEffect, useRef } from 'react'
import Message from './Message'
function App() {
    const MessageRef = useRef()
    useEffect(() => {
        console.log(MessageRef.current)
    }, [])
    return <Message ref={MessageRef} />
}

export default App