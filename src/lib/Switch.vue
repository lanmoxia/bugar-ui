<template>
  <button @click="toggle" :class="{checked: value}">
    <span></span>
  </button>
  <div>{{value}}</div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean, // 这里类型是JS的不是TS的 用大写Boolean
    xxx: String
  },
  setup(props, context){
    const toggle = () => {
      // 这里的事件名规则：
      // update: 这里必须是 props 中对应的属性名 也就是 'update:value'
      // 比如 props 还接受一个 xxx 这里触发事件就是 'update:xxx'
      context.emit('update:value', !props.value)
      context.emit('update:xxx', 'newValue')
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