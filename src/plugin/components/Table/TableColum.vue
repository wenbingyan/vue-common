<template>

  <el-table-column
    :align="align"
    :header-align="headerAlign"
    :label="column.titleName"
    :min-width="column.minWidth"
    :prop="column.fieldName"
    :resizable="resizable"
    :show-overflow-tooltip="false"
    :sortable="column.sortable"
    :width="column.width"
  >

    <!--当存在多级表头时递归渲染组件-->
    <template v-if="Array.isArray(column.children) && column.children.length > 0">
      <table-colum
        :column="item"
        :data="data"
        :key="index"
        v-for="(item, index) in column.children"
      >
      </table-colum>
    </template>

    <!--相关表头数据，包括可以自定义表头-->
    <template slot="header" slot-scope="scope">
      <!--表头插槽-->
      <slot :column="column" :index="scope.$index" :name="column.fieldName  + '_header'" :row="scope.row" :scope="scope"
            v-if="column.header_slot"></slot>
      <!--默认-->
      <div v-else>{{column.titleName}}</div>
    </template>
    <!--相关列数据-->
    <!--没有多级表头/最后一级则正常渲染列数据-->
    <template slot-scope="scope" v-if="!Array.isArray(column.children)">
      <!--对应插槽-->
      <slot :column="column" :index="scope.$index" :name="column.fieldName  + '_body'" :row="scope.row" :scope="scope"
            v-if="column.body_slot"></slot>
      <!--表格列内容渲染 文字-->
      <div v-else>
            {{scope.row[column.fieldName]}}
      </div>
    </template>
  </el-table-column>
</template>

<script>

  export default {
    name: 'TableColum',
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      // 表格对应表头对象
      column: {
        type: Object,
        default () {
          return {}
        }
      },
      // 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
      resizable: {
        type: Boolean,
        default() {
          return true;
        }
      },
      //表格对齐方式 left/center/right
      align: {
        type: String,
        default() {
          return 'center';
        }
      },
      //表头对齐方式 left/center/right
      headerAlign: {
        type: String,
        default() {
          return 'center';
        }
      }
    },
    data () {
      return {}
    },
    created () {
    },
    methods: {}
  }

</script>

<style lang="scss">

</style>
