import React from 'react';
import HomeStyle from "./Home.module.css";
class Home extends React.Component {
  render() {
    return (
      <div className="Home" >
        <p className={HomeStyle.p}>我是Home</p>
      </div>
    )
  }
}
export default Home