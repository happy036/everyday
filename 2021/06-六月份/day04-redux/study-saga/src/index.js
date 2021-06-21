import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入store
import store from "./store/store";
// 使用Provider组件 提供数据
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);