<template>
  <div class="b-table" ref="b-table">
    <div class="b-table-wrapper">
      <!--表格-->
      <el-table
        :border="border"
        :cell-style="handleCellStyle"
        :data="data"
        :highlight-current-row="type.single"
        :max-height="maxHeight"
        :row-key="rowKey"
        :row-style="handleRowStyle"
        :show-summary="type.showSummary"
        :span-method="handleSpan"
        :stripe="stripe"
        :summary-method="handleSummary"
        :default-expand-all="defaultExpandAll"
        :tree-props="treeProps"
        @current-change="handleCurrentChange"
        @header-click="handleheaderClick"
        @row-click="handleRowClick"
        @row-dblclick="handleRowDblclick"
        @selection-change="handleSelectionChange"
        @sort-change="sortChange"
        height="100%"
        ref="table"
        size="medium"
        v-loading="loading"
      >
        <!--左侧序号等列-->
        
        <!--是否多选-->
        <el-table-column
          :align="align"
          :header-align="headerAlign"
          :resizable="resizable"
          type="selection"
          v-if="type.multi && data && data.length"
          width="55"
        >
        </el-table-column>
        <!--序号-->
        <el-table-column
          :align="align"
          :header-align="headerAlign"
          :resizable="resizable"
          label="序号"
          type="index"
          v-if="type.index && data && data.length"
          width="70"
        >
        </el-table-column>
        <!--左侧序号等列-->

        <!--表格内容-->
        <template v-if="data && data.length">
          <table-colum
            :align="align"
            :column="column"
            :data="data"
            :header-align="headerAlign"
            :key="index"
            :resizable="resizable"
            v-for="(column, index) in columns"
            >
            <template :slot="column.fieldName + '_header'" slot-scope="{scope,index}">
                <slot :column="column" :index="index" :name="column.fieldName  + '_header'" :row="scope.row"
                    :scope="scope"></slot>
            </template>
            <template :slot="column.fieldName + '_body'" slot-scope="{scope,index}">
                <slot :column="column" :index="index" :name="column.fieldName  + '_body'" :row="scope.row"
                    :scope="scope"></slot>
            </template>
          </table-colum>
        </template>

        <!--操作列-->
        <el-table-column
          :align="align"
          :header-align="headerAlign"
          :resizable="resizable"
          :width="editColWidth"
          label="操作"
          v-if="type.operationColumn && data && data.length"
        >
          <template slot-scope="scope">
            <slot :index="scope.$index" :row="scope.row" :scope="scope" name="operationColumn"></slot>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <!--分页-->
    <el-pagination
      :current-page="info.pageNum"
      :page-size="info.pageSize"
      :page-sizes="[10,50,100,150]"
      :total="info.total"
      @current-change="currentChange"
      @size-change="sizeChange"
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      next-text="下一页"
      prev-text="上一页"
      ref="pagination"
      v-if="type.pagination"
    >
    </el-pagination>

  </div>
