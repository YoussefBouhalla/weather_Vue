import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css';

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

const app = createApp({
  render: () => h(App)
})

app.mount('#app')
