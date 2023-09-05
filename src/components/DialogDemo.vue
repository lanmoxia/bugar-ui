<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Dialog 对话框</h1>
      <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Dialog1Demo from "./dialog/Dialog1.demo.vue"
import Dialog2Demo from "./dialog/Dialog2.demo.vue"
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