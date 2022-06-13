<template>
  <article class="markdown-body" v-html="md">
  </article>
  <Markdown path="../markdown/intro.md"/>
</template>

<script lang="js">
import Markdown from '../components/Marked.vue'
import md from '../markdown/intro.md'
export default {
  components: {Markdown},
  data(){
    return {md}
  }
}
</script>