<template>
	<div id="box" class="all">
		<div class="ad">
			<ul id="imgs">
				<li style="padding: 0px"><img :src="`/src/images/0${index}.jpg`" /></li>
				<!-- <li><img src="../images/01.jpg" /></li> -->
			</ul>
		</div>
		<!--相框-->
		<div id="focusD">
			<span id="left" @click="handleLeft" v-show="index > 1">&lt;</span
			><span id="right" @click="handleRight" v-show="index < 5">&gt;</span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		let index = ref<number>(1);
		const handleRight = () => {
			index.value++;
		};
		const handleLeft = () => {
			index.value--;
		};
		return {
			index,
			handleRight,
			handleLeft,
		};
	},
});
</script>

<style>
body,
ul,
ol,
li,
img {
	margin: 0;
	padding: 0;
	list-style: none;
}

#box {
	width: 520px;
	height: 280px;
	/* padding: 5px; */
	position: relative;
	/* border: 1px solid #ccc; */
	margin: 100px auto 0;
}

.ad {
	width: 520px;
	height: 280px;
	overflow: hidden;
	position: relative;
}

#box img {
	width: 520px;
}

.ad ol {
	position: absolute;
	right: 10px;
	bottom: 10px;
}

.ad ol li {
	width: 20px;
	height: 20px;
	line-height: 20px;
	border: 1px solid #ccc;
	text-align: center;
	background: #fff;
	float: left;
	margin-right: 10px;
	cursor: pointer;
	_display: inline;
}

.ad ol li.current {
	background: yellow;
}

.ad ul li {
	float: left;
}

.ad ul {
	position: absolute;
	top: 0;
	width: 2940px;
}

.ad ul li.current {
	display: block;
}

#focusD span {
	width: 40px;
	height: 40px;
	position: absolute;
	left: 5px;
	top: 50%;
	margin-top: -20px;
	background: #000;
	cursor: pointer;
	line-height: 40px;
	text-align: center;
	font-weight: bold;
	font-family: "黑体";
	font-size: 30px;
	color: #fff;
	opacity: 0.3;
	border: 1px solid #fff;
}

#focusD #right {
	right: 5px;
	left: auto;
}
/* li:hover {
	border: 0px !important;
} */
</style>