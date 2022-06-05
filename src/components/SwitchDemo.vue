<template>
  <div>
    <!--绑定默认值，并接收子组件传来的更新值-->
    <!--$emit() 又两个参数，第一个是事件，第二个是包含事件的信息，也就是 $event-->
    <Switch :value="y" @xxx=" y = $event"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
// 父组件这里使用 Switch 小件，如果想修改默认值
// 首先父组件定义变量设置变量及默认值 并绑定默认变量
// 子组件接收 props 通过触发事件
// 父组件通过 $event 接收更新值并在传回子组件
// 子组件再次通过 props 拿到更新值
export default {
  components: {Switch},
  setup(){
    const y = ref(false) // 定义变量并设置默认值
    return{y:y}
  }
};
</script>