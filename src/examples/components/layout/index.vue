<template>
<div>
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
.page-banner{
  width: 1140px;
  position: fixed;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  &-title{
    padding: 20px 0;
    font-size: 22px;
    font-weight: bold;
  }
}
.page-container{
  width: 1140px;
  margin: 0 auto;
  .container{
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
}
</style>
