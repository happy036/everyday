<template>
  <ul class="app-header-nav">
    <!--  导航抽离组件-->
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="topCategory in category.list"
      :key="topCategory.id"
      @mouseenter="open(topCategory.id)"
      @mouseleave="close(topCategory.id)"
    >
      <router-link :to="`/category/${topCategory.id}`">{{
        topCategory.name
      }}</router-link>
      <div class="layer" :class="{ open: topCategory.open }">
        <ul>
          <li v-for="subCategory in topCategory.children" :key="subCategory.id">
            <router-link :to="`/category/two/${subCategory.id}`">
              <img :src="subCategory.picture" :alt="subCategory.name" />
              <p>{{ subCategory.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "AppHeaderNav",
  setup() {
    const store = useStore();
    // 获取分类数据
    const category = store.state.category;
    // console.log(category.list);
    // 控制导航菜单的下拉显示
    const open = (id) => store.commit("category/open", id);
    // 控制导航菜单的隐藏
    const close = (id) => store.commit("category/close", id);
    return {
      category,
      open,
      close,
    };
  },
};
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    .layer {
      width: 1240px;
      background-color: #fff;
      position: absolute;
      left: -200px;
      top: 56px;
      height: 0;
      overflow: hidden;
      opacity: 0;
      box-shadow: 0 0 5px #ccc;
      transition: all 0.2s 0.1s;
      &.open {
        height: 132px;
        opacity: 1;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 132px;
        li {
          width: 110px;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            padding-top: 10px;
          }
          &:hover {
            p {
              color: @xtxColor;
            }
          }
        }
      }
    }
  }
}
</style>
