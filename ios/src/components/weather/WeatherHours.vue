<template>
<div class="weather-hour-wrapper" v-if="weatherHours">
  <hr>
  <div v-for="(weather,i) of weatherHours.data" :key="i" class="item">
    <div class="weather-time">{{timeConverter(weather.time)}}</div>
    <div class="img"><img :src="renderIcon(weather.icon)" alt=""></div>
    <div class="weather-temperature">{{weather.temperature}}°</div>
  </div>
</div>
  <div v-else ><h1>DOWNLOAD</h1></div>
</template>

<script>


export default {
  name: "WeatherHours",
  props: {
    weatherHours:{
      type:Object
    }
  },
  data(){
    return {
    }
  },
  computed: {
    times(){
      return this.weatherHours.data.map((v) => {
        return v.time
      })
    },
    icons(){
      return this.weatherHours.data.map((v) => {
        return v.icon
      })
    }
  },
  methods: {
    timeConverter(unix_timestamp) {
      const date = new Date(unix_timestamp * 1000);
      return date.getHours();
    },
    renderIcon(icon){
      return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-hour-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  font-size: 30px;
  img {
    max-width: 70px;
    max-height: 70px;
  }
  .weather-time {}
  .img {}
  .weather-temperature {}
}
}
</style>