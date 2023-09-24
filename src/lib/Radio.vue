<template>
  <div class="bugar-radio">
    <label class="bugar-radio-item" :class="{ 'radio-disabled': item.disabled }" v-for="(item, index) in options"
      :key="item.value" @click="handleRadioClick(index)">
      <span class="bugar-radio-icon" :class="{ 'bugar-radio-checked': refIndex === index }"></span>
      <span class="bugar-radio-text">
        {{ item.label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array as PropType<{ label: string; value: number; disabled?: boolean }[]>,
    default: () => []
  },
  radioIndex: {
    type: Number,
    default: 0
  }
})

const refIndex = ref(props.radioIndex)

const emit = defineEmits(['change:index'])
const handleRadioClick = (index: number) => {
  const item = props.options[index]
  if (!item.disabled) {
    refIndex.value = index
    emit('change:index', index)
  }
}
</script>

<style lang="scss">
.bugar-radio {
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 22px;

  .bugar-radio-item {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &:hover .bugar-radio-icon {
      border-color: #1c4163;
    }

    &.radio-disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.15);

      .bugar-radio-icon {
        border-color: rgba(0, 0, 0, 0.15);
      }

      &:hover .bugar-radio-icon {
        border-color: rgba(0, 0, 0, 0.15);
      }
    }

    .bugar-radio-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid;
      border-color: rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      position: relative;

      &::after {
        content: '';
        width: 10px;
        height: 10px;
        background-color: #1c4163;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      }

      &.bugar-radio-checked {
        border-color: #1c4163;

        &::after {
          opacity: 1;
        }
      }
    }
  }

  .bugar-radio-text {
    padding: 0 8px;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
}
</style>