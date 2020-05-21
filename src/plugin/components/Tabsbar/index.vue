<template>
  <el-row class='Tabs'>
    <div class="Tabs-componet">
      <div v-for="(item, index) in tabList" :key="index">
        <div v-if="!item.hide" class="Tabs-componet-item" :class="{active: tabStatus === item.value || value === item.value}" @click="handleClick(item.value)">{{item.name}}{{item.num ? `（${item.num}）` : ''}}</div>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Tabsbar',
  props:{
    tabList: Array,
    tabStatus: String,
    value: String
  },
  data(){
    return {
      obServer:['input','handlerChange']
    }
  },
  methods: {
    handleClick(value) {
      const obServer = this.obServer
      obServer.forEach(val=>{
        this.$emit(val,value)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

.Tabs{
  border-bottom: 2px solid #e5e7ec;
  height: 80px;
  background-color: #fff;
  &-componet{
    position: absolute;
    bottom: -2px;
    display: flex;
    &-item{
      padding: 0 20px;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      line-height: 80px;
      text-align: center;
      cursor: pointer;
      &.active{
        color: #7DD2C8;
        border-bottom: 2px solid #7DD2C8;
      }
    }
  }
}
</style>
