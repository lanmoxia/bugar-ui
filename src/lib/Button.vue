<template>
  <div>
    <!--共有类名和动态类名-->
    <button class="gugu-button" :class="`theme-${theme}`">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  // 这样设置默认值 可以解决第一个 button 是 theme-undefined 的问题
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>