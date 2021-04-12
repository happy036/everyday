<template>
	<view>
			<!-- 轮播图区域 -->
		<swiper class="show" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				<swiper-item v-for="(item,index) in background" :key="index">
					<cover-image :src="item.imageUrl"></cover-image>
				</swiper-item>
		</swiper>
		<!-- 分类 -->
		<view class="cate">
			<view class="cate-box">
				<view class="iconfont icon-rili"></view>
				<text class="one">每日推荐</text>
			</view>
			<view class="cate-box">
				<view class="iconfont icon-icon--"></view>
				<text class="one">私人FM</text>
			</view>
			<view class="cate-box">
				<view class="iconfont icon-gedan"></view>
				<text class="one">歌单广场</text>
			</view>
			<view class="cate-box">
				<view class="iconfont icon-paixingbang"></view>
				<text class="one">排行榜</text>
			</view>
			<view class="cate-box">
				<view class="iconfont icon-diantai"></view>
				<text class="one">电台</text>
			</view>
		</view>
		<!-- 推荐歌单 -->
		<view class="Mtitle">
			<text class="left">推荐歌单</text>
			<text class="right">查看更多</text>
		</view>
		<!-- 推荐歌单下面 -->
		<view class="list" :vertical='true'>
			<view class="list-one" >
				<swiper-item class="list-two" v-for="(item,index) in musicList" :key="index">
					<cover-image :src="item.picUrl"></cover-image>
					<text class="list-box">{{item.name}}</text>
				</swiper-item>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: [],
				musicList:[]
			}
		},
		onLoad() {
			// 调用获取轮播图图片
			this.getSwiperList()
			// 调用获取推荐歌单方法
			this.getMusicList()
		},
		methods: {
			// 获取轮播图图片
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/banner')
				// console.log(res)
				this.background = res.banners
			},
			// 获取推荐歌单数据
			async getMusicList(){
				const {data:res}=await uni.$http.get('/personalized')
				// console.log(res)
				this.musicList=res.result
			}
		}
	}
</script>

<style lang="scss">
cover-image{
	border-radius: 10px;
}
.cate-box view{
	width: 50px;
	height: 50px;
	background-color: #ec4141;
	border-radius: 50%;
	text-align: center;
	line-height: 50px;
			margin: 0 auto;
}
.one{
	color: #909090;
	font-size: 12px;
}
.cate{
	text-align: center;
	padding-top: 10px;
	overflow: hidden;
	.cate-box{
		float: left;
		width: 20%;
	}
}
.Mtitle{
	margin-top: 25px;
	overflow: hidden;
}
.left{
	font-size: 14px;
	margin-left: 15px;
}
.right{
	font-size: 12px;
	color: #808080;
	border: 1px solid #808080;
	border-radius: 20px;
	display: block;
	width: 85px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	float: right;
	margin-right: 15px;
}
.list-one{
	width: 83px;
	height: 110px;
}
.list-box{
	display: block;
	overflow: hidden;
}
.list-two{
	width: 83px !important;
	height: 85px !important;
}
</style>
