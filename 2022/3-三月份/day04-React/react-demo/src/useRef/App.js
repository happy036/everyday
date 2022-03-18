import { useRef } from 'react'

function App() {
    const username = useRef()
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(username.current.value)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input type='text' ref={username} />
            <input type='submit' />
        </form>
    )
}

export default App