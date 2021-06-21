import Home from "./Home/index";
import About from "./About/index";
import { memo, useState } from "react";
const MemoHome = memo(Home)
const MemoAbout = memo(About)
function App() {
    console.log('App渲染了')
    const [numState, setNumState] = useState(0)
    const increment = () => {
        setNumState(numState + 1)
    }
    const [countState, setCountState] = useState(0)
    const decrement = () => {
        setCountState(countState - 1)
    }
    return (
        <div>
            <h2>App组件</h2>
            <p>{numState}</p>
            <p>{countState}</p>
            {/* <button onClick={() => { increment() }}>加法</button>
            <button onClick={() => { decrement() }}>减法</button> */}
            <MemoHome handler={increment}></MemoHome>
            <MemoAbout handler={decrement}></MemoAbout>
        </div>
    )
}
export default App