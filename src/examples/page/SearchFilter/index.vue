<template>
  <div class="demo">
    <div class="example-title">搜索条件</div>
    <ross-SearchFilter :Fields="fields" @onChange="onchange" @onReset="onReset" :formData="formInline" />
    <Attribute title='searchFilter Attribute' :dataSource="AttributeFields" />
    <Attribute title='searchFilter Events' :dataSource="EventsFields" />
    <Attribute title='Fields 参数配置' :dataSource="FieldsAttribute" />
    <Attribute title='Input props 配置' :dataSource="InputFields" />
    <Attribute title='Select props 配置' :dataSource="SelectFields" />
    <Attribute title='Datepicker props 配置' :dataSource="DatepickerFields" />
    <Attribute title='Checkbox props 配置' :dataSource="CheckboxFields" />
    <Attribute title='Cascader props 配置' :dataSource="CascaderFields" />
    
  </div>
</template>

<script>
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'
import EventsFields from './Fields/eventsFields'
import InputFields from './Fields/inputFields'
import SelectFields from './Fields/selectFields'
import DatepickerFields from './Fields/datepickerFields'
import CheckboxFields from './Fields/checkboxFields'
import CascaderFields from './Fields/cascaderFields'
import FieldsAttribute from './Fields/fieldsAttribute'
import myfileds from './Fields/fileds.js'

export default {
  name: 'searchFilter',
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
      AttributeFields:AttributeFields,
      EventsFields:EventsFields,
      FieldsAttribute:FieldsAttribute,
      InputFields:InputFields,
      SelectFields:SelectFields,
      DatepickerFields:DatepickerFields,
      CheckboxFields:CheckboxFields,
      CascaderFields:CascaderFields,
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

<style lang="scss" scoped>
.demo {
  background-color: #fff;
  padding: 40px;
}
.test{
  color: red;
}
</style>
