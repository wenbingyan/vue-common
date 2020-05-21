<template>
<div class="page">
  <div class="page-banner">
    <div class="page-banner-title">Elbow</div>
  </div>
  <div class="page-container">
    <Sidebar></Sidebar>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from '@/examples/components/Sidebar'
export default {
  components: {Sidebar}
};
</script>

<style lang='scss' scoped>
.page{
  overflow-y: hidden;
  height: 100%;
  background-color: #fff;
}
.page-banner{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  &-title{
    width: 1140px;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 22px;
    font-weight: bold;
  }
}
.page-container{
  width: 1140px;
  padding-top: 70px;
  margin: 0 auto;
  .container{
    min-height: calc(100vh - 71px) ;
    padding-left: 270px;
    padding-right: 24px;;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
}
</style>
