import './App.css';
import React from 'react';
import store from "./store/store";
// function App() {
//   return (
//     <div className="App">
//       <p>数字：五五九二</p>
//       <br></br>
//       <button>+</button>
//       <button>-</button>
//     </div>
//   );
// }
class App extends React.Component {
  state = store.getState()
  render() {
    return (
      <div className="App">
        <p>数字：{this.state.count}</p>
        <br></br>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}
export default App;
