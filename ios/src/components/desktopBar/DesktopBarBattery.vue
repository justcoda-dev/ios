<template>
  <div v-if="battery">
    <img :src="battery.img" width="20px" height="20px">
  </div>
</template>

<script>
export default {
  name: "DesktopBarBattery",
  props: {
    battery: {
      type: Object
    }
  },

}
</script>

<style lang="scss" scoped>
div {
  padding: 5px;
}
</style>