# 开始使用

请先<a href="#/doc/install">安装</a>本组件库。

然后在您的代码中写入下面的代码，就可以使用我提供的组件了。
```
import {Button, Tabs, Switch, Dialog} from "bugu-ui"
```

## Vue 单文件组件

代码示例：
```
<template>
 <div>
  <Button>按钮</Button>
 </div>
</template>

<script>
  import {Button, Tabs, Switch, Dialog} from "bugu-ui"
  export default {
    components: {Button}
  }
</script>
```

