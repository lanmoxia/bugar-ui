<demo>支持响应式</demo>
<template>
  <Row>
    <Col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="12">
    <div class="grid-content highlight">Col</div>
    </Col>
    <Col :xs="6" :sm="2" :md="4" :lg="2" :xl="8" :xxl="2">
    <div class="grid-content dark">Col</div>
    </Col>
    <Col :xs="10" :sm="8" :md="10" :lg="4" :xl="2" :xxl="4">
    <div class="grid-content highlight">Col</div>
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
  width: 100;
}
</style>