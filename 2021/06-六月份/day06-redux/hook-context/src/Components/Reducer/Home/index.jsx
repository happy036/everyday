import { useReducer } from "react";
import reducer from "../utils/reducer";
function Home(){
    const [state,dispatch]=useReducer(reducer,{num:0})
    return(
        <div>
            <h2>数字:{state.num}</h2>
            <button onClick={()=>{dispatch({type:'add'})}}>增加</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>减少</button>
        </div>
    )
}
export default Home