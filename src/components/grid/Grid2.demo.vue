<demo>支持 flex 布局</demo>
<template>
  <Row justify="space-between">
    <Col :span="8">
    <div class="grid-content dark">Col-8</div>
    </Col>
    <Col :span="7">
    <div class="grid-content dark">Col-7</div>
    </Col>
    <Col :span="8">
    <div class="grid-content dark">Col-8</div>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from '../../lib/index'
</script>

<style lang="scss">
$bgColor: #d7e5f1;

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;

  &.highlight {
    background-color: $bgColor;
  }

  &.dark {
    background-color: darken($bgColor, 10);
  }
}

.bugar-row {
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
}

.bugar-col {
  border-radius: 4px;
}
</style>