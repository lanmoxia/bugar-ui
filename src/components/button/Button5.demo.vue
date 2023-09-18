<demo>
  支持显示加载中
  </demo>
<template>
  <div class="loading-wrapper">
    <Button loading>加载中</Button>
    <Button :loading="loading1" @click="toggleLoading">loading</Button>
    <Button :loading="loading2" @click="onLoading">关闭 loading</Button>
    <Button :loading="loading3" @click="offLoading">开启 loading</Button>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue"
import { Button } from "../../lib/index"
const loading1 = ref(false)
const loading2 = ref(true)
const loading3 = ref(false)
const toggleLoading = () => {
  loading1.value = !loading1.value
}
const onLoading = () => {
  loading2.value = false
}
const offLoading = () => {
  loading3.value = true
}
</script>

<style lang="scss">
.loading-wrapper {
  display: flex;
  align-items: center;
}
</style>