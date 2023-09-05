<template>
  <div class="bugar-button-wrapper">
    <section>
      <h1>Button 按钮</h1>
      <p>点击以开始即时操作。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>响应用户点击行为，触发相应业务逻辑。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script setup lang="ts">
import Demo from "./Demo.vue"
import Button1Demo from "./button/Button1.demo.vue"
import Button2Demo from "./button/Button2.demo.vue"
import Button3Demo from "./button/Button3.demo.vue"
import Button4Demo from "./button/Button4.demo.vue"
import Button5Demo from "./button/Button5.demo.vue"
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