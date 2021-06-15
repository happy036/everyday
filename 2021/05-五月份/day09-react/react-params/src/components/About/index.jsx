import React from 'react';
class About extends React.Component {
  // 通过动态路由传参
  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <h2>关于我们</h2>
      </div>
    )
  }
}
export default About