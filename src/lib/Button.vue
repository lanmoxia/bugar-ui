<template>
  <div>
    <!--第二种解决办法使用 :class="{[`theme-${theme}`]: theme}"-->
    <!--如果 ${theme} 不存在就不用显示了-->
    <button class="gugu-button"
            :class="{[`theme-${theme}`]: theme}">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  // 这样设置默认值 可以解决第一个 button 是 theme-undefined 的问题
  props: {
    theme: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>