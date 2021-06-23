import React from "react";
import { Carousel, Flex } from 'antd-mobile';
import axios from "axios";
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
        isFinished: true
    }
    componentDidMount() {
        let _this = this
        axios.get('http://localhost:8080/home/swiper').then(function (response) {
            if (response.data.status === 200) {
                _this.setState({
                    swiperData: response.data.body,
                    isFinished: true
                })
            }
        })
    }
    getSwiper() {
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
    render() {
        return (
            <div className='Home'>
                {/* 轮播图 */}
                {
                    this.state.isFinished ? <Carousel
                        autoplay
                        infinite
                    >
                        {this.getSwiper()}
                    </Carousel> : ('')
                }
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
            </div>
        )
    }
}

export default Home;