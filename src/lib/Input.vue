<template>
  <label class="bugar-input-wrapper" :class="{ 'disabled': disabled }">
    <span v-if="iconType === 'prefix'" :class="iconClasses">
      <SvgIcon class="svg-icon" :name="iconName" :color="iconColor" iconSize="18px" />
    </span>
    <input class="bugar-input" :class="inputClasses" :disabled="disabled" :readonly="readonly" :type="type"
      :placeholder="placeholder" :value="modelValue" @change="onChange" @focus="onFocus" @blur="onBlur"
      @input="updateValue">
    <span v-if="modelValue && iconType === 'clear' || iconType === 'suffix'" :class="iconClasses" @click="clearIpt">
      <SvgIcon class="svg-icon" :name="iconName" :color="iconColor" :iconSize="iconType === 'clear' ? '22px' : '18px'" />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'


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
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    default: ""
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
const { iconType } = props
const iconColor = computed(() => {
  return {
    'clear': 'gray',
    'suffix': 'rgba(0, 0, 0, 0.25)',
    'prefix': 'rgba(0, 0, 0, 0.25)'
  }[iconType]
})
const iconClasses = computed(() => {
  return {
    'input-prefix-icon': iconType === 'prefix',
    'input-clear-suffix-icon': iconType === 'clear' || iconType === 'suffix'
  }
})
const inputClasses = computed(() => {
  return {
    'input-prefix-padding': iconType === 'prefix',
    'input-suffix-padding': iconType === 'suffix' || iconType === 'clear'
  }
})
const iconName = computed(() => {
  if (iconType === 'clear') {
    return 'clear';
  } else if (iconType === 'prefix') {
    return 'username'
  } else if (iconType === 'suffix') {
    return 'password'
  } else {
    return ''
  }
});
const updateValue = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emit('update:modelValue', targetValue)
}
const clearIpt = () => {
  if (iconType === 'clear') {
    emit('update:modelValue', '')
  }
}
</script>

<style lang="scss">
.bugar-input-wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &.disabled {
    .bugar-input {
      color: rgba(0, 0, 0, 0.25);
      border-color: #d9d9d9;
      background-color: #e6e6e6;
      cursor: not-allowed;

      &:hover {
        border-color: #d9d9d9;
        cursor: not-allowed;
      }
    }
  }

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

    &.input-suffix-padding {
      padding-right: 30px;
    }

    &.input-prefix-padding {
      padding-left: 30px;
    }

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

  .input-clear-suffix-icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
  }

  .input-prefix-icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
  }

  /* 针对不同浏览器可能需要添加浏览器前缀 */
  input[type="password"]::-webkit-contacts-auto-fill-button,
  input[type="password"]::-webkit-credentials-auto-fill-button {
    display: none;
  }

  /* 火狐浏览器 */
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }
}
</style>