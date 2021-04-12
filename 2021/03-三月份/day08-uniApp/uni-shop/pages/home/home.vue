<template>
	<view>
		<!-- 轮播图区域 -->
		    <swiper class="swiper" style="height: 330rpx;" :indicator-dots="true" :autoplay="true" :interval="3000"
			      :duration="1000"  :circular="true">
			      <swiper-item  v-for="(item,index) in swiperList" :key="item.goods_id">
				        <navigator :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
					<cover-image :src="item.image_src"></cover-image>
				</navigator>
				      </swiper-item>
			    </swiper>
		<!-- 导航区域 -->
		<view class="nav-list">
			<view class="nav-item" v-for="(item, i) in navList" :key="i" @click="navClickHandler(item)">
				<image :src="item.image_src" class="nav-img"></image>
			</view>
		</view>
		<!-- 楼层 -->
		<view class="floor-list">
		  <!-- 楼层 item 项 -->
		  <view class="floor-item" v-for="(item, i) in foolList" :key="i">
		    <!-- 楼层标题 -->
		    <image :src="item.floor_title.image_src" class="floor-title"></image>
				<!-- 楼层项 -->
				<view class="floor-img-box" >
				<!-- 左边 -->
				<navigator class="left-img-box" :url="item.product_list[0].navigator_url">
					<image :src="item.product_list[0].image_src" mode="widthFix"  :style="{width:item.product_list[0].image_width+'rpx'}"></image>
				</navigator>
				<!-- 右边 -->
				<view class="right-img-box">
					<navigator class="right-img-item" v-for="(item2,i2) in item.product_list" :key='i2' v-if="i2 !==0" :url="item2.navigator_url">
						<image :src="item2.image_src" mode="widthFix"  :style="{width:item2.image_width+'rpx'}"></image>
					</navigator>
				</view>
				</view>
		  </view>
		</view>
	</view>
</template>

<script>
	// 导入自己封装的 mixin 模块
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		// 将 badgeMix 混入到当前的页面中进行使用
		mixins: [badgeMix],
		data() {
			return {
				// 轮播图数组
				swiperList: [],
				// 分类
				navList: [],
				// 楼层的数据列表
				foolList:[]
			};
		},
		methods: {
			// 定义获取轮播图数据的方法
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get("/api/public/v1/home/swiperdata")
				if (res.meta.status !== 200) return uni.$toast()
				// console.log(res)
				this.swiperList = res.message
			},
			// 分类
			async geyNavList() {
				const {
					data: res
				} = await uni.$http.get("/api/public/v1/home/catitems")
				if (res.meta.status !== 200) return uni.$toast()
				this.navList = res.message
			},
			// 点击分类跳转
			navClickHandler(item){
				if(item.name=="分类"){
					uni.switchTab({
						url:'../cate/cate'
					})
				}
			},
			//获取楼层数据
		async	getFoolList(){
				const{data:res}=await uni.$http.get("/api/public/v1/home/floordata")
				if (res.meta.status !== 200) return uni.$toast()
				res.message.forEach((item,index)=>{
					item.product_list.forEach(item2=>{
						item2.navigator_url='/subpkg/goods_list/goods_list?'+item2.navigator_url.split("?")[1]
					})
				})
				this.foolList=res.message
			}
		},
		// 小程序页面的生命周期函数
		onLoad() {
			// 调用轮播图数据方法
			this.getSwiperList(),
				// 分类
				this.geyNavList(),
				// 楼层
				this.getFoolList()
		}
	}
</script>

<style lang="scss">
	.nav-list {
		display: flex;
		justify-content: space-around;
		margin: 15px 0;

		.nav-img {
			width: 128rpx;
			height: 140rpx;
		}
	}
	.floor-title {
	  height: 60rpx;
	  width: 100%;
	  display: flex;
	}
	.floor-img-box {
	  display: flex;
	  padding-left: 10rpx;
	}
	.right-img-box {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	}
</style>
