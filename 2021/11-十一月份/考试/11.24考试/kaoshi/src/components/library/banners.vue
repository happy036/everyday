<template>
  <div class="carousel">
    <ul>
      <li class="active" style="background-color: #dd99ff">1</li>
      <li style="background-color: #99c2ff">2</li>
      <li style="background-color: #99ffeb">3</li>
      <li style="background-color: #ffe699">4</li>
      <li style="background-color: #ff99c2">5</li>
    </ul>
    <div class="points">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "banners",
  setup() {
    const contents = [1, 2, 3, 4, 5];
    const colors = ["#dd99ff", "#99c2ff", "#99ffeb", "#ffe699", "#ff99c2"];
    return { contents, colors };
  },
}
</script>

<style scoped>
.carousel {
  width: 600px;
  height: 300px;
  margin: 20px auto 0 auto;
  position: relative;
}
.carousel ul {
  position: relative;
  height: 300px;
}
.carousel ul li {
  height: 300px;
  width: 600px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0;
}
.carousel ul li.active {
  z-index: 2;
  opacity: 1;
}
.carousel .points {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
  z-index: 3;
}

.carousel .points span {
  width: 10px;
  height: 10px;
  background-color: #333;
  display: inline-block;
  margin: 0 4px;
  border-radius: 6px;
  cursor: pointer;
}
.carousel .points span.active {
  background: #fff;
}
</style>