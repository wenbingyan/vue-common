<template>
  <div class="demo">
    <ross-FilterTable 
      :filterForm="formInline" 
      :Fields="fields" 
      :onchange="onchange" 
      :onReset="onReset"
      :loading="loading"
      tableTitle="测试详情"
      :tableHeader="tableHeader"
      :tableData="tableData"
      :tableInfo="tableInfo"
    >
    </ross-FilterTable>
    <Attribute title='InfoList Attribute' :dataSource="AttributeFields" />
  </div>
</template>

<script>
import myfileds from './Fields/fileds.js'
import HeaderColumn from './Fields/columnFields'
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'

export default {
  name: 'filterTable',
  components:{ Attribute },
  data () {
    return {
      list: [],
      formInline: {
        user:'',
        region: '',
        datetypeData: '',
        box:[],
        Cascader:''
      },
      fields:myfileds,
      loading: false,
      tableHeader: HeaderColumn,
      tableData: [
        {name: '张三', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '李四', sex: '男', date: '2010-10-12', adress: '北京'},
        {name: '王五', sex: '男', date: '2010-10-12', adress: '北京'}
      ],
      tableInfo: {pageNum: 1, pageSize: 10, total: 3},
      AttributeFields
    }
  },
  methods: {
    onchange(ref){
      console.log('onchange',ref, this.formInline)
    },
    onReset() {
      console.log('onReset', this.formInline)
    }
  }
}

</script>

<style lang="scss">
.test{
  color: red;
}
</style>
