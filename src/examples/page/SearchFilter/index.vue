<template>
  <div class="demo">
    <ross-SearchFilter :Fields="fields" @onChange="onchange" @onReset="onReset" :formData="formInline" />
  </div>
</template>

<script>
import myfileds from './fileds.js'

export default {
  name: 'searchFilter',
  data () {
    return {
      list: [],
      formInline: {
        user:'',
        region: '',
        datetypeData: '',
        box:[],
        Cascader:''
      },
      fields:myfileds
    }
  },
  methods: {
    onchange(ref){
      console.log('onchange',ref, this.formInline)
    },
    onReset() {
      console.log('onReset', this.formInline)
    }
  }
}

</script>

<style lang="scss" scoped>
.demo {
  background-color: #fff;
  padding: 40px;
}
.test{
  color: red;
}
</style>
