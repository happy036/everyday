import { useState } from 'react'
function App() {
    const [state, setState] = useState({
        colors: ["palevioletred", "yellow", "papayawhip"],
        index: 0,
    });
    const onClickHandler = () => {
        setState({
            ...state,
            index: state.index >= state.colors.length - 1 ? 0 : state.index + 1
        })
    }
    const styles = {
        width: 200,
        padding: '30px 0',
        background: state.colors[state.index]
    }
    return <div style={styles} onClick={onClickHandler}></div>
}

export default App