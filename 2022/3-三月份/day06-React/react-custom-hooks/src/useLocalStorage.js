import { useState } from "react";

// 需求：实现一个钩子函数，作用是将组件状态实时同步到本地存储
export default function useLocalStorage(key, initialValue) {
    //key状态名称，本地存储中的key
    //initialValue表示状态的初始值
    const [storedValue, setStoredValue] = useState(() => {
        // 先看本地存储是否已经存在该状态
        const item = localStorage.getItem(key)
        // 如果本地存储中有该状态就用本地存储的，如果没有就用initialValue
        return item ? JSON.parse(item) : initialValue
    })
}