<template>
<div class="attribute">
    <div class="attribute-title">{{title}}</div>
    <ross-table 
    :border="false"
    :columns="tableHeader"
    :dataSource="dataSource"
    :type="{pagination:false,single:false}"
    >
    </ross-table>
</div>
</template>

<script>

export default {
  name: 'attribute',
  data () {
    return {
      tableHeader: [
            {titleName: '参数', fieldName: 'name'},
            {titleName: '说明', fieldName: 'explain'},
            {titleName: '类型', fieldName: 'type'},
            {titleName: '默认值', fieldName: 'default'}
        ]
    }
  },
  props:{
    dataSource:{
        type: Array,
        default(){
            return []
        }
    },
    title:{
        type:String
    }
  }
}

</script>

<style lang="scss" scoped>
.attribute {
  &-title{
    margin: 55px 0 20px;
    font-size: 22px;
    font-weight: 400;
  }
}
</style>
