import React from 'react';
import styled from "styled-components"
const Button = styled.button`
width:70px;
height:30px
`
const PrimaryButton = styled(Button)`
background-color:#40a9ff;
color:#fff;
border:1px solid #ff0000;
`
class App extends React.Component {
  render() {
    return (
      <div>
        <Button>按钮</Button>
        <PrimaryButton>主要按钮</PrimaryButton>
      </div>
    )
  }
}
export default App