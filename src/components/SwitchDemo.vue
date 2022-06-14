<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
<!--        <pre>{{Switch1Demo['__sourceCode']}}</pre> 两种方法-->
        <pre v-text="Switch1Demo['__sourceCode']"></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>
          {{Switch2Demo['__sourceCode']}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'

// Switch1Demo/Switch2Demo 在 template 标签外部 添加 demo 标签随便加些内容
// 使用 vue-loader 的 Custom Blocks 功能 详情见 vite.config.js 按提示安装相关依赖
// 最后在 pre 标签内通过 v-text 或 {{}} 展示源码
// pre 标签使用 {{}} 展示源码 不能回车 中间不能有空行 否装 trim() 无效
// 通过 logo 可以查看控制台源码
console.log(Switch1Demo)
console.log(Switch1Demo['__sourceCode']);
export default {
  components: {Switch1Demo, Switch2Demo, Switch, Button},
  setup(){
    const bool = ref(false)
    return {
      bool, Switch1Demo, Switch2Demo
    }
  }
}
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      letter-spacing: 1px;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>