<template>
  <button class="star-button">
    button test
  </button>
</template>

<script>
export default {
  name: 'RossButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped>
</style>
