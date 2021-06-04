<template>
  <div class="intro">
    <div class="intro-container">
      <div class="name-container">
        Hello, my name is <span class="name">Constantino Saldana</span>, web
        developer.
      </div>
      <div class="starship-troopers" @click="scroll()">
        Would you like to know more?
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, ScrollTrigger);

export default {
  methods: {
    scroll() {
      document.getElementById("skills").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  // mounted() {
  //   gsap.fromTo(".intro-container", {
  //     scrollTrigger: ".intro-container",
  //     autoAlpha: 0,
  //     x: -100,
  //   },{
  //     duration: 1,
  //     autoAlpha: 1,
  //     x: 0,
  //   });
  // },
};
</script>

<style scoped>
.intro {
  padding: 300px 0 350px;
}

.intro-container {
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.name {
  color: purple;
}

.name-container {
  font-family: Arvo;
  font-size: 250%;
  padding-bottom: 1.5rem;
}

.starship-troopers {
  margin: auto;
  width: 35%;
  padding: 5px;
  background: linear-gradient(to right, purple 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: purple solid 2px;
  color: purple;
  cursor: pointer;
  transition: all ease-in 0.25s;
  font-size: 125%;
}

.starship-troopers:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.starship-troopers:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

@media only screen and (max-device-width: 1024px) {
  .intro-container {
    width: 75%;
  }

  .intro {
    padding: 100px 0 0;
  }
}
</style>
