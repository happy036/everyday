export default ({ $request }, inject) => {
    inject('api', {
        /**
         * 首页轮播图接口
         * @returns
         */
        IndexBanners() {
            return $request.$get('/banners')
        },
        /**
         * 获取首页宫格数据
         * @returns 
         */
        IndexGridList() {
            return $request.$get('/gridlist');
        },

        /**
         * 获取首页运动专区数据
         * @returns 
         */
        IndexSport() {
            return $request.$get('/sports');
        },
        /**
         * 获取一级分类
         * @returns
         */
        oneCategory() {
            return $request.$get('/oneCategory')
        },
        /**
         * 获取二级分类
         * @returns
         */
        twoCategory(categoryId) {
            return $request.$get(`/twoCategory?id=${categoryId}`)
        },
        /**
         * 登录
         * @params {Object} data 登录请求参数对象
         * @returns
         */
        Login(data) {
            return $request.$post('/users/login', data)
        }
    })
}