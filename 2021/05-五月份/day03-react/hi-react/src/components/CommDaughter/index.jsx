const CommDaughter = (props) => {
  return (
    <div className='daughter'>
      <h3>我是女儿组件{props.daughter}</h3>
      <p>{props.brotherMsg}</p>
    </div>
  )
}
// 给组件声明默认值
CommDaughter.defaultProps = {
  daughter: '曹颖'
}
export default CommDaughter