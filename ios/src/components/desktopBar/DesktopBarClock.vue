<template>
  <div>
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "DesktopBarClock",
  props: {
    clock: {
      type: Object
    }
  },
  data() {
    return {
      time: null,
      intervalId: null,
    }
  },
  methods: {},
  created() {
    this.intervalId = setInterval(() => {
      const h = new Date().getHours() >= 10 ? new Date().getHours() : `0${new Date().getHours()}`
      const m = new Date().getMinutes() >= 10 ? new Date().getMinutes() : `0${new Date().getMinutes()}`
      this.time = `${h} : ${m}`
    }, 1000)

  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
div {
  color: white;
  padding: 5px;
}

</style>