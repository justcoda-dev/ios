<template>
  <div class="desktop-page" :style="{ background: this.allBg }">
    <DesktopBar/>
    <div class="desktop-items">
      <DesktopAppMain v-for="app in this.allApps " :key="app.id" :appData="app" @openComponent="openComponent($event)"/>
    </div>
    <div class="swipe">
      <Swipe v-for="pages in this.getPages" :key="pages.id" :num="pages.id" @clicked="selectPage($event)"/>
    </div>
    <div class="desktop-footer">
      <DesktopAppMain class="footer-app" v-for="app in this.allAppsSecond " :key="app.id" :appData="app"/>
    </div>

  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

import DesktopBar from "@/components/desktopBar/DesktopBar";
import DesktopAppMain from "@/components/desktopApps/DesktopAppMain";
import Swipe from "@/components/Swipe";

export default {
  name: "DesktopPageSwipe",
  components: {DesktopAppMain, DesktopBar, Swipe},
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    ...mapActions(['fetchApps', 'fetchBg', 'fetchPage', 'fetchAppsSecond']),
   async selectPage(id) {
      this.page = id
       await this.fetchApps(id)
    },
    openComponent() {

    }
  },
  computed: {
    ...mapGetters(['allApps', 'allBg', 'getPages', 'allAppsSecond']),
  },
  async created() {
    await Promise.all([
      this.fetchPage(),
      this.fetchAppsSecond(),
      this.fetchApps(this.page),
      this.fetchBg(),

    ])

  }

}
</script>

<style lang="scss" scoped>

.desktop-page {
  width: 375px;
  height: 812px;
  background-position: center;
  background-size: cover;

  .desktop-items {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    width: 375px;
    height: 652px;

  }

  .swipe {
    display: flex;
    padding: 0px 10px 0px 10px;
    justify-content: center;
  }


  .desktop-footer {
    border-radius: 10px;
    display: flex;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);


  }
}


</style>