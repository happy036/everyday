import AppSon from "./AppSon/index";
import mainContext from "./utils/context";
function App() {
  return (
    <mainContext.Provider value={{ name: '李四', age: 32 }}>
      <div>
        <h2>我是爷组件</h2>
        <AppSon></AppSon>
      </div>
    </mainContext.Provider>
  )
}
export default App