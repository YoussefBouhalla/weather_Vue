<script>
import axios from 'axios'
import IconSearchVue from './icons/IconSearch.vue';

export default {
    components: {
       IconSearchVue
    },
    data () {
        return {
            cities: []
        };
    },
    methods: {
        setSelectedCity(e) {
            let selectedCity = this.cities.filter((city) => city.city === e.target.value)[0]
            this.$emit('setSelectedCity', selectedCity)
        }  
    },
    mounted() {
        axios.get(`src/assets/ma.json`).then(response => {
            this.cities = response.data
        }).catch(err => {
            console.log(err.message);
        })
    },
}
</script>

<template>
  <div class="search mx-auto my-2 px-2">
    <i class="search-icon"><IconSearchVue/></i>
    <div class="search-container">
        <input type="text" list="my-list-id" class="search-input" @change="setSelectedCity">
        <datalist id="my-list-id">
            <option v-for="city in cities">{{ city.city }}</option>
        </datalist>
    </div>
  </div>
</template>

<style scoped>
    .search{
        display: flex;
        gap: 10px;
        width: 50%;
        height: 40px;
        background-color: white;
        border-radius: 6px;
        border: solid .5px rgba(158, 158, 158, 0.534);
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        align-items: center;
    }
    .search > .search-container {
        width: 100%;
    }
    .search > .search-container > .search-input {
        width: 100%;
        border: none;
        outline: none;
        height: 100%;
    }
    .search > .search-container > .search-input::-webkit-calendar-picker-indicator {
        transform: translateY(-5px);
        opacity: 100;
    }
    .search > .search-icon{
        transform: translateY(-3px);
    }
</style>
