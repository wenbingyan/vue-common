<template>
    <div class="ImgCard">
        <div class="ImgCard-content">
            <el-image
            @click="imageBig(urls)"
            :src="urls"
            style="width: 100%;"
            fit="fill">
            </el-image>
						<div class="ImgCard-content-title">
							{{title}}
						</div>
        </div>
        <el-dialog
        :title="title"
        :visible.sync="dialogVisibleImges"
        style="padding: 0;margin: 0px;"
        class="text-center"
        >
        <el-image
        :src="imgData"
        style="width: 100%;"
        fit="fill">

        </el-image>
        </el-dialog>

    </div>
</template>
<script>
export default {
  name: 'oneimgAssembly',
  data() {
    return {
      dialogVisibleImges: false,
      imgData: ''
    }
  },
  props: {
    urls: {
      type: String
    },
    title: {
      type: String
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    imageBig(id) {
      this.imgData = id
      this.dialogVisibleImges = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .ImgCard{
    width: 100%;
    &-content{
      padding: 8px 5px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      &-title{
        font-size: 14px;
        color: #303133;
        text-align: center;
        padding: 4px 0;
      }
    }
  }
</style>