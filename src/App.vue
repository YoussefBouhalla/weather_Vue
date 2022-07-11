<script>
import SearchVue from './components/Search.vue';
import WeatherVue from './components/Weather.vue';
import axios from 'axios'

export default {
  components: {
    SearchVue,
    WeatherVue
  },
  data () {
    return {
      weather : {},
      selected_city: {}
    };
  },
  methods: {
    async selectCity(selectedCity) {

      this.selected_city = await selectedCity

      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.selected_city.lat}&lon=${this.selected_city.lng}&units=metric&appid=9888b01199b9de72556b540091f98364`).then(response => {
        this.weather = response.data
      })

    }

  }
}
</script>

<template>
  <div id="app">
    <header>
      <SearchVue  @setSelectedCity="selectCity" />
    </header>
    <main>
      <WeatherVue v-if="weather.weather" :weather.sync="weather" :selected_city.sync="selected_city" />
    </main>
  </div>
</template>

<style>
@import './assets/base.css';

body {
  background-color: rgb(235, 235, 235);
}
</style>
