<template>
  <div class="demo">
    <div class="example-title">普通表格</div>
    <ross-table 
      :loading="loading"
      :columns="tableHeader"
      :dataSource="tableData"
      :info="tableInfo"
    >
    </ross-table>
    <!-- <TableMd /> -->
    <div class="example-title">带操作的表格</div>
    <ross-table 
      :loading="loading"
      :columns="tableHeader"
      :dataSource="tableData"
      :info="tableInfo"
      :type="{operationColumn:true,index:true}"
    >
      <template slot="operationColumn" slot-scope="{row}">
        <el-button type='primary' @click="change(row)">点击</el-button>
      </template>
    </ross-table>

    <div class="example-title">插槽表格</div>
    <ross-table 
      :loading="loading"
      :columns="tableHeaderSolt"
      :dataSource="tableDataSolt"
      :info="tableInfo"
    >
      <template slot="name_body" slot-scope="{scope,row,column}">
        <span>{{row[column.fieldName]}}-{{scope.row['name']}}</span>
      </template>
      <template slot="name_header" >
        <span>自定义插槽表头内容</span>
      </template>
    </ross-table>

    <div class="example-title">树状表格</div>
    <ross-table 
      style="height: 100%"
      :loading="loading"
      :columns="tableHeaderTree"
      :dataSource="tableDataTree"
      :info="tableInfo"
      row-key="name"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
    </ross-table>

    <Attribute title='Table Attribute' :dataSource="AttributeFields" />
    <Attribute title='Table Events' :dataSource="EventsFields" />
    <Attribute title='columns表头项配置' :dataSource="ColumnFields" />
  </div>
</template>

<script>
import Attribute from '../../components/Attribute'
import AttributeFields from './attribute'
import EventsFields from './eventsFields'
import ColumnFields from './columnFields'
import TableMd from './table.md'
export default {
  name: 'tabledemo',
  components:{Attribute,TableMd},
  data () {
    return {
      loading: false,
      tableHeader: [
        {titleName: '姓名', fieldName: 'name'},
        {titleName: '性别', fieldName: 'sex'},
        {titleName: '日期', fieldName: 'date'},
        {titleName: '地址', fieldName: 'adress'}
      ],
      tableHeaderSolt: [
        {titleName: '姓名', fieldName: 'name',body_slot: true,header_slot:true},
        {titleName: '性别', fieldName: 'sex'},
        {titleName: '日期', fieldName: 'date'},
        {titleName: '地址', fieldName: 'adress'}
      ],
      tableHeaderTree: [
        {titleName: '姓名', fieldName: 'name'},
        {titleName: '性别', fieldName: 'sex'},
        {titleName: '日期', fieldName: 'date'},
        {titleName: '地址', fieldName: 'adress'}
      ],
      tableData: [
        {name: '张三', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '李四', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '王五', sex: '男', date: '2010-10-12', adress: '北京'}
      ],
      tableDataSolt: [
        {name: '张三', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '李四', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '王五', sex: '男', date: '2010-10-12', adress: '北京'}
      ],
      tableDataTree: [
        {
          name: '张三', sex: '男', date: '2010-10-12', adress: '北京',
          children:[{name: '张三1', sex: '男', date: '2010-10-12', adress: '北京'},
                    {name: '李四1', sex: '男', date: '2010-10-12', adress: '北京'},
                    {name: '王五1', sex: '男', date: '2010-10-12', adress: '北京'}]
        },
        {name: '李四', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '王五', sex: '男', date: '2010-10-12', adress: '北京'}
      ],
      tableInfo: {pageNum: 1, pageSize: 10, total: 3},
      AttributeFields:AttributeFields,
      EventsFields:EventsFields,
      ColumnFields:ColumnFields,
    }
  },
  methods:{
    change(row){
      console.log(row)
    }
  }
}

</script>

<style lang="scss" scoped>
.demo {
  background-color: #fff;
  padding: 40px;
}
</style>
