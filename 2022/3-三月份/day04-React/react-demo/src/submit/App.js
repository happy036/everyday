import React from 'react'
function App() {
    const [formState, setFormState] = React.useState({ username: '' })
    const onChangeHandler = (event) => {
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input type='text' name='username' value={formState.username} onChange={onChangeHandler} />
            <input type='submit' />
        </form>
    )
}

export default App