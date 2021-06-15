import React from "react";
// const Home = () => {
//   console.log('Home组件更新')
//   return (
//     <div>
//       <h3>我是Home组件</h3>
//     </div>
//   )
// }
const Home = React.memo(
  (props) => {
    console.log('Home组件更新')
    return (
      <div>
        <h3>我是Home组件{props.count}</h3>
      </div>
    )
  }
)
export default Home