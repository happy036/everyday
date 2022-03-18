import classNames from 'classnames'

function App() {
    const result = classNames('bar', 'foo')
    return (
        <div className={result}>App</div>
    )
}

export default App