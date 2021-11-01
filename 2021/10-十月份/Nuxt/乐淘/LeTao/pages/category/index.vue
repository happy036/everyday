<template>
  <div>
    <van-tree-select
      height="80vh"
      :items="oneCategory"
      :main-active-index.sync="active"
      @click-nav="categoryHandle"
    >
      <!-- 二级分类 -->
      <template #content>
        <div
          class="category_sencond"
          v-for="item in twoCategory"
          :key="item.id"
        >
          <van-image width="4rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },
  methods: {
    async categoryHandle(index) {
      let { twoCategory } = await this.$api.twoCategory(
        this.oneCategory[index]["id"]
      );
      this.twoCategory = twoCategory;
    },
  },
  async asyncData({ $api }) {
    let active = 0;
    let { oneCategory } = await $api.oneCategory();
    oneCategory = oneCategory.map((item) => {
      return {
        text: item.categoryName,
        ...item,
      };
    });
    // 加载二级分类
    const { twoCategory } = await $api.twoCategory(oneCategory[active]["id"]);
    // console.log(twoCategory);
    return {
      // active,
      oneCategory,
      twoCategory,
    };
  },
};
</script>

<style>
.category_sencond {
  float: left;
  text-align: center;
}
</style>