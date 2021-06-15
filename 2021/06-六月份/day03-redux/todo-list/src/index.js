import React from 'react';
import ReactDOM from 'react-dom';
// 为了让页面变得美观，引入antd.css
import 'antd/dist/antd.css';
import App from "./components/App/App";
import { Provider } from "react-redux";
// 引入store, 数据仓库
import store from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);