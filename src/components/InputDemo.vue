<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Input 输入框</h1>
      <p>用于输入内容的基础表单组件。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要用户输入内容时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Input1Demo" />
    <Demo :component="Input2Demo" />
    <Demo :component="Input3Demo" />
    <Demo :component="Input4Demo" />
  </div>
</template>
  
<script setup lang="ts">
import Demo from "./Demo.vue"
import Input1Demo from "./input/Input1.demo.vue"
import Input2Demo from "./input/Input2.demo.vue"
import Input3Demo from "./input/Input3.demo.vue"
import Input4Demo from "./input/Input4.demo.vue"
</script>
  
<style lang="scss">
.bugar-button-wrapper {
  p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  h1,
  h2 {
    color: #0d1a26;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;
  }

  section {
    padding-bottom: 20px;

    >h1 {
      font-size: 30px;
      line-height: 38px;
    }

    >h2 {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>