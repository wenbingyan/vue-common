<template>
  <div class="imgCard">
    <div class="imgbox">
      <ross-ImgCard :title="'身份证正面'" :urls="url" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgCard',
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  }
}
</script>

<style lang="scss" scoped>
.imgCard{
    background-color: #fff;
    padding: 24px;
    .imgbox{
      width: 300px;
    }
}
</style>
