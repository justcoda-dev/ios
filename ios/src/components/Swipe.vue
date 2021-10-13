<template>
  <div v-if="num" class="swipe">
    <div class="desktop-swipe">
      <button @click="clicked" :class="{active: isActive}" ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "swipe",
  props: {
    num: {
      type:Number
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    clicked() {

this.$emit('clicked', this.num)
    }
  }

}
</script>

<style lang="scss" scoped>
.swipe {
  display: flex;
  justify-content: center;
}

.desktop-swipe {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 30px;

  button {
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
   background-color: rgba(46, 49, 49, 0.8);
    border: none;
    &:hover {
      background: white;
      opacity: .7;
    }
  }
  .active {
    background: white;
    opacity: .7;
  }
}
</style>