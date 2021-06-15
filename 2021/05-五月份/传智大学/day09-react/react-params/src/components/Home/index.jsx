import React from 'react';
class Home extends React.Component {
  // 通过URL传参
  componentDidMount() {
    // console.log(this.props)
    const params = new URLSearchParams(this.props.location.search)
    console.log(params.get('name'))
  }
  render() {
    return (
      <div>
        <h2>首页</h2>
      </div>
    )
  }
}
export default Home