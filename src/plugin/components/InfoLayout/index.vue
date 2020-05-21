<template>
  <div class="InfoLayout">
    <div class="InfoLayout-info">
      <div class="InfoLayout-info-wrap">
        <slot name="infoBanner" ></slot>
      </div>
    </div>
    <div class="InfoLayout-content">
      <div class="InfoLayout-content-wrap">
        <slot name="infoContent" ></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InfoLayout'
}

</script>

<style lang="scss" scoped>
.InfoLayout{
  &-info{
    padding: 24px;
    background-color: #fff;
    &-wrap{
      min-height: 190px;
      padding: 20px;
      background-color: rgb(247, 250, 252);
    }
  }
  &-content{
    padding: 24px;
    &-wrap{
      min-height: 400px;
      padding: 20px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
