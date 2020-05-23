<template>
<div class="SearchFilter">
    <el-form :gutter="20" :inline="true" :model="formData" ref="searchFilterForm">
        <el-form-item :label="item.label" :prop="item.model" :key="index" v-for="(item,index) in Fields">
            <SearchInput
              v-if="item.type === 'Input'"
              :selfStyle="item.style"
              :width="item.props.props"
              :autosize="item.props.autosize"
              :blur="item.props.blur"
              :clearable="item.props.clearable"
              :disabled="item.props.disabled"
              :keydownEnter="item.props.keydownEnter"
              :model.sync="formData[item.model]"
              :modelKey="item.model"
              :placeholder="item.props.placeholder"
              :readonly="item.props.readonly"
              :resize="item.props.resize"
              :rows="item.props.rows"
              :slotType="item.props.slotType"
              :tabindex="item.props.tabindex"
              :toFixed="item.props.toFixed"
              :type="item.props.type"
            ></SearchInput>
            <SearchDatepicker
              v-if="item.type==='DatePicker'"
              :selfStyle="item.style"
              :change="item.props.change"
              :clearable="item.props.clearable"
              :disabled="item.props.disabled"
              :editable="item.props.editable"
              :model.sync="formData[item.model]"
              :pickerOptions="item.props.pickerOptions"
              :type="item.dateType"
              :valueFormat="item.valueFormat"
              ></SearchDatepicker>
              <!--select下拉框-->
              <SearchSelect
                v-if="item.type==='Select'"
                :selfStyle="item.style"
                :placeholder="item.props.placeholder"
                :change="item.props.change"
                :clearable="item.props.clearable"
                :collapseTags="item.props.collapseTags"
                :disabled="item.props.disabled"
                :filterable="item.props.filterable"
                :loading="item.props.loading"
                :model.sync="formData[item.model]"
                :modelKey="item.model"
                :multiple="item.props.multiple"
                :options="item.props.options"
                :optionsProps="item.props.optionsProps"
                :valueKey="item.props.valueKey"
                :visibleChange="item.props.visibleChange"
              ></SearchSelect>
              <!--checkbox多选框-->
              <SearchCheckbox
                v-if="item.type==='Checkbox'"
                :selfStyle="item.style"
                :change="item.props.change"
                :disabled="item.props.disabled"
                :falseLabel="item.props.falseLabel"
                :indeterminate="item.props.indeterminate"
                :model.sync="formData[item.model]"
                :options="item.props.options"
                :optionsProps="item.props.optionsProps"
                :trueLabel="item.props.trueLabel"
              ></SearchCheckbox>
              <!--checkbox多选框-->
              <SearchCascader
                v-if="item.type==='Cascader'"
                :selfStyle="item.style"
                :placeholder="item.props.placeholder"
                :change="item.props.change"
                :disabled="item.props.disabled"
                :clearable="item.props.clearable"
                :otherProps="item.props.otherProps"
                :filterable="item.props.filterable"
                :showAllLevels="item.props.showAllLevels"
                :model.sync="formData[item.model]"
                :modelKey="item.model"
                :options="item.props.options"
              ></SearchCascader>
        </el-form-item>
        <!-- <el-form-item prop="datetypeData">
          <el-date-picker v-model="formData.datetypeData" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" style="width: 100%;" />
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="onReset">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SearchInput from './Input'
import SearchDatepicker from './Datepicker'
import SearchSelect from './Select'
import SearchCheckbox from './Checkbox'
import SearchCascader from './Cascader'
export default {
  name: 'searchFilter',
  components:{
    SearchInput,
    SearchDatepicker,
    SearchSelect,
    SearchCheckbox,
    SearchCascader
  },
  props:{
    formData:Object,
    Fields:{
      type: Array,
      default () {
          return []
        }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onChange',this.$refs.searchFilterForm)
    },
    onReset() {
      this.$refs.searchFilterForm.resetFields();
      this.$emit('onReset')
    }
  }
}
</script>

<style lang="scss" scoped>
.SearchFilter{
  padding: 20px 20px 0 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-form-item{
    margin-bottom: 16px;
  }
}
</style>
