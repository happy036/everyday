// 1. 导入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2. 将Vuex安装为Vue插件
Vue.use(Vuex)

import storeCart from './storeCart.js'
//3. 创建Store的实例对象
const store = new Vuex.Store({
	// 挂载store模块
	modules: {
		storeCart
	}
})

// 4. 向外共享 Store 的实例对象
export default store
