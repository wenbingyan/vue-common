<template>
  <div class="FilterTable">
    <SearchFilter :Fields="Fields" @onChange="onchange" @onReset="onReset" :formData="filterForm" />
    <div class="FilterTable-table">
      <el-card>
      <div v-if="hasBanner || tableTitle" slot="header" class="FilterTable-tablebanner">
        <div class="FilterTable-tablebanner-title">{{tableTitle}}</div>
        <slot name="bannerOperation" ></slot>
      </div>
      <BTable 
        :loading="false"
        :columns="tableHeader"
        :dataSource="tableData"
        :info="tableInfo"
        :type="tableType"
      >
        <template slot="operationColumn" slot-scope="{scope,index,column}">
            <slot name="operationColumn" :column="column" :index="index"  :row="scope.row" :scope="scope" ></slot>
         </template>
         <template slot="name_body" slot-scope="{scope,index,column}">
            <slot name="name_body" :column="column" :index="index"  :row="scope.row" :scope="scope"></slot>
         </template>
         <template slot="name_header" slot-scope="{scope,index,column}">
            <slot name="name_header" :column="column" :index="index"  :row="scope.row" :scope="scope"></slot>
         </template>
      </BTable>
    </el-card>
    </div>
    <slot name="FilterTableTitle" ></slot>
    <slot name="FilterTableContent"></slot>
    <slot name="FilterTableFooter"></slot>
  </div>
</template>

<script>
import SearchFilter from '../SearchFilter'
import BTable from '../Table'
export default {
  name: 'FilterTable',
  components: {SearchFilter, BTable},
  props:{
    title: String,
    // 搜索框的config数集
    Fields:{
        type: Array,
        default(){
            return []
        }
    },
    // 搜索框form数据
    filterForm:{
        type: Object,
        required: true,
    },
    // 搜索框查询
    onchange: {
      type: Function,
      required: true
    },
    // 搜索框重置
    onReset: {
      type: Function,
      required: true
    },
    // 表格loading
    loading: {
      type: Boolean,
      default(){
        return false
      }
    },
    // 表格标题
    tableTitle: {
      type: String,
      default(){
        return ''
      }
    },
    // 表格表头配置
    tableHeader: {
      type: Array,
      required: true
    },
    // 表格数据
    tableData: {
      type: Array,
      default(){
        return []
      }
    },
    // 表格页码信息
    tableInfo: {
      type: Object,
      default(){
        return {}
      }
    },
    tableType: {
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
    }
  },
  data() {
    return {
      hasBanner: this.$slots.bannerOperation ? true : false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.FilterTable{
    padding: 24px;
    &-table{
        margin-top: 24px;
    }
    &-tablebanner{
      display: flex;
      justify-content: space-between;
      &-title{
        font-size: 18px;
        font-weight: 700;
      }
    }
}
</style>
