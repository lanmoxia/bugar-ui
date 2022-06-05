<template>
  <button @click="toggle" :class="{checked: value}">
    <span></span>
  </button>
  <div>{{value}}</div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean // 这里类型是JS的不是TS的 用大写Boolean
  },
  setup(props, context){
    const toggle = () => {
      // toggle 的作用就是把当前值取反 通过 'xxx' 告诉父组件
      context.emit('xxx', !props.value)
      // 相当于 Vue2 的 this.emit()
    }
    return{toggle: toggle}
  }
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: $h/2;
    position: relative;
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  button.checked {
    background: blue;
  }
  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  button:focus {
    outline: none;
  }
</style>