<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Radio 单选框</h1>
      <p>单选框。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要在多个备选项中选择单个状态时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Radio1Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Radio1Demo from "./radio/Radio1.demo.vue"
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