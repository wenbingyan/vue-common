<template>
  <div class="mySelect">
    <el-select 
      :style="selfStyle"
      :clearable="clearable"
      :collapse-tags="collapseTags"
      :disabled="disabled"
      :filterable="filterable"
      :loading="loading"
      :multiple="multiple"
      :no-data-text="noDataText"
      :remote="remote"
      :remote-method="remoteMethod"
      :value-key="valueKey"
      @change="change(childModel,modelKey)"
      @focus="focus(childModel,modelKey)"
      @visible-change="visibleChange(childModel,modelKey,$event)"
      class="el-form-item-all-input"
      :placeholder="placeholder"
      v-model.lazy="childModel"
    >
      <el-option
        :disabled="item.disabled"
        :key="index"
        :label="item[optionsProps.label]"
        :value="item[optionsProps.value]"
        v-for="(item,index) in options"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    // 当前组件绑定值
    model: {
      type: [Array, String, Number, Boolean],
      require: true
    },
    // 当前绑定值key，可以用于formData中获取到当前组件渲染配置items
    modelKey: {
      type: String,
      default () {
        return ''
      }
    },
    // 样式
    selfStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    // 输入框默认占位文本
    placeholder: {
      type: String,
      default () {
        return ''
      }
    },
    // 下拉选项
    options: {
      type: Array,
      require: true
    },
    // 当前下拉选项配置 {label:'显示文本值',value:'当前选项绑定值'}
    optionsProps: {
      type: Object,
      default () {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    // 选项为空时显示的文字
    noDataText: {
      type: String,
      default () {
        return '无数据'
      }
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default () {
        return true
      }
    },
    // 是否可以清空选项
    clearable: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否为远程搜索
    remote: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 作为 value 唯一标识的键名，绑定值为对象类型时必填
    valueKey: {
      type: String,
      default () {
        return 'value'
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否正在从远程获取数据
    loading: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 远程搜索方法
    remoteMethod: {
      type: Function,
      default () {

      }
    },
    // 当input获得焦点时触发
    focus: {
      type: Function,
      default () {
      }
    },
    // 下拉框出现/隐藏时触发
    visibleChange: {
      type: Function,
      default () {
      }
    },
    // 选中值发生变化时触发
    change: {
      type: Function,
      default () {
      }
    }
  },
  data () {
    return {
      childModel: this.model
    }
  },
  watch: {
    childModel (val) {
      this.$emit('update:model', val)
    },
    model (val) {
      if (val !== this.childModel) {
        this.childModel = val
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .el-select {
    display: block;
  }
</style>
