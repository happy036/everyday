import React, { useState } from 'react'

function App() {
    const [obj, setObj] = useState({})
    // 覆盖
    // const onClickHandler = () => {
    //     setObj({ a: 1 });
    //     setObj({ b: 1 });
    //     setObj({ c: 1 });
    // }
    // 合并
    const onClickHandler = () => {
        setObj((prev) => ({ ...prev, a: 1 }));
        setObj((prev) => ({ ...prev, b: 2 }));
        setObj((prev) => ({ ...prev, c: 3 }));
    }
    return (
        <button onClick={onClickHandler}>{JSON.stringify(obj)}</button>
    )
}

export default App