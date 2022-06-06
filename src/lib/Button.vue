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
  props: {
    theme: String
  }
}
</script>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>