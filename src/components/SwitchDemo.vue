<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Switch 开关</h1>
      <p>开关选择器。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要在两种状态之间切换时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Switch1Demo from "./switch/Switch1.demo.vue"
import Switch2Demo from "./switch/Switch2.demo.vue"
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