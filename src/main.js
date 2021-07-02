import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from "firebase";
import Slider from "./components/Home-Slider.vue";
import Smartphones from "./components/Smartphones.vue";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

import { routes } from './routes';

import store from "./store";

//Slider Created
Vue.component('app-home-slider',Slider);

//Smartphones Created
Vue.component('Smartphones',Smartphones);

//regjistrimi i filterit global per zvogelimin e shkronjave
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});

//regjistrimi i direktives globable highlight 
Vue.directive('highlight',{

  /* eslint-disable */
  bind(el, binding, vnode){
    //el.style.backgroundColor='blue';
    //el.style.backgroundColor=binding.value;
    if(binding.arg=='background'){
      el.style.backgroundColor=binding.value;
    }else{
      el.style.color=binding.value;
    }
  }
});


const configOptions = {
  apiKey: "AIzaSyB5Rm3187ezAUsGZvcK2hVN_X9gVM99BlY",
  authDomain: "vuejs-http-c77c5.firebaseapp.com",
  databaseURL: "https://vuejs-http-c77c5.firebaseio.com",
  projectId: "vuejs-http-c77c5",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

//Maps - Key
Vue.use(VueGoogleMaps,{
  load:{
    key: "AIzaSyB5Rm3187ezAUsGZvcK2hVN_X9gVM99BlY",
  },
});