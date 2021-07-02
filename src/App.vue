<template>
  <div class="App" :class="mode">
   <Header :mode="mode" @toggle="toggle" />
    <app-Header></app-Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "@/components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Slider from "./components/Home-Slider.vue";
import Smartphones from "./components/Smartphones.vue";

export default {
  name: 'App',
  data() {
    return {
      text: "Hello World",
    };
  },
   data(){
    return{
      mode: 'light'
    }
  },
  created (){
    window.addEventListener('keyup', this.keyPress)
  },

  methods: {
    keyPress (e){
      if(e.key === 'd'){
        this.toggle()
      }
    },

    toggle () {
      if(this.mode === "dark"){
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  components: {
    appFooter:Footer,
    Header,
    Slider
  },
  directives: {
    "local-hightlight": {
      bind(el, binding, vnode) {
        el.style.color = "blue";
      },
    },
  },
}
</script>

<style>
@import "../src/assets/style.css";
</style>
