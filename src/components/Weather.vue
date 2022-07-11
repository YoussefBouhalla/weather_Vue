<script>
import IconCelsiusVue from './icons/IconCelsius.vue';

export default {
    components: {
       IconCelsiusVue
    },
    props: {
        weather: Object,
        selected_city: Object
    },
    data () {
        return {
            today: new Date(),
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        };
    }
}
</script>

<template>
  <div class="weather mx-auto my-2">
    <h3 class="my-2 mx-4">Weather in {{selected_city.city}}</h3>
    <div class="date-temperature d-flex w-100 p-4">
        <div class="w-50">
            <p class="day m-0">{{days[today.getDay()]}}</p>
            <p class="date m-0">{{ today.getDate() +' ' + months[today.getMonth()] + ' ' + today.getFullYear()}}</p>
        </div>
        <div class="w-50 d-flex align-items-center gap-2 justify-content-end">
            <div class="icon-holder">
                <img :src="'http://openweathermap.org/img/wn/'+ weather.weather[0].icon +'@2x.png'" alt="weather icon">
            </div>
            <div class="d-flex gap-1">
                <p class="m-0 degree">{{weather.main.temp}}</p>
                <i><IconCelsiusVue/></i>
            </div>
        </div>
    </div>
    <div class="weather-data p-4">
        <p class="m-0">Wind</p>
        <p class="m-0">ESE {{weather.wind.speed}} mps</p>
        <p class="m-0">Weather</p>
        <p class="m-0">{{weather.weather[0].description}}</p>
        <p class="m-0">Pressure</p>
        <p class="m-0">{{weather.main.pressure}} hPa</p>
        <p class="m-0">Humidity</p>
        <p class="m-0">{{weather.main.humidity}}%</p>
    </div>
  </div>
</template>

<style scoped>
    .weather {
        font-family: 'poppins';
        display: flex;
        flex-direction: column;
        width: 50%;
        background-color: white;
        border-radius: 6px;
        border: solid .5px rgba(158, 158, 158, 0.534);
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    h3 {
        font-size: 14px;
        font-weight: 500;
    }

    .date-temperature {
        background-color: rgb(241, 241, 241);
    }

    .day {
        font-size: 22px;
    }

    .date {
        font-size: 10px;
        font-weight: 500;
        color: rgb(182, 182, 182);
    }

    .icon-holder {
        height: fit-content;
        width: fit-content;
        background-color: rgb(217, 217, 217);
        border-radius: 50%;
    }

    .icon-holder > img {
        height: 60px;
        width: 60px;
        filter: drop-shadow(0px 10px 15px -3px rgba(0, 0, 0, 0.656))
    }

    .degree {
        font-size: 36px;
    }

    i {
        transform: translateY(10px);
    }

    .weather-data{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        row-gap: 10px;
    }

    .weather-data > p{
        font-size: 12px;
        font-weight: 500;
        color: rgb(85, 85, 85);
    }
    .weather-data > p:nth-child(even){
        font-weight: 600;
        color: rgb(31, 31, 31);
    }
</style>
