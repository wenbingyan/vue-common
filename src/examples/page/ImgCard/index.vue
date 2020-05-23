<template>
  <div class="imgCard">
    <div class="example-title">图片框</div>
    <div class="imgbox">
      <ross-ImgCard :title="'身份证正面'" :urls="url" />
    </div>
    <Attribute title='ImgCard Attribute' :dataSource="AttributeFields" />
  </div>
</template>

<script>
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'
export default {
  name: 'imgCard',
  components:{ Attribute },
  data() {
    return {
      AttributeFields,
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
