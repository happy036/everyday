import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()

// 封装uni的网络请求
//导入包
import { $http } from '@escook/request-miniprogram'
//把包挂载到uni这个顶级对象上
uni.$http=$http
//设置基准地址
$http.baseUrl="https://www.uinav.com"
//设置请求拦截器
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
}
//设置响应拦截器
$http.afterRequest = function () {
  setTimeout(function(){
		uni.hideLoading()
	},2000)
}
//定义提示信息的方法
uni.$toast=function(title='获取数据失败',duration=1500){
	uni.showToast({
		title:title,
		duration:duration,
		icon:"none"
	})
}
