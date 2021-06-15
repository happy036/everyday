import React from 'react';
import store from "./store/store";
class App extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
  }
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}
export default App