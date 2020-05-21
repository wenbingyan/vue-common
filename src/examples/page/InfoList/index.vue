<template>
  <div class="demo">
    <ross-InfoList :data="list" /> 
  </div>
</template>

<script>
import fields from './infoFields'
export default {
  name: 'demo',
  data () {
    return {
      list: fields
    }
  }
}

</script>

<style lang="scss" scoped>
.demo{
  padding: 24px;
  background: #fff;
}
</style>
