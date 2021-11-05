<template>
  <div>
    {{ person.name }}|{{ person.age }}
    <p>{{ name }}</p>
    <button @click="onClick">button</button>
    <!-- <computed /> -->
    <!-- <watch /> -->
    <!-- <watchEffect /> -->
    <!-- <toRef /> -->
    <!-- <toRefs /> -->

    <!-- 父传子 -->
    <Son :name="name" />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import computed from "./components/computed.vue";
import watch from "./components/watch.vue";
import watchEffect from "./components/watchEffect.vue";
import toRef from "./components/toRef.vue";
import toRefs from "./components/toRefs.vue";
import Son from "./components/Son.vue";
export default {
  setup() {
    // ref reactive
    const name = ref("张三");
    const age = ref(20);
    let person = reactive({ name: "王五", age: 1 });
    let newPerson = reactive({ name: "emm", age: 0 });
    const onClick = () => {
      // name.value = "李四";
      // age.value = 30;
      // person.name = "赵六";
      for (let attr in newPerson) {
        person[attr] = newPerson[attr];
      }
      name.value = "五五五五五";
    };
    return {
      name,
      age,
      onClick,
      person,
    };
  },
  components: {
    computed,
    watch,
    watchEffect,
    toRef,
    toRefs,
    Son,
  },
};
</script>

<style>
</style>