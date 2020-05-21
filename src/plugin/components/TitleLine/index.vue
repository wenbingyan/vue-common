<template>
  <div class="Title-line">
    <div class="Title-line-left"></div>
    <div class="Title-line-name">{{title}}</div>
    <div class="Title-line-right"></div>
  </div>
</template>

<script>
const delta = 15

export default {
  name: 'TitleLine',
  props:{
    title: String
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.Title-line{
  display: flex;
  align-items: center;
  &-left{
    width: 50px;
    height: 1px;
    background-color: #eaebef;
  }
  &-name{
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7DD2C8;
  }
  &-right{
    flex:1;
    height: 1px;
    background-color: #eaebef;
  }
}
</style>
