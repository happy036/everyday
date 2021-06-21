import React from 'react';
// 引入connect 为了把数据和方法映射到组件
import { connect } from "react-redux";
import { findScrect } from "./store/actions";
class App extends React.Component{
  render(){
    return(
      <main>
        <h2>{this.props.screct}</h2>
        <button onClick={this.props.getScrect}>点击获取数据</button>
      </main>
    )
  }
}
// 映射数据
const mapStateToProps=(state)=>{
  return{
    screct:state.screct
  }
}
// 映射方法
const mapDispatchToProps=(dispatch)=>{
  return{
    getScrect(){
      dispatch(findScrect())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)