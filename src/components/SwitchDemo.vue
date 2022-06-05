<template>
  <div>
    <!--这种父子通讯可以使用V3升级后的 v-model-->
    <!--监听绑定一个变量 实现双向绑定-->
    <Switch v-model:value="y"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup(){
    const y = ref(false) // 定义变量并设置默认值
    return{y:y}
  }
};
</script>