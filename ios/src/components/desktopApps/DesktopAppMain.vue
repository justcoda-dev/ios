<template>
  <div class="app">
    <div class="main" v-if="appData">
      <img class="icon" :src="appData.icon" @click="openComponent" alt="">
      <div class="name">{{ appData.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopApp",
  props: {
    appData: {
      type: Object
    },
  },
  methods: {
    openComponent() {
      this.$router.push({path: this.appData.name})
    },

  }
}
</script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.icon {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 16px 16px 2px 16px;
  width: 60px;
  height: 60px;
  transition: 0.2s;
  cursor: pointer;
    &:hover {
transform: scale(1.1);
  }
}
.name {
  display: flex;
  margin: 0px;
  padding: 0px;

}
.app:hover {
color: #171717;
}
.loading {
}
</style>