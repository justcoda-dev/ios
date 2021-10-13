<template>
  <div class="desktop-page">
    <DesktopBar/>
    <div class="display">
      {{ display }}
    </div>
    <div class="wrapper">
      <div class="buttons">
        <div class="buttons-top">
          <button class="buttons-action" @click="pastSymbol(action)" v-for="(action ,index) of actions"
                  :key="index">{{ action }}
          </button>
        </div>
        <div class="buttons-bottom">
          <div class="buttons-left">
            <button class="buttons-nums" @click="pastSymbol(num)" v-for="(num, index) of nums" :key="index">{{ num }}
            </button>
          </div>
          <div class="buttons-right">
            <button @click="pastSymbol(but)" v-for="(but, index) of other" :key="index" class="buttons-action">{{
                but
              }}
            </button>
            <button class="buttons-clean" @click="clean">ac</button>
            <button class="buttons-result" @click="result">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import DesktopBar from "@/components/desktopBar/DesktopBar";

export default {
  name: "desktop_page_swipe",
  components: {DesktopBar},
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      actions: ['+', '-', '*', '/'],
      other: ['.', '%'],
      display: '0'
    }
  },
  methods: {
    pastSymbol(but) {
      if (but === '.') {
        return this.display += but
      }
      if (this.display === '0') {
        this.display = ''
      }
      this.display += but
    },
    result() {
      this.display = eval(this.display)
    },
    clean() {
      this.display = '0'
    }
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

  .display {
    height: 317px;
    background: black;
    color: white;
    font-size: 100px;
  }

  .buttons {
    display: flex;
    flex-direction: column;

    .buttons-top {
      display: flex;
      justify-content: space-between;

      .buttons-action {
        border: none;
        border-radius: 100%;
        font-size: 35px;
        font-weight: bold;
        background: lightgrey;
        width: 33%;
        height: 93px;

        &:last-child {
          background: darkorange;
          color: white;

          &:hover {
            background: white;
            color: darkorange;
          }
        }

        &:hover {
          background: white;
          opacity: .9;
        }
      }
    }

    .buttons-bottom {
      display: flex;
      justify-content: space-between;

      .buttons-left {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .buttons-nums {
          border: none;
          font-size: 35px;
          border-radius: 100%;
          background: #222222;
          color: white;
          width: 33%;
          height: 93px;
          transition: 0.5s;

          &:hover {
            background: gray;
          }

          &:last-child {
            width: 282px;
            border-radius: 40px;
          }
        }
      }

      .buttons-right {
        display: flex;
        flex-direction: column;

        .buttons-action {
          font-size: 35px;
          font-weight: bold;
          border: none;
          border-radius: 100%;
          margin: 0px;
          padding: 0px;
          width: 93px;
          height: 93px;
          transition: 0.5s;
          background: darkorange;
          color: white;

          &:hover {
            background: white;
            color: darkorange;
          }
        }

        .buttons-clean {
          background: darkorange;
          color: white;
          font-size: 35px;
          font-weight: bold;
          border: none;
          border-radius: 100%;
          margin: 0px;
          padding: 0px;
          width: 93px;
          height: 93px;

          &:hover {
            background: white;
            color: darkorange;
          }
        }

        .buttons-result {
          background: darkorange;
          color: white;
          font-size: 35px;
          font-weight: bold;
          border: none;
          border-radius: 100%;
          margin: 0px;
          padding: 0px;
          width: 93px;
          height: 93px;

          &:hover {
            background: white;
            color: darkorange;
          }
        }
      }

    }


  }
}
</style>