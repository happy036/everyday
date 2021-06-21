import { useContext } from "react";
import mainContext from "../utils/context";
function AppGradeSon(){
    const main=useContext(mainContext)
    return(
      <div>
        <h2>我是孙子组件</h2>
        <p>我接收到了爷爷的数据：{main.name}-{main.age}</p>
      </div>  
    )
}
export default AppGradeSon