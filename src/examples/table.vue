<template>
  <div class="demo">
    <ross-BTable 
      :loading="loading"
      :columns="tableHeader"
      :dataSource="tableData"
      :info="{pageNum: 1, pageSize: 10, total: 3}"
    >
  </ross-BTable>
  </div>
</template>

<script>

export default {
  name: 'tabledemo',
  data () {
    return {
      loading: false,
      tableHeader: [
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
      tableInfo: {pageNum: 1, pageSize: 10, total: 3}
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
