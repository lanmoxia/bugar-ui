<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Grid 栅格</h1>
      <p>24格栅格系统。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>快速实现响应式布局。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Grid1Demo" />
    <Demo :component="Grid2Demo" />
    <Demo :component="Grid3Demo" />
    <Demo :component="Grid4Demo" />
    <Demo :component="Grid5Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Grid1Demo from "./grid/Grid1.demo.vue"
import Grid2Demo from "./grid/Grid2.demo.vue"
import Grid3Demo from "./grid/Grid3.demo.vue"
import Grid4Demo from "./grid/Grid4.demo.vue"
import Grid5Demo from "./grid/Grid5.demo.vue"
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