<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import Prism from 'prismjs'
import Demo from './Demo.vue';

export default {
  components: {Demo, Button},
  setup(){
    const bool = ref(false)
    return {
      bool, Switch1Demo, Switch2Demo, Prism
    }
  }
}
</script>
