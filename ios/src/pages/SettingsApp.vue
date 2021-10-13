<template>
  <div class="desktop-page">
    <DesktopBar/>
    <div class="wrapper">
      <div class="element-name">Settings</div>
      <input v-model="text" type="text" placeholder="search" class="search">
      <div class="user">
        <div class="user-img"><img :src="userImg"  alt=""></div>
        <div class="user-text">Alexandr Koval</div>
      </div>
      <SettingsPoints :points="points"/>

    </div>
  </div>
</template>

<script>
import DesktopBar from "../components/desktopBar/DesktopBar";
import SettingsPoints from "../components/settings/SettingsPoints";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "SettingsApp",
  components: {SettingsPoints, DesktopBar},
  data() {
    return {
      userImg: 'http://localhost:5000/user/user-1.jpg',
      text: '',
      arr: [],
    }
  },
  methods: {
    ...mapActions(['fetchApps']),
  },
  computed: {
    ...mapGetters(['getSettingsApp']),
    points() {
 let text = this.text
          return this.getSettingsApp.map((v) => v.data.filter(function (product) {
            return Object.keys(product).some(function (key) {
              return String(product[key]).toLowerCase().indexOf(text) > -1
            })
          }))[0]
      }
  },
 async created() {
    await this.fetchApps()
// await console.log(this.getSettingsApp.map((v) => v.data))
  },
}
</script>

<style lang="scss" scoped>
.desktop-page {
  margin: 0px;
  padding: 0px;
  background: black;
  width: 375px;
  height: 812px;
  background-position: center;
  background-size: cover;

  .wrapper {
    color: white;
    .element-name {
      padding: 10px;
      font-size: 30px;
      font-weight: bold;
    }
    .search {
      border: none;
      padding: 5px;
      margin: 10px;
      width: 350px;
      height: 30px;
      border-radius: 8px;
      color: #fff;
      background: #171717;

      text-indent: 35px;
      text-align: left;
      font-size: 20px;
      &::placeholder {

        background-image: url('http://localhost:5000/placeholder/loupe.svg');
        background-size: 20px;
        background-repeat: no-repeat;
        opacity: .5;
      }
    }
    .user {
      padding: 10px 0px 10px;
      display: flex;
      font-size: 30px;
      width: 100%;
      margin: 5px 0px 30px 0px;
      height: 50px;
      background: #171717;
      .user-img {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 1px gray solid;
          border-radius: 50%;
        }
      };
      .user-text {
        font-weight: bold;
        padding: 5px 5px 5px 15px;
      }
    }

  }
}
</style>