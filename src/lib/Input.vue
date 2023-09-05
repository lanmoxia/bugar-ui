<template>
  <div class="bugar-input-wrapper">
    <input class="bugar-input" :readonly="readonly" :type="type" :placeholder="placeholder" :value="modelValue"
      @change="onChange" @focus="onFocus" @blur="onBlur" @input="updateValue" />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: "请输入内容"
  }
})

const onChange = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emit('change', targetValue)
}
const onFocus = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emit('focus', targetValue)
}
const onBlur = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emit('blur', targetValue)
}
const updateValue = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emit('update:modelValue', targetValue)
}
</script>

<style lang="scss">
.bugar-input-wrapper {
  .bugar-input {
    font-size: 14px;
    padding: 5px 11px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    color: rgba(0, 0, 0, 0.65);
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
    caret-color: rgba(0, 0, 0, 0.55);

    &::placeholder {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.55);
    }

    &:focus {
      outline: none;
      border-color: rgb(36, 61, 84);

      &::placeholder {
        opacity: 0;
      }
    }

    &:hover {
      border-color: rgb(36, 61, 84);
    }
  }
}
</style>