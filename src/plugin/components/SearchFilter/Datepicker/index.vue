<template>
  <div class="myDatepicker">
    <el-date-picker
      :style="selfStyle"
      :type="type"
      :editable="editable"
      :clearable="clearable"
      v-model.lazy="childModel"
      :format="format"
      unlink-panels
      :value-format="valueFormat"
      :disabled="disabled"
      :picker-options="pickerOptions"
      placeholder="请选择日期"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="change(childModel)"
      class="el-form-item-all-input"
    >
    </el-date-picker>
  </div>
</template>

<script>

export default {
  name: 'myDatepicker',
  props: {
    // 当前组件绑定值
    model: {
      type: [String, Array],
      require: true
    },
    // 样式
    selfStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    // 显示类型 year/month/date/dates/ week/datetime/datetimerange/daterange
    type: {
      type: String,
      default () {
        return 'date'
      }
    },
    // 文本框是否可输入
    editable: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 显示在输入框中的格式
    format: {
      type: String,
      default () {
        // return 'yyyy 年 MM 月 dd 日 HH 小时 mm 分 ss 秒';
      }
    },
    // 可选，绑定值的格式。不指定则绑定值为 Date 对象
    valueFormat: {
      type: String,
      default () {
        // return 'yyyy-MM-dd HH:mm:ss';
        return 'yyyy-MM-dd'
      }
    },
    // 禁用
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 当前时间日期选择器特有的选项参考下表
    pickerOptions: {
      type: Object,
      default () {
        // if (this.type === 'datetimerange' || this.type === 'daterange') {
        //   return {
        //     shortcuts: [{
        //       text: '最近一周',
        //       onClick (picker) {
        //         const end = new Date()
        //         const start = new Date()
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        //         picker.$emit('pick', [start, end])
        //       }
        //     }, {
        //       text: '最近一个月',
        //       onClick (picker) {
        //         const end = new Date()
        //         const start = new Date()
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        //         picker.$emit('pick', [start, end])
        //       }
        //     }, {
        //       text: '最近三个月',
        //       onClick (picker) {
        //         const end = new Date()
        //         const start = new Date()
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        //         picker.$emit('pick', [start, end])
        //       }
        //     }],
        //     disabledDate (time) {
        //       const lastYear = new Date().getTime() - 3600 * 1000 * 24 * 365
        //       return time.getTime() > Date.now() || time < lastYear
        //     }
        //   }
        // } else {
        //   return {}
        // }
        return {}
      }
    },
    // 当前组件change改变方法
    change: {
      type: Function,
      default (val) {

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
  methods: {
  }
}
</script>

<style lang="scss">
</style>
