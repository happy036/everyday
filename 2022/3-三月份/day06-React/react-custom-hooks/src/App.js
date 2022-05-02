import useLocalStorage from './useLocalStorage'
function App() {
    const [name, setName] = useLocalStorage('name', 'zhangsan')
    return (
        <div>App</div>
    )
}

export default App