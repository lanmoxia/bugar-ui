<template>
  <div class="demo">
    <h2>{{component['__sourceCodeTitle']}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
    <!--<Button @click="codeVisible = !codeVisible">查看代码</Button>-->
      <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-css" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import {computed, ref} from 'vue';
import Button from '../lib/Button.vue';
export default {
  components: {Button},
  props: {
    component: Object
  },
  setup(props){
    const html = computed(() => {
      return Prism.highlight(props.component['__sourceCode'],
          Prism.languages['html'],
          'html')
    })
    const hideCode = () => {
      codeVisible.value = false
    }
    const showCode = () => {
      codeVisible.value = true
    }
    const codeVisible = ref(false)
    return {Prism, html, codeVisible, showCode, hideCode}

  }
}
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
