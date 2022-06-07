<template>
  <div>Tabs 示例文档</div>
  <h1>示例1</h1>
  <!--<Tab>-->
  <!--这里注释也必须用 Tab 标签 不然会报错-->

  <!--永远不推荐用 index: 新增减少 Tab 会出现问题-->
  <!--图方便可以用 title： 有漏洞 title 相同就不行了-->
  <!--严谨可以用 name: 不方便 用户不一定知道要加 name -->

  <!--</Tab>-->
  <!--<Tab>-->

  <!--②使用下标 index 来表示当前选中项：<Tabs :selected="0/1">-->
  <!--③使用 name 来表示当前选中项：<Tabs :selected="tab1/tab2">-->
  <!--④直接使用 title 来表示当前选中项：<Tabs :selected="导航1/导航2">-->

  <!--</Tab>-->
  <Tabs>
    <!--<Tab>-->

    <!--①直接在当前元素添加 selected：<Tab title="导航1" selected>内容1</Tab>-->
    <!--③加 name：<Tab name="tab1" title="导航1">内容1</Tab>-->
    <!--③加 name：<Tab name="tab2" title="导航2">内容1</Tab>-->
    <!--④直接使用 title 分辨：<Tab title="导航1">内容1</Tab>-->

    <!--</Tab>-->
    <Tab title="导航1">内容1</Tab>
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