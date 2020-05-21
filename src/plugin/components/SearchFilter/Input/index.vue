<template>
  <div class="bInput">
    <el-input 
      :style="selfStyle"
      :autosize="autosize"
      :clearable="clearable"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :resize="resize"
      :rows="rows"
      :tabindex="tabindex"
      :type="type"
      @blur="blur(childModel,modelKey)"
      @keydown.enter.native="keydownEnter($event,$refs.bInput)"
      ref="bInput"
      v-model.trim="childModel"
    >
      <slot :slot="slotType" name="inputSlot"></slot>
    </el-input>
  </div>
</template>

<script>

  export default {
    name: 'bInput',
    model: {},
    props: {
      // 输入框类型text，textarea 和其他 原生 input 的 type 值
      type: {
        type: String,
        default () {
          return 'text'
        }
      },
      // 样式
      selfStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      // 当前组件绑定值
      model: {
        type: [String, Number],
        require: true
      },
      // 当前绑定值key，可以用于formData中获取到当前组件渲染配置items
      modelKey: {
        type: String,
        default () {
          return ''
        }
      },
      // 是否可清空
      clearable: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 输入框默认占位文本
      placeholder: {
        type: String,
        default () {
          return ''
        }
      },
      //最小限制值
      limitMin: {
        type: Number,
        default() {
          return null;
        }
      },
      //最大限制值
      limitMax: {
        type: Number,
        default() {
          return null;
        }
      },
      // 保留小数位
      toFixed: {
        type: Number,
        default () {
          return 0
        }
      },
      // 键盘回车事件
      keydownEnter: {
        type: Function,
        default () {
        }
      },
      // 失去焦点
      blur: {
        type: Function,
        default () {
        }
      },
      // 当前tab的值 用于tab键控制切换顺序
      tabindex: {
        type: String
      },
      // 输入框行数，只对 type="textarea" 有效
      rows: {
        type: Number,
        default () {
          return 2
        }
      },
      // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
      autosize: {
        type: [Object, Boolean],
        default () {
          return {minRows: 4}
        }
      },
      // 控制是否能被用户缩放 none, both, horizontal, vertical
      resize: {
        type: String,
        default () {
          return 'none'
        }
      },
      // 是否只读
      readonly: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 当前组件slot插槽类型prefix、suffix、prepend、append
      slotType: {
        type: String,
        default () {
          return ''
        }
      },
      // 禁用
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
      childModel(val) {
        this.$emit('update:model', val);
      },
      model(val) {
        this.childModel = val;
        this.$emit('update:model', val);
      }
    },
    created () {
    },
    methods: {
      emitModel (val) {
        this.$emit('update:model', val)
      }
    }
  }
</script>

<style lang="scss">
</style>
