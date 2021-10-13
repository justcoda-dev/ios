<template>
  <div v-if="isReadyWeather" class="wrapper" :style="{ background: this.backgroundImg }">
    <DesktopBar/>
    <div class="weather-wrapper">
      <div class="title-weather-wrapper">
        <h2 v-if="!active" @click="showInput">{{ weather.city }}</h2>
        <input  v-if="active" v-model="city" type="text">
        <button @click="showWeather" v-if="active">подвердить</button>
        <h1>{{ middleTemperature }}°</h1>
      </div>
      <hr>
      <div class="today-weather-wrapper">
        <WeatherHours :weatherHours="weather"/>
      </div>
      <hr>
      <div class="days-weather-wrapper">
        <WeatherDays :weatherDays="weather"/>
      </div>
      <hr>
    </div>

  </div>
</template>

<script>
import DesktopBar from "../components/desktopBar/DesktopBar";
import {mapActions, mapGetters} from 'vuex'
import WeatherDays from "../components/weather/WeatherDays";
import WeatherHours from "../components/weather/WeatherHours";

export default {
  name: "WeatherApp",
  components: {WeatherHours, WeatherDays, DesktopBar},
  data() {
    return {
      background: {
        day: 'http://localhost:5000/weather-background/day.jpg',
        night: 'http://localhost:5000/weather-background/night.jpg',
      },
      active: false,
      city:'',
    }
  },
  methods: {
    ...mapActions(['fetchWeather']),
    show() {
      console.log(this.weather)
    },
    showInput() {
      this.active = true
    },
    showWeather(){
      if(this.city.length > 3) {
        this.active = false
        this.fetchWeather(this.city)
      } else {
        this.active = false
        return
      }
    },
  },
  computed: {
    ...mapGetters(['getCityName', 'getWeather']),
    backgroundImg() {
      if (this.weather.data[0].time > 18) {
        return `url(${this.background.night})`
      } else {
        return `url(${this.background.day})`
      }
    },
    weather() {
      return {
        city: this.getWeather.city.name,
        data: this.getWeather.list.map((v) => {
          const [w] = v.weather
          w.time = v.dt
          w.temperature = Math.round(v.main.temp - 273)
          w.temp_max = Math.round(v.main.temp_min - 273)
          w.temp_min = Math.round(v.main.temp_max - 273)
          return w
        }),
      }
    },
    isReadyWeather() {
      return !!Object.keys(this.getWeather).length
    },
    middleTemperature() {
      return this.allTemperature.reduce((acc, number, i, arr) => {
        acc += number
        if (i === arr.length - 1) {
          return Math.round(acc / arr.length)
        } else {
          return Math.round(acc)
        }
      })
    },
    allTemperature() {
      return this.weather.data.map((v) => {
        return v.temperature
      })
    }
  },
  async created() {
    await Promise.all([
      this.fetchWeather('Вінниця'),

    ])
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0px;
  padding: 0px;
  width: 375px;
  height: 812px;
  background-color: #171717;
  background-position: center;
  background-size: cover;
  color: white;

  hr {
    width: 99%;
    opacity: 0.7;
  }

  // weather app styles
  .weather-wrapper {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    align-items: center;

    .title-weather-wrapper {
      input {
        color: white;
        border: none;
        width: 99%;
        height: 60px;
        background-color: rgba(148, 148, 148, 0.14);
        font-size: 40px;
        font-weight: 700;
      }
      button {
        background-color: rgba(28, 28, 31, 0.91);
        color: white;
        border: none;
        width: 100%;
        height: 50px;
        font-size: 30px;
        opacity: 0.7;
        &:hover {
          transition: .7s;
          opacity: 1;
          background-color: lightslategrey;
        }
      }

      h2 {
        font-size: 40px;
        text-align: center;
      }

      h1 {
        font-size: 80px;
        text-align: center;
      }
    }

    .today-weather-wrapper {

    }

    .days-weather-wrapper {
      align-self: self-start;
    }
  }
}
</style>