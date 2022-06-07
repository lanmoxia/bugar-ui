<template>
    <div>Tabs 示例文档</div>
    <h1>示例1</h1>
    <Tabs>
      <!--这里使用非 Tab 就会报错-->
      <div title="导航1">内容1</div>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>
<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {Tab, Tabs}
}
</script>