import React from "react";
import { Carousel, Flex, Grid } from 'antd-mobile';
// 网络请求的配置
import { httpGet } from "../../utils/axios/http";
import { HomeAPI } from "../../api";
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"
const navList = [
    {
        title: '整租',
        path: '/findhouse',
        imgSrc: nav1
    },
    {
        title: '合租',
        path: '/findhouse',
        imgSrc: nav2
    },
    {
        title: '地图找房',
        path: '/findhouse',
        imgSrc: nav3
    },
    {
        title: '去出租',
        path: '/findhouse',
        imgSrc: nav4
    },
]
class Home extends React.Component {
    state = {
        // 初始化数据
        imgHeight: 176,
        swiperData: [],
        isFinished: false,
        // 租房小组
        groupData: [],
        // 最新资讯
        newsData: [],
        // 城市名称
        cityName: '北京',
        areaId: ''
    }
    componentDidMount() {
        // 获取轮播图数据
        this.getSwiper()
        // 获取租房小组数据
        this.getGroups()
        // 获取资讯数据
        this.getNews()
        // 获取当前位置信息
        // window.navigator.geolocation
        this.getCityName()
    }
    getCityName() {
        var myCity = new window.BMap.LocalCity()
        myCity.get(async (result) => {
            const res = await httpGet(HomeAPI.city, {
                name: result.name
            })
            // console.log(res)
            if (res.status === 200) {
                this.setState({
                    cityName: res.body.label,
                    areaId: res.body.value
                })
            }
        })
    }
    // 轮播图
    async getSwiper() {
        const res = await httpGet(HomeAPI.swiper)
        if (res.status === 200) {
            this.setState({
                swiperData: res.body,
                isFinished: true
            })
        }
    }
    renderSwiper() {
        return this.state.swiperData.map(item => (
            <a
                key={item.id}
                href="http://www.czxy.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`http://localhost:8080${item.imgSrc}`}
                    alt={item.alt}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </a>
        ))
    }
    // 租房小组
    async getGroups() {
        const res = await httpGet(HomeAPI.group, { area: this.state.areaId })
        // console.log(res)
        if (res.status === 200) {
            this.setState({
                groupData: res.body
            })
        }
    }
    renderGroups() {
        return (
            <React.Fragment>
                <Flex className="group-title" justify="between">
                    <h3>租房小组</h3>
                    <span>更多</span>
                </Flex>
                <Grid className="group-content" square={false} hasLine={false} columnNum={2} data={this.state.groupData} renderItem={item => (
                    < Flex className="group-content-item" key={item.id} justify="between">
                        <div className="group-content-font">
                            <h3>{item.title}</h3>
                            <span>{item.desc}</span>
                        </div>
                        <div className="group-content-img">
                            <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                        </div>
                    </Flex>
                )}>
                </Grid>
            </React.Fragment>
        )
    }
    // 资讯
    async getNews() {
        const res = await httpGet(HomeAPI.news, { area: this.state.areaId });
        console.log(res);
        if (res.status === 200) {
            this.setState({
                newsData: res.body
            })
        }
    }
    renderNews() {
        return this.state.newsData.map(item => (<div key={item.id} className="news-item">
            <img className="news-item-img" src={`http://localhost:8080${item.imgSrc}`} alt="" />
            <div className="news-item-conent">
                <p className="news-item-content-title">{item.title}</p>
                <p className="news-item-content-tips">
                    <span>{item.from}</span>
                    <span>{item.date}</span>
                </p>
            </div>
        </div>))
    }
    render() {
        return (
            <div className='Home'>
                <div className="swiper">
                    {/* 搜索框 */}
                    <Flex className='search-box'>
                        {/* 搜索框左边 */}
                        <Flex className='search-left'>
                            <div className="location" onClick={() => { this.props.history.push('/citylist') }}>
                                <span>{this.state.cityName}</span>
                                <i className='iconfont icon-arrow' ></i>
                            </div>
                            <div className="search-form" onClick={() => { this.props.history.push('/search') }}>
                                <i className='iconfont icon-seach' ></i>
                                <span>请输入小区或地址</span>
                            </div>
                        </Flex>
                        {/* 地图 */}
                        <i className='iconfont icon-map' onClick={() => { this.props.history.push('/map') }}></i>
                    </Flex>
                    {/* 轮播图 */}
                    {
                        this.state.isFinished ? <Carousel
                            autoplay
                            infinite
                        >
                            {this.renderSwiper()}
                        </Carousel> : ('')
                    }
                </div>
                {/* 导航 */}
                <Flex className='Nav'>
                    {
                        navList.map((item, index) => (
                            <Flex.Item key={index} onClick={() => { this.props.history.push(item.path) }}>
                                <img src={item.imgSrc} alt="" />
                                <p>{item.title}</p>
                            </Flex.Item>
                        ))
                    }
                </Flex>
                {/* 租房小组 */}
                <div className="group">
                    {this.renderGroups()}
                </div>
                {/* 最新资讯 */}
                <div className="news">
                    <h3>最新资讯</h3>
                    {this.renderNews()}
                </div>
            </div>
        )
    }
}

export default Home;