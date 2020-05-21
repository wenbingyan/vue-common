<template>
  <div class="bCheckbox">
    <el-checkbox-group 
      :style="selfStyle"
      @change="change(childModel)"
      v-model.lazy="childModel"
    >
      <el-row :gutter="20">
        <el-col :key="index" :span="item.span || span" v-for="(item,index) in options">
          <el-checkbox
            :disabled="item.disabled || disabled"
            :false-label="falseLabel"
            :indeterminate="indeterminate"
            :label="item[optionsProps.value]"
            :true-label="trueLabel"
          >
            <span>{{item[optionsProps.label]}}</span>
          </el-checkbox>
        </el-col>
      </el-row>
    </el-checkbox-group>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    // 当前组件绑定值
    model: {
      type: [String, Number, Boolean, Array],
      require: true
    },
    // 样式
    selfStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    // 选中时的值
    trueLabel: {
      type: [String, Number]
    },
    // 没有选中时的值
    falseLabel: {
      type: [String, Number]
    },
    // 当前选项配置 {label:'显示文本值',value:'当前选项绑定值'}
    optionsProps: {
      type: Object,
      default () {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    // 当前选项，多个多选框
    options: {
      type: Array,
      require: true
    },
    // 设置 indeterminate 状态，只负责样式控制
    indeterminate: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 每个多选框所占栅格比例
    span: {
      type: Number,
      default () {
        return 12
      }
    },
    // 当前组件change改变方法
    change: {
      type: Function,
      default (val) {

      }
    },
    // 当前组件是否禁用
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      childModel: this.model
    }
  },
  watch: {
    childModel: function (val) {
      this.$emit('update:model', val)
    },
    model (val) {
      if (val !== this.childModel) {
        this.childModel = val
      }
    }
  },
  methods: {}
}
</script>
