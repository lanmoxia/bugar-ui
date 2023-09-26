<template>
  <div class="bugar-input-layout">
    <textarea v-if="inputType === 'textarea'" :placeholder="placeholder" class="bugar-textarea"
      :class="{ 'textarea-auto-size': autoSize }" @input="handleInput"></textarea>
    <label v-else class="bugar-input-wrapper" :class="{ 'disabled': disabled }">
      <span v-if="showIcon" :class="iconClasses">
        <SvgIcon :name="iconName" :color="iconColor" :size="iconSize" />
      </span>
      <input class="bugar-input" :class="inputClasses" v-bind="{ disabled, readonly, type, placeholder }"
        :value="modelValue" @change="onChange" @focus="onFocus" @blur="onBlur" @input="onInput" @keyup.enter="search">
      <span v-if="showIcon" :class="iconClasses" @click="handleIconClick">
        <SvgIcon :class="svgClasses" :name="iconName" :color="iconColor" :size="iconSize" />
      </span>
      <button v-show="buttonStyle" class="search-ent-button" @click="handleIconClick">
        {{ searchText }}
      </button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from "../lib/index"

const emit = defineEmits(['update:modelValue', 'onChange', 'onFocus', 'onBlur', 'onSearch', 'onClear'])

const props = defineProps({
  modelValue: [String, Array],
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
  searchText: {
    type: String,
    default: 'Search'
  },
  autoSize: {
    type: Boolean,
    default: false
  },
  iconName: String,
  iconColor: String,
  iconSize: String,
  iconPosition: {
    type: String,
    default: 'iconRight'
  },
  iconHover: {
    type: Boolean,
    default: false
  },
  buttonStyle: {
    type: Boolean,
    default: false
  },
  inputType: {
    type: String,
    default: "input"
  }
})
const { autoSize, iconName, iconColor, iconSize, iconPosition, buttonStyle, iconHover } = props

const showIcon = computed(() => iconName && iconName !== 'clear' || (iconName === 'clear' && props.modelValue))

const svgClasses = computed(() => {
  return {
    'input-search-icon': props.modelValue && iconHover || iconName === 'clear'
  }
})

const iconClasses = computed(() => {
  return {
    'input-icon-left': iconPosition === 'iconLeft',
    'input-icon-right': iconPosition === 'iconRight'
  }
})

const inputClasses = computed(() => {
  return {
    'input-left-padding': iconName && iconPosition === 'iconLeft',
    'input-right-padding': iconName && iconPosition === 'iconRight'
  }
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  if (autoSize) {
    target.style.height = "auto"
    target.style.height = `${target.scrollHeight}px`
  }
}

const onInput = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  if (targetValue !== props.modelValue) {
    emit('update:modelValue', targetValue)
  }
}

const onChange = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  if (targetValue !== props.modelValue) {
    emit('onChange', targetValue)
  }
}

const onFocus = () => {
  emit('onFocus')
}

const onBlur = () => {
  emit('onBlur')
}

const handleIconClick = () => {
  if (iconName === 'clear') {
    if (props.modelValue) {
      emit('update:modelValue', '')
      emit('onClear')
    }
  } else if (iconName === 'search' || buttonStyle) {
    search()
  }
}

const search = () => {
  if (iconName === 'search' || buttonStyle) {
    emit('onSearch', props.modelValue)
  }
}
</script>

<style lang="scss">
.bugar-input-layout {
  display: inline-flex;
  margin-bottom: 8px;

  .bugar-textarea {
    padding: 4px 11px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.15);
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 4px;
    caret-color: rgba(0, 0, 0, 0.55);

    &:focus {
      outline: none;
    }

    &:hover {
      border-color: rgb(36, 61, 84)
    }

    &.textarea-auto-size {
      resize: none;
      overflow-y: hidden;
    }
  }

  .bugar-input-wrapper {
    display: inline-flex;
    align-items: center;
    position: relative;

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

    .search-ent-button {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(100% - 3px);
      z-index: 1;
      padding: 0 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      background: rgb(36, 61, 84);
      color: white;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: none;
      transition: background 250ms;

      &:hover {
        background: lighten(rgb(36, 61, 84), 6%);
        transition: background 0.5s ease-in-out;
      }
    }

    .bugar-input {
      padding: 5px 11px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      color: rgba(0, 0, 0, 0.65);
      white-space: nowrap;
      overflow: visible;
      text-overflow: ellipsis;
      caret-color: rgba(0, 0, 0, 0.55);

      &.input-right-padding {
        padding-right: 30px;
      }

      &.input-left-padding {
        padding-left: 30px;
      }

      &::placeholder {
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

    .input-icon-right {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);

      .input-search-icon:hover use {
        color: #1c4163;
        transition: color 0.5s ease-in-out;
      }
    }

    .input-icon-left {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-50%);
    }



    /* 隐藏 input 眼睛开关 */

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
}
</style>