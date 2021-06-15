import React from "react";
import ReactDOM from 'react-dom';
class App extends React.Component {
  state = {
    count: 0,
    hero: [
      {
        id: 1,
        name: '小白'
      },
      {
        id: 2,
        name: '小黑'
      },
      {
        id: 3,
        name: '小粉'
      }
    ]
  }
  render() {
    return (
      <ul>
        {
          this.state.hero.map(item => (
            <React.Fragment key={item.id}>
              <li>{item.name}</li>
            </React.Fragment>
          ))
        }
      </ul>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);