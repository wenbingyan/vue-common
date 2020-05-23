<template>
  <div class="infodemo">
    <ross-InfoLayout>
      <div slot="infoBanner">info</div>
      <div slot="infoContent">content</div>
    </ross-InfoLayout>
    <Attribute title='插槽种类' :dataSource="AttributeFields" />
  </div>
</template>

<script>
import Attribute from '../../components/Attribute'
import AttributeFields from './Fields/attribute'
export default {
  name: 'titleline',
  components:{ Attribute },
  data(){
    return {
      AttributeFields
    }
  }
}
</script>

<style lang="scss" scoped>
.infodemo{
  background-color: #f8f8f8;
  padding: 20px;
}
</style>
