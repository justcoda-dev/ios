<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  created() {
    window.$store = this.$store
  }
}
</script>

<style lang="scss">
div {
  font-family: 'Noto Sans JP', sans-serif;

}
</style>
