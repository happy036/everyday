import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss'
import { store } from './store'
import { Provider } from 'react-redux'
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Provider>
);