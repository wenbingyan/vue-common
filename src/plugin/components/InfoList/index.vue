<template>
  <div>
    <el-row :gutter="gutter">
      <el-col 
        :key="index"
        v-for="(item, index) in data"
        :span="item.span ? item.span : defaultSpan">
        <div class="ListInfo">
          <div class="ListInfo-label">{{item.label}}:</div>
          <div class="ListInfo-value">{{item.value}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'InfoList',
  props: {
    data: {
      required: true,
      type: Array
    },
    gutter: {
      type: Number,
      default(){
          return 20
      }
    }
  },
  data () {
    return {
        defaultSpan: 8
    }
  }
}

</script>

<style lang="scss" scoped>
.ListInfo{
  display: flex;
  font-size: 16px;
  line-height: 1.8;
  text-align: left;
  &-label{
    color: rgba(0,0,0,.85);
    font-weight: bold;
  }
  &-value{
    color: #000;
    padding-left: 10px;
  }
}
</style>
