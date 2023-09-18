<template>
  <button class="bugar-button" :class="classes" :disabled="disabled" @click="handleClick">
    <span v-show="loading" class="bugar-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click', props.loading)
}
const props = defineProps({
  theme: {
    type: String,
    default: 'button'
  },
  size: {
    type: String,
    default: 'normal'
  },
  level: {
    type: String,
    default: 'normal'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const { theme, size, level } = props
const classes = computed(() => {
  return {
    [`bugar-theme-${theme}`]: theme,
    [`bugar-size-${size}`]: size,
    [`bugar-level-${level}`]: level,
    [`bugar-disabled-${props.disabled}`]: props.disabled,
    [`bugar-loading-${props.loading}`]: props.loading
  }
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: rgba(0, 0, 0, 0.65);
$blue: rgb(36, 61, 84);
$radius: 4px;
$red: red;
$gray: gray;
$disabledColor: rgba(0, 0, 0, 0.25);

.bugar-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 10px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &+& {
    margin-left: 8px;
  }

  &:hover {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.bugar-theme-nofocus {
    &:hover {
      color: $blue;
      border-color: $blue;
    }

    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;
      border-color: $disabledColor;
      box-shadow: none;
    }
  }

  &.bugar-theme-border {
    border-color: transparent;
    box-shadow: none;

    &:hover {
      color: $blue;
      border-color: $blue;
    }

    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;
      border-color: $disabledColor;
      box-shadow: none;
    }
  }

  &.bugar-theme-button {
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &.bugar-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.bugar-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;
      border-color: $disabledColor;
      box-shadow: none;
    }
  }

  &.bugar-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 20%);
    }

    &.bugar-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.bugar-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: $color;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }

    &.bugar-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.bugar-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.bugar-theme-link,
  &.bugar-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;

      &:hover {
        background: none;
      }
    }
  }

  &.bugar-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.bugar-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  >.bugar-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: bugar-spin 1s infinite linear;
  }
}

@keyframes bugar-spin {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>
