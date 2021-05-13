<template>
	<div class="total">
		<span>总价：{{ price }}</span>
		<button>结算</button>
	</div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import "../../types/cc";
export default defineComponent({
	props: {
		productList: {
			type: Array,
			required: true,
		},
	},
	setup(props) {
		// console.log(props);
		const { productList } = props;
		const price = computed(() => {
			let sum = 0;
			productList.forEach((ele: productItem) => {
				sum += ele.num * ele.price;
			});
			return sum;
		});
		return {
			price,
		};
	},
});
</script>

<style>
</style>