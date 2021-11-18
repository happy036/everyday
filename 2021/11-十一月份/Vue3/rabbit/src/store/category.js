import { getCategory } from "@/api/home";
import { topCategories } from "@/api/constants";
export default {
  namespaced: true,
  state() {
    return {
      list: topCategories.map((categoryName) => ({ name: categoryName })),
    };
  },
  mutations: {
    setCategories(state, categorys) {
      state.list = categorys;
      // console.log(state.list);
    },
    // 控制导航下拉菜单的显示
    open(state, id) {
      const index = state.list.findIndex((item) => item.id === id);
      state.list[index].open = true;
    },
    // 控制导航下拉菜单的隐藏
    close(state, id) {
      const index = state.list.findIndex((item) => item.id === id);
      state.list[index].open = false;
    },
  },
  actions: {
    // 获取商品分类数据
    async getCategorys({ commit }) {
      // 发送请求获取数据
      const { result } = await getCategory();
      // console.log(result);
      // 为每一个一级分类数据添加open数据
      result.forEach((category) => (category.open = false));
      // 将数据存储在vuex中
      commit("setCategories", result);
    },
  },
};
