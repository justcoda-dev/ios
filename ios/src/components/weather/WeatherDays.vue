<template>
<div class="weather-days-wrapper" v-if="weatherDays">
  <div v-for="(weather,i) of weatherDays.data" :key="i" class="item">
    <div class="weather-day">{{timeConverter(weather.time)}}</div>
    <div class="weather-icon"><img :src="renderIcon(weather.icon)" alt=""></div>
    <div class="weather-temperature">{{weather.temp_max}}°</div>
    <div class="weather-temperature">{{weather.temp_min}}°</div>
  </div>
</div>
  <div v-else ><h1>DOWNLOAD</h1></div>
</template>

<script>
export default {
  name: "WeatherDays",
  props: {
    weatherDays: {
      type: Object
    }
  },
  methods: {
    renderIcon(icon){
      return `http://openweathermap.org/img/wn/${icon}@2x.png`
    },
    timeConverter(unix_timestamp) {
      const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        0: 'Sunday',
      }
      const date = new Date(unix_timestamp * 1000);
      return days[date.getDay()]
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-days-wrapper {

  .item {
    display: flex;
    //justify-content: space-between;
    align-items: center;
    font-size: 25px;
    padding: 0px;
    margin: 0px;
    img {
      max-width: 60px;
      padding-left: 30px;
      max-height: 60px;
    }
    .weather-day {
      width: 100px;
      padding-left: 5px;
    }
    .weather-icon {
      padding: 0px;
      margin: 0px;
      display: flex;
      justify-content: center;
    }
    .weather-temperature {
      display: flex;
      justify-content: center;
      padding-left: 45px;
    }
  }
}
</style>