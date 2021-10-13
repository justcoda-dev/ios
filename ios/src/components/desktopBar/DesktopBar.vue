<template>
  <div  class="desktop-bar">
    <div class="desktop-bar-left">
      <DesktopBarSignal :signal="this.allBar['bar_signal']"/>
      <DesktopBarInternet :internet="this.allBar['bar_internet']"/>
    </div>
    <div class="desktop-bar-right">
      <DesktopBarClock :clock="this.allBar['bar_clock']"/>
      <DesktopBarBattery :battery="this.allBar['bar_battery']"/>
    </div>
  </div>
</template>

<script>
import DesktopBarSignal from "./DesktopSignal";
import DesktopBarInternet from "./DesktopBarInternet";
import DesktopBarClock from "./DesktopBarClock";
import DesktopBarBattery from "./DesktopBarBattery";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "DesktopBar",
  components: {DesktopBarBattery, DesktopBarClock, DesktopBarInternet, DesktopBarSignal},
  props: {
    barData: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['fetchBar'])
  },
  computed: {
    ...mapGetters(['allBar'])
  },
  async created() {
    await this.fetchBar()
  }
}
</script>

<style lang="scss" scoped>
.desktop-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;

  .desktop-bar-right {
    display: flex;
  }

  .desktop-bar-left {
    display: flex;
  }
}
</style>