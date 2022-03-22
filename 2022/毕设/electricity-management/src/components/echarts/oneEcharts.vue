<template>
  <div id="myEcharts" style="width: 800px; height: 500px"></div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("myEcharts"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "mobile"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120],
          },
          {
            name: "mobile",
            type: "line",
            stack: "Total",
            data: [50, 100],
          },
        ],
      });
    });
  },
};
</script>

<style scoped></style>
