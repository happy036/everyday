import React from 'react';
import styled from "styled-components";
const Button = styled.button`
width:${props => props.width};
height:${props => props.height};
background-color:${props => props.primary ? '#ccc' : '#fff'};
color:${props => props.primary ? '#ddd6c1' : '#213742'};
border:1px solid #f3f3f3;
`
class App extends React.Component {
  state = {
    width: '70px',
    height: '30px'
  }
  render() {
    return (
      <div>
        <Button primary {...this.state}>主要按钮</Button>
      </div>
    )
  }
}
export default App