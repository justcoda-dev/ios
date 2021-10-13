<template>
  <div v-if="internet">
    <img :src="internet.img" alt="" width="20px" height="20px">
  </div>
</template>

<script>
export default {
  name: "DesktopBarInternet",
  props: {
    internet: {
      type: Object
    }
  }
}
</script>

<style scoped>
div {
  padding: 5px;
}
</style>