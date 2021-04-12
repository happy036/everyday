import {mapGetters} from 'vuex'
// 导出一个mixin对象
export default{
	computed:{
		...mapGetters('storeCart',['total'])
	},
	onShow(){
		// 在页面展示的时候,设置数字徽标
		this.setBadge()
	},
	methods:{
		// 为购物车设置右上角的徽标
		setBadge(){
			// 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
			uni.setTabBarBadge({
				index:2,
				text:this.total+''
			})
		},
	}
}