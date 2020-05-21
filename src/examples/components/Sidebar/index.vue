<template>
  <div class="side">
    <div class="side-item" :key="index" v-for="(item,index) in MenuList">
      <router-link :to="`/${item.path}`" class="nav-link">{{item.label}}</router-link>
    </div>
  </div>
</template>

<script>
import MenuList from './menu'
export default {
  data(){
    return {
      MenuList
    }
  }
};
</script>

<style lang='scss' scoped>
.side{
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 70px;
    background-color: #fff;
    overflow: hidden;
    padding-top: 20px;
    &-item .nav-link{
      height: 40px;
      color: #444;
      line-height: 60px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }
    &-item .nav-link:hover{
      color: #409eff;
    }
}
</style>
