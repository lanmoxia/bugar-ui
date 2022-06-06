<template>
  <!--这里根元素变成 div 了 事件也就绑定到了 div 上-->
  <div class="red">
    <button>
      <slot/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .red{border: 1px solid red;}
</style>