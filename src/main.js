import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Added gsap and ScrollTrigger to the main.js file to avoid having to import gsap and its plugins in each file that requires gsap animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//this mixin in the main.js file allows me to use this.gsap
//the reason why it's not its own file is because the scope of the project doesn't require it, since it's the only thing I'm adding besides vue router
Vue.mixin({
  created: function () {
    this.gsap = gsap;
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
