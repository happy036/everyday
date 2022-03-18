import React from 'react'
const initialState = { username: '' }
function App() {
    const [formState, setFormState] = React.useState({ username: '' })
    const onChangeHandler = (event) => {
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })
    }
    const onResetHandler = () => {
        setFormState(initialState)
    }
    return (
        <form>
            <input type='text' name='username' value={formState.username} onChange={onChangeHandler} />
            <button type='button' onClick={onResetHandler}>重置</button>
        </form>
    )
}

export default App