<template>
  <div class="side">
    <div :class="active === `/${item.path}`?'side-item active':'side-item'" :key="index" v-for="(item,index) in MenuList">
      <div @click="go(item.path)"  class="nav-link">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
import MenuList from './menu'
export default {
  data(){
    return {
      MenuList,
      active: this.$route.path
    }
  },
  created(){
    this.active = this.$route.path
  },
  methods:{
    go(path){
      this.active = `/${path}`
      this.$router.push({
　　　　　　path
　　　　})
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
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      padding: 10px 0;
      cursor: pointer;
    }
    &-item .nav-link:hover{
      color: #409eff;
    }
    &-item.active .nav-link{
      color: #409eff;
    }
}
</style>
