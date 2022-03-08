<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toggle" :class="{ active: visible }">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <template v-if="cityData">
        <span
          @click="updateSelectedCityData(item)"
          class="ellipsis"
          v-for="item in list"
          :key="item.id"
          >{{ item.name }}</span
        >
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import axios from "axios";

export default {
  name: "XtxCity",
  setup(props, { emit }) {
    // 用于存储城市数据
    const cityData = ref(null);
    // 用于存储用户选择的省市区数据
    // code 用于发送给服务器端
    // name 用于模板展示
    const selectedCityData = reactive({
      provinceCode: "",
      cityCode: "",
      countyCode: "",
      provinceName: "",
      cityName: "",
      countyName: "",
    });

    // 用于记录用户选择的是什么
    const updateSelectedCityData = (item) => {
      // console.log(item);
      // item.level 0省,1市,2县区
      if (item.level === 0) {
        selectedCityData.provinceCode = item.code;
        selectedCityData.provinceName = item.name;
      } else if (item.level === 1) {
        selectedCityData.cityCode = item.code;
        selectedCityData.cityName = item.name;
      } else {
        selectedCityData.countyCode = item.code;
        selectedCityData.countyName = item.name;
      }
    };
    // 替换页面中的省市区数据
    const list = computed(() => {
      // list列表的初始值为省级列表
      let list = cityData.value;
      // 判断用户是否选择了省级数据
      if (selectedCityData.provinceCode) {
        list = list.find(
          (item) => item.code === selectedCityData.provinceCode
        ).areaList;
      }
      // 判断用户是否选择了市级数据
      if (selectedCityData.cityCode) {
        list = list.find(
          (item) => item.code === selectedCityData.cityCode
        ).areaList;
      }
      // 判断用户是否选择了县区级数据
      if (selectedCityData.countyCode) {
        const { provinceCode, cityCode, countyCode } = selectedCityData;
        emit("onCityData", { provinceCode, cityCode, countyCode });
        // 重置省级列表
        list = cityData.value;
        // 隐藏省市区弹框
        hide();
      }
      return list;
    });
    // 控制下拉菜单是否显示
    const visible = ref(false);
    // 用于获取下拉框元素
    const target = ref(null);
    // 显示下拉菜单
    const show = () => {
      visible.value = true;
      // 获取城市数据
      getCityData().then((data) => {
        // 存储城市数据
        cityData.value = data;
      });
    };
    // 隐藏下拉菜单
    const hide = () => {
      visible.value = false;
      // 重置用户选择的省市区数据
      for (let attr in selectedCityData) {
        selectedCityData[attr] = "";
      }
    };
    // 切换下拉菜单的显示和隐藏
    const toggle = () => {
      visible.value ? hide() : show();
    };
    // 在下拉框外面点击时
    onClickOutside(target, () => {
      // 隐藏下拉框
      hide();
    });
    return {
      visible,
      toggle,
      target,
      cityData,
      updateSelectedCityData,
      selectedCityData,
      list,
    };
  },
};
// 在window对象中缓存城市数据
window.cityData = null;
// 获取城市数据
async function getCityData() {
  // 如果window对象中没有城市数据,从window对象中获取城市数据
  if (window.cityData) return window.cityData;
  // 如果window对象中没有城市数据
  let response = await axios.get(
    "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
  );
  // 数据缓存到window
  return (window.cityData = response.data);
}
</script>
<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .loading {
      height: 290px;
      width: 100%;
      background: url(../../assets/images/loading.gif) no-repeat center;
    }
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
