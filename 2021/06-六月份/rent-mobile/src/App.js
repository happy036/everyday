import React from "react";
import { renderRoutes } from "react-router-config";
// 导入TabBar
import { TabBar } from "antd-mobile";
class App extends React.Component {
  // 设置状态
  state = {
    selectedTab: this.props.history.location.pathname,
    tabbar: [
      {
        title: '首页',
        icon: 'icon-ind',
        path: '/home'
      },
      {
        title: '找房',
        icon: 'icon-findHouse',
        path: '/findhouse'
      }, {
        title: '资讯',
        icon: 'icon-infom',
        path: '/news'
      },
      {
        title: '我的',
        icon: 'icon-my',
        path: '/profile'
      }
    ]
  }
  render() {
    // console.log(this.props)
    return (
      <div className='App'>
        {renderRoutes(this.props.route.routes)}
        <div className='tabbar'>
          <TabBar tintColor='#21b97a'>
            {
              this.state.tabbar.map(item => (
                <TabBar.Item
                  title={item.title}
                  key={item.path}
                  selected={this.state.selectedTab === item.path}
                  icon={<i className={`iconfont ${item.icon}`}></i>}
                  selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                  onPress={() => { this.props.history.push(item.path); this.setState({ selectedTab: item.path }) }}
                >
                </TabBar.Item>
              ))
            }
          </TabBar>
        </div>
      </div>
    )
  }
}
export default App