// 函数组件就是为了表示html
// 语法：在构造函数中返回组件的结构即可
function Fn() {
  const handleClick = function () {
    console.log('我是函数式组件的点击事件')
    console.log(this)
  }
  return (
    <div onClick={handleClick}>我是函数组件</div>
  )
}
export default Fn