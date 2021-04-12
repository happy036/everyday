<template>
	<view >
		<!-- 头像部分 -->
		<view class="top">
			<image src="../../static/picture/nahateaile.png" mode=""></image>
			<view class="head">
				<view class="photo">
					<image class="photo-one" src="/static/picture/nahatenahte.png" mode=""></image>
				</view>
				<text class="login">点击头像登陆</text>
			</view>
			<view class="level">
				Lv0
			</view>
			<view class="top-one"></view>
			<!-- 听过 -->
			<view class="listen">
				<view class="list">
					<text>听过</text>
					<text>歌单</text>
					<text>关注</text>
					<text>粉丝</text>
				</view>
				<!-- 排行 -->
				<view class="like">
					<view class="like-one">
						<image src="../../static/icon/ranklist.png" mode=""></image>
					</view>
					<text>听歌排行</text>
				</view>
				<view class="like">
					<view class="like-one">
						<image src="../../static/icon/love.png" mode=""></image>
					</view>
					<text>听歌排行</text>
				</view>
				<!-- 歌单 -->
				<view class="aaa">
					我的歌单
				</view>
				<text class="bbb">暂无歌单</text>
				<view class="aaa">
					收藏歌单
				</view>
				<text class="bbb">暂无歌单</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/* .top{
	background-image:url(../../static/picture/nahateaile.png);
} */
image{
	width: 100%;
}
.top{
	position: relative;
	height: 240px;
}
.top-one{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(255, 255, 255,0.5) ;
	height: 100%;
	z-index: 2;
}
.head{
	position: absolute;
	top: 52px;
	right: 158px;
	width: 72px;
	height: 72px;
	background-color: rgba(255, 255, 255,0.7);
	border-radius: 50%;
	z-index: 3;
	text-align: center;
}
.photo-one{
	width: 66px;
	height: 66px;
	border-radius: 50%;
		margin-top: 3px;
}
.login{
	font-size: 12px;
}
.level{
	position: absolute;
	top: 148px;
	left: 161px;
	z-index: 4;
	width: 36px;
	height: 18px;
	background-color: #898888;
	border-radius: 20px;
	color: #bfbebe;
	text-align: center;
	line-height: 18px;
	font-size: small;
}
.listen{
	position: relative;
	width: 100%;
	height: 500px;
	z-index: 20;
	left: 0;
	bottom: 66px;
	background-color: #FFFFFF;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
}
.list{
	padding-top: 40px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e9ebec;
}
.list text{
	float: left;
	width: 25%;
	text-align: center;
	font-size: 12px;
	color: #808080;
}
.like{
	margin-top: 20px;
	margin-left: 20px;
	overflow: hidden;
}
.like-one{
	width: 35px;
	height: 35px;
	background-color: #f4f5f5;
	border-radius: 5px;
	float: left;
	}
.like-one image{
	width: 30px;
	height: 30px;
}
.like text{
	font-size: 14px;
	float: left;
	margin-left: 10px;
}
.aaa{
	font-size: 14px;
	width: 100%;
	border-bottom: 1px solid #e9ebec;
	margin-top: 40px;
	padding-left: 20px;
}
.bbb{
	font-size: 12px;
	margin-top: 40px;
	margin-left: 20px;
}
</style>
