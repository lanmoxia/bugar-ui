<template>
  <!--这样传过来的值绑定了到 div 上-->
  <!--剩余的两个事件绑定到了 button 上-->
  <div class="red" :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context){
    const {attrs} = context; // 从 context 得到 attrs
    const {size, ...rest} = attrs // size 取出来 剩余的都放到 rest 上
    return {size, rest}
  }
}
</script>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>