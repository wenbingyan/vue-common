<template>
  <div class="Tabsbar">
    <ross-Tabsbar :tabList="tabList" v-model="tabStatus"  @handlerChange="getList" />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data(){
    return {
      tabStatus: 'enterprises',
      OneNum: 0,
      twoNum: 0,
      threeNum: 0,
      fourNum: 0,
    }
  },
  computed: {
    tabList(){
        return [
          {name:"待确认", value:'enterprises'},
          {name:"待收款", value:'confirm'},
          {name:"待发放", value:'receive'},
          {name:"已发放", value:'payment'}
        ]
    }
  },
  methods: {
    getList(){
      console.log('tabschange')
    }
  }
}
</script>

<style lang="scss" scoped>
.Tabsbar{
    background-color: #fff;
    padding: 24px;
}
</style>
