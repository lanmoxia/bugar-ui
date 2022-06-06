<template>
  <!--想要事件或传值到这里的 button 上-->
  <!--② 在 button 上使用 v-bind 穿过来的事件或值是一个对象 $attrs-->
  <div class="red">
    <button v-bind="$attrs">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false // ① 外部的事件或传的值 就不能默认给这里的任何元素绑定事件了
}
</script>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>