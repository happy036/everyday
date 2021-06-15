import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
class App extends React.Component {
  state = {
    flag: true
  }
  btnClick = (f) => {
    this.setState({
      flag: f
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.btnClick(true)}>Home</button>
        <button onClick={() => this.btnClick(false)}>About</button>
        {this.state.flag ? <Home /> : <About />}
      </div>
    )
  }
}
export default App