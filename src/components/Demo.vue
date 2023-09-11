<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="html"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs'
import { onMounted, ref } from 'vue'
import Button from '../lib/Button.vue'

const props = defineProps({
  component: {
    type: Object,
    required: false,
    default: () => { }
  }
})
const html = ref("")
const compTitle = ref("")
onMounted(() => {
  if (props.component) {
    createHtml(props.component)
  }
})
const createHtml = (comp: any) => {
  compTitle.value = comp.__sourceCodeTitle
  html.value = Prism.highlight(comp.__sourceCode, Prism.languages.html, "html")
}
const hideCode = () => {
  codeVisible.value = false
}
const showCode = () => {
  codeVisible.value = true
}
const codeVisible = ref(false)
</script>

<style lang="scss">
@import 'prismjs/themes/prism-okaidia.css';
</style>

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
    padding: 0 0 16px 16px;
    display: inline-flex;
    flex-direction: column;
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
