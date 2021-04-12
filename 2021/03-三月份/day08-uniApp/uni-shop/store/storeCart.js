export default {
	namespaced: true,
	state: {
		// 读取本地存储的购物车数据，对 cart 数组进行初始化
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations: {
    addToCart(state,goods){
			//根据提交的商品id，查询购物车中是否存在这件商品
			const findResult=state.cart.find((x)=>x.goods_id==goods.goods_id)
			if(!findResult){
				//如果购物车中没有这件商品，就直接添加
				state.cart.push(goods)
			}else{
				//如果有这件商品，就只更新数量就行了
				findResult.goods_count++
			}
			// 通过commit方法调用saveToStorage方法
			this.commit('storeCart/saveToStorage')
		},
		//将购物车中的数据持久化存储到本地
		saveToStorage(state){
			uni.setStorageSync('cart',JSON.stringify(state.cart) || '[]')
		}
	},
	actions: {},
	getters: {
		// 统计购物车中商品的总数量
		total(state){
			let count=0
			state.cart.forEach(goods=>count+=goods.goods_count)
			return count
		}
	}
}
