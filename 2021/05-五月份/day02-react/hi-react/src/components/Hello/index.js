import React from "react";


class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0,
  //   };
  // }
  state = {
    count: 0,
  };


  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleAdd}>按钮</button>
      </div>
    );
  }
}
export default Home;