</template>
<script>

  import TableColum from './TableColum.vue'

  export default {
    name: 'tree-grid',
    components: {TableColum},
    props: {
      // 表格loading状态
      loading: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 这是相应的字段展示，表头
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      // 这是数据源，内容
      dataSource: {
        type: Array,
        default () {
          return []
        }
      },
      // 表格分页相关数据
      info: {
        type: Object,
        default () {
          return {pageNum: 1, pageSize: 10, total: 0}
        }
      },
      // 是否带有纵向边框
      border: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 是否为斑马纹 table
      stripe: {
        type: Boolean,
        default () {
          return false
        }
      },
      // 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
      resizable: {
        type: Boolean,
        default () {
          return true
        }
      },
      // pagination：显示分页，multi：多选，single：单选
      // operationColumn：是否显示操作列
      // showSummary：是否设置表格的合计行
      // index：普通索引
      type: {
        type: Object,
        default () {
          return {
            pagination: true,
            multi: false,
            single: false,
            operationColumn: false,
            showSummary: false
          }
        }
      },
      // Table 的最大高度
      maxHeight: {
        type: [String, Number],
        default () {
          return '100%'
        }
      },
      // 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的
      rowKey: {
        type: [Function, String]
      },
      // 树类型的数据的显示
      treeProps:{
        type: Object,
        default () {
          return {}
        }
      },
      defaultExpandAll:{
        type: Boolean,
        default () {
          return false
        }
      },
      // 单选表格默认选中行
      currentRow: {
        type: Object,
        default () {
          return null
        }
      },
      // 操作列的宽度
      editColWidth: {
        type: Number,
        default () {
          return 260
        }
      },
      // 自定义排序方法回调
      sortChangeFun: {
        type: Function,
        default () {

        }
      },
      //表格对齐方式 left/center/right
      align: {
        type: String,
        default () {
          return 'center'
        }
      },
      //表头对齐方式 left/center/right
      headerAlign: {
        type: String,
        default () {
          return 'center'
        }
      },
      // 行class回调方法
      handleRowClassName: {
        type: Function,
        default ({row, column, rowIndex, columnIndex}) {
        }
      },
      // 列class回调方法
      handleCellClassName: {
        type: Function,
        default ({row, column, rowIndex, columnIndex}) {
        }
      },
      // 行style回调方法
      handleRowStyle: {
        type: Function,
        default ({row, column, rowIndex, columnIndex}) {
        }
      },
      // 列style回调方法
      handleCellStyle: {
        type: Function,
        default ({row, column, rowIndex, columnIndex}) {
        }
      },
      //合并行或列
      handleSpan: {
        type: Function,
        default ({row, column, rowIndex, columnIndex}) {
        }
      },
      //当前行点击
      handleRowClick: {
        type: Function,
        default (row, column, event) {
        }
      },
      // 当前行双击
      handleRowDblclick: {
        type: Function,
        default (row, event) {
        }
      },
      // 合计相关处理函数
      handleSummary: {
        type: Function,
        default (param) {
          const {columns, data} = param
          const sums = []
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '合计'
              return
            }
            const values = data.map(item => Number(item[column.property]))
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                  return prev + curr
                } else {
                  return prev
                }
              }, 0)
              // sums[index] += ' 元';
            } else {
              sums[index] = 'N/A'
            }
          })
          return sums
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      // 格式化数据源
      data () {
        let me = this
        return me.dataSource
      }
    },
    created () {

    },
    mounted () {
    },
    updated () {
      const _this = this
      if (_this.currentRow) {
        setTimeout(() => {
          _this.$refs.table.setCurrentRow(_this.currentRow)
        }, 50)
      }
    },
    methods: {
      // 分页每页条数变化
      sizeChange (val) {
        //        console.log(`每页 ${val} 条`);
        this.$emit('pageChange', {pageSize: val})
      },
      //  分页当前页变化
      currentChange (val) {
        //        console.log(`当前页: ${val}`);
        if (val === this.info.pageNum) {
          return
        }
        this.$emit('pageChange', {pageNum: val})
      },
      //  表格当前行发生变化（用于单选）
      handleCurrentChange (val) {
        this.$emit('singleSelection', val)
      },
      //  表格选项发生改变（用于多选）
      handleSelectionChange (val) {
        this.$emit('multipleSelection', val)
      },
      // 表格头标题点击
      handleheaderClick (column, event) {
      },
      // 当表格的排序条件发生变化的时候会触发该事件{ column, prop, order }
      sortChange ({column, prop, order}) {
        this.$emit('sortChangeFun', {column, prop, order})
      }
    }
  }
</script>
<style lang="scss">
.el-table .descending .sort-caret.descending {
    border-top-color: #fff;
}
.el-table .ascending .sort-caret.ascending {
    border-bottom-color: #fff;
}
.b-table{
  height: 100%;
  .b-table-wrapper {
      height: calc(100% - 60px);
    }
}
</style>
