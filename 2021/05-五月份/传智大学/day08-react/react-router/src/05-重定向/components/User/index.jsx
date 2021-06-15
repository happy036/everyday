import React from "react"
import { Redirect } from "react-router-dom"
class User extends React.Component {
  state = {
    isLogin: false
  }
  render() {
    let user = <div className="Other" >
      <h3>User页面</h3>
    </div>
    return this.state.isLogin ? user : <Redirect to="/login" />
  }

}

export default User;