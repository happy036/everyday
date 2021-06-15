import React from 'react';
import styled from "styled-components";
const DivStyle = styled.div`
width:200px;
height:200px;
background-color:green;
span{
  display:block;
  width:100px;
  height:100px;
  background-color:yellow;
}
`
class App extends React.Component {
  render() {
    return (
      <div>
        <DivStyle>
          <span></span>
        </DivStyle>
      </div>
    )
  }
}
export default App