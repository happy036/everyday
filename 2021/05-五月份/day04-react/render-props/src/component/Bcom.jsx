import React from 'react';
import Mouse from "./Mouse";
import Img from "../image/cat.png"
class Bcom extends React.Component {
  render() {
    return (
      <div><Mouse render={(mouse) => {
        return (
          <img alt="" src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x }} />
        )
      }}></Mouse></div>
    )
  }
}
export default Bcom