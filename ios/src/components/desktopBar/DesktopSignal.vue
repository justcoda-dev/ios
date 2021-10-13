<template>
  <div v-if="signal">
    <img :src="signal.img" width="20px" height="20px" alt="">

  </div>
</template>

<script>
export default {
  name: "DesktopBarSignal",
  props: {
    signal: {
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