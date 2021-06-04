import Vue from 'vue'
import App from './App.vue'
import router from './router'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, ScrollTrigger);

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
