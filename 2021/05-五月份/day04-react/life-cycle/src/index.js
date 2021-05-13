import React from 'react';
import ReactDOM from 'react-dom';
// 挂载阶段
// import App from './App';
// 更新阶段
// import Two from "./two";
// 卸载阶段
import Three from "./three";

ReactDOM.render(
  <React.StrictMode>
    <Three />
  </React.StrictMode>,
  document.getElementById('root')
);