import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  }
  handleSum = (num) => {
    // console.log(num)
    this.setState({
      count: this.state.count + 1
    })
  }
  handleSumTo = (sum) => {
    // console.log(sum)
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Son sum={this.handleSum}></Son>
        <Daughter sumtwo={this.handleSumTo}></Daughter>
      </div>
    )
  }
}
class Son extends React.Component {
  state = {
    count: 0
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      this.props.sum(this.state.count)
    })
  }
  render() {
    return (
      <button onClick={this.handleAdd}>{this.state.count}</button>
    )
  }
}
class Daughter extends React.Component {
  state = {
    count: 0
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      this.props.sumtwo(this.state.count)
    })
  }
  render() {
    return (
      <button onClick={this.handleAdd}>{this.state.count}</button>
    )
  }
}
export default App