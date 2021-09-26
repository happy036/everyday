import React from "react";
import { renderRoutes } from "react-router-config";
// 导入TabBar
import { TabBar } from "antd-mobile";
class App extends React.Component {
  // 设置状态
  state = {
    selectedTab: this.props.location.pathname,
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
    ],
    isTabBar: false
  }
  // 组件渲染完成执行(只执行一次)
  componentDidMount() {
    // 判断tabBar是否显示
    this.setState({
      isTabBar: !this.props.location.pathname.includes("/home") && !this.props.location.pathname.includes("/findhouse") && !this.props.location.pathname.includes("/news") && !this.props.location.pathname.includes("/profile")
    })
  }
  // pathname数据进行了更新  我们有没有监听这个数据的更新
  // 需要添加条件判断
  componentDidUpdate(prevProps) {
    // console.log(this.props)
    // console.log(prevProps)
    // 需要添加条件判断(如果上一次的pathname和这次的pathname不一样就要重新赋值 否则 不执行)
    // 本次的pathname
    // 上次的pathname咋拿
    // 新的
    const curProps = this.props.location.pathname
    // console.log(curProps)
    // 上次的
    const preProps = prevProps.location.pathname
    // console.log(preProps)
    if (curProps !== preProps) {
      this.setState({
        selectedTab: curProps,
        // 当url发生变化的时候 判断tabBar是否显示
        isTabBar: !this.props.location.pathname.includes("/home") && !this.props.location.pathname.includes("/findhouse") && !this.props.location.pathname.includes("/news") && !this.props.location.pathname.includes("/profile")
      })
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div className='App'>
        {renderRoutes(this.props.route.routes)}
        <div className='tabbar'>
          <TabBar tintColor='#21b97a' hidden={this.state.isTabBar}>
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