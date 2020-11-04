require('./bootstrap');

import VueRouter from 'vue-router'
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
window.Vue = require('vue');
Vue.use(VueRouter)

Vue.component('home-component', require('./components/HomeComponent.vue').default);

// const router = new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/home',
//             name: 'home',
//             component: HomeComponent
//         }
//     ],
// });

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify()
});
