<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>pager 分页</h1>
      <p>分隔长列表，展示单个页面。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>加载/渲染所有数据开销较大时，每次只加载/渲染单个页面。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Page1Demo" />
    <Demo :component="Page2Demo" />
    <Demo :component="Page3Demo" />
    <Demo :component="Page4Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Page1Demo from "./page/Page1.demo.vue"
import Page2Demo from "./page/Page2.demo.vue"
import Page3Demo from "./page/Page3.demo.vue"
import Page4Demo from "./page/Page4.demo.vue"
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