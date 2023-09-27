<template>
  <div class="bugar-select-wrapper">
    <div class="input-icon-box">
      <Input v-model="refOptions" readonly v-bind="{ placeholder, disabled, iconName, iconSize, iconColor, iconPosition }"
        @click="toggleOptions" />
      <span v-if="isIcon" class="icon-down">
        <SvgIcon :class="{ 'icon-inversion': iconIsUp }" name="down" color="#737373" size="14px"></SvgIcon>
      </span>
    </div>
    <transition name="drawer-fade">
      <ul class="bugar-options" v-show="showOptions">
        <li class="bugar-options-item"
          :class="{ 'bugar-item-disabled': item.disabled, 'option-selected': item.isSelected }"
          v-for="(item, index) in options" :key="index" @click="toggleItem(item)">
          <span>{{ item.label }}</span>
          <span>{{ item.value }}</span>
          <SvgIcon v-if="multiple && item.isSelected" name="selected" color="#1c4163"></SvgIcon>
        </li>
      </ul>
    </transition>
  </div>
</template> 
<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import { Input } from '../lib/index'
type OptionItem = {
  label: string;
  value?: string;
  disabled?: boolean;
  isSelected?: boolean;
}
const props = defineProps({
  options: {
    type: Array as PropType<OptionItem[]>,
    default: () => []
  },
  placeholder: {
    type: String,
    default: "请选择"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isIcon: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: false
  },
  iconName: String,
  iconSize: String,
  iconColor: String,
  iconPosition: String
})
const refOptions = ref()
const showOptions = ref(false)
const iconIsUp = ref(false)

const emit = defineEmits(['selected:option', 'update:value'])

const toggleOptions = () => {
  if (!props.disabled) {
    showOptions.value = !showOptions.value
    iconIsUp.value = !iconIsUp.value
  }
}
const toggleItem = (item: OptionItem) => {
  if (!item.disabled) {
    if (props.multiple) {
      item.isSelected = !item.isSelected
      const selectedLabels = props.options.filter(option => option.isSelected).map(option => option.label)
      const selectedOptions = selectedLabels
      refOptions.value = selectedOptions.join(', ')
      emit('update:value', selectedOptions)
    } else {
      props.options.forEach((option) => {
        option.isSelected = false
      })
      item.isSelected = true
      refOptions.value = item.label
      showOptions.value = false
      iconIsUp.value = false
      emit('selected:option', item.value)
    }
  }
}
watch(() => props.modelValue, (newValue) => {
  if (props.multiple) {
    const selectedOptions = props.options.filter(option => newValue.includes(option.value))
    selectedOptions.forEach(option => {
      option.isSelected = true
    })
    refOptions.value = selectedOptions.map(option => option.label).join(', ')
  } else {
    const selectedOption = props.options.find(option => option.value === newValue[0])
    if (selectedOption) {
      selectedOption.isSelected = true
      refOptions.value = selectedOption.label
    }
  }
})
</script> 

<style lang="scss"> .bugar-select-wrapper {
   position: relative;
   display: inline-block;

   .input-icon-box {
     position: relative;
     display: inline-flex;
     align-items: center;
     cursor: pointer;

     .icon-down {
       position: relative;
       right: 12px;
       top: -2px;
       transition: transform 0.3s ease;

       &.icon-inversion {
         transform: rotate(180deg);
       }
     }
   }

   .bugar-options {
     width: 100%;
     background-color: white;
     position: absolute;
     top: 100%;
     left: 0;
     display: inline-flex;
     flex-direction: column;
     border-radius: 4px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
     z-index: 1;

     .bugar-options-item {
       padding: 5px 12px;
       line-height: 22px;
       color: rgba(0, 0, 0, 0.65);
       cursor: pointer;
       background-color: #fff;
       transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
       white-space: nowrap;
       position: relative;
       display: flex;
       align-items: center;
       display: flex;
       justify-content: space-between;

       &:first-child {
         border-top-left-radius: 4px;
         border-top-right-radius: 4px;
       }

       &:last-child {
         border-bottom-left-radius: 4px;
         border-bottom-right-radius: 4px;
       }

       &:hover:not(.option-selected) {
         background: #1c4163;
         color: white;
       }

       &.bugar-item-disabled {
         color: rgba(0, 0, 0, 0.15);
         cursor: not-allowed;

         &:hover {
           background: none;
           color: rgba(0, 0, 0, 0.15);
         }
       }

       &.option-selected {
         color: #1c4163;
         font-weight: 600;
       }
     }
   }
 }
</style>