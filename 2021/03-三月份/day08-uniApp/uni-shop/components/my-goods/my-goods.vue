<template>
	<view>
		<!-- 商品左侧图片区域 -->
		<view class="goods-item-left">
			<radio :checked='goods.goods_state' color="#C00000" v-if="showRadio"></radio>
			<image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-goods",
		data() {
			return {

			};
		},
		// 定义 props 属性，用来接收外界传递到当前组件的数据
		props: {
			// 商品的信息对象
			goods: {
				type: Object,
				default: {},
			},
			// 是否展示图片左侧的 radio
			showRadio: {
				type: Boolean,
				// 如果外界没有指定 show-radio 属性的值，则默认不展示 radio 组件
				default: false,
			},
		},
	}
</script>

<style lang="scss">
	.goods-item-left {
		margin-right: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.goods-pic {
			width: 100px;
			height: 100px;
			display: block;
		}
	}
</style>
