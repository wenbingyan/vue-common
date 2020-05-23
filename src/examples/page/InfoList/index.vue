<template>
  <div class="demo">
    <div class="example-title">基本数据</div>
    <ross-InfoList :data="list" /> 
    <Attribute title='InfoList Attribute' :dataSource="AttributeFields" />
    <Attribute title='Data Attribute' :dataSource="dataFields" />
  </div>
</template>

<script>
import fields from './Fields/infoFields'
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'
import dataFields from './Fields/dataFields'
export default {
  name: 'demo',
  components:{ Attribute },
  data () {
    return {
      list: fields,
      AttributeFields,
      dataFields
    }
  }
}

</script>

<style lang="scss" scoped>
.demo{
  padding: 24px;
  background: #fff;
}
</style>
