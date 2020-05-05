<template>
    <div class="example-button">
        <div class="example-button-type">
            <div class="example-button-title">按钮类型</div>
            <div class="example-button-list">
                <ross-button>默认按钮</ross-button>
                <ross-button type="primary">主要按钮</ross-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">按钮大小</div>
            <div class="example-button-list">
                <ross-button type="primary">普通按钮</ross-button>
                <ross-button type="primary" size="large">大号按钮</ross-button>
                <ross-button type="primary" size="medium">中等按钮</ross-button>
                <ross-button type="primary" size="small">小号按钮</ross-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">按钮形状</div>
            <div class="example-button-list">
                <ross-button type="primary">普通按钮</ross-button>
                <ross-button type="primary" shape="rectangle">直角按钮</ross-button>
                <ross-button type="primary" shape="circle">圆角按钮</ross-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">禁用状态</div>
            <div class="example-button-list">
                <ross-button type="primary" :disabled="true">禁用按钮</ross-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.example-button {
  padding: 10px 20px;
  .example-button-type {
    padding-top: 10px;
    .example-button-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-button-list {
    .ross-button {
      margin: 0 10px 10px 0;
    }
  }
}
</style>
