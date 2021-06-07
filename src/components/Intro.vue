<template>
  <div class="intro">
    <div class="intro-container" ref="introContainer">
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
export default {
  methods: {
    scroll() {
      document.getElementById("skills").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.gsap.fromTo(this.$refs.introContainer, { 
      autoAlpha: 0,
      x: -50,
    },{
      scrollTrigger: {
      trigger: this.$refs.introContainer,
      start: "top center+=200px",
      end: "top center+=100px",
    },
      duration: 1,
      autoAlpha: 1,
      x: 0,
    });
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.intro {
  padding: 300px 0 350px;
}

.intro-container {
  width: 45%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
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
  width: 200px  ;
  padding: 5px;
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, purple), color-stop(50%, white));
  background: -o-linear-gradient(left, purple 50%, white 50%);
  background: linear-gradient(to right, purple 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: purple solid 2px;
  color: purple;
  cursor: pointer;
  -webkit-transition: all ease-in 0.25s;
  -o-transition: all ease-in 0.25s;
  transition: all ease-in 0.25s;
  font-size: 125%;
}

.starship-troopers:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.starship-troopers:active {
  -webkit-transform: scale(0.99);
      -ms-transform: scale(0.99);
          transform: scale(0.99);
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

@media only screen and (max-device-width: 596px) {
  .intro-container {
    width: 75%;
  }

  .intro {
    padding: 150px 0;
  }
}

@media only screen and (min-device-width: 597px) and (max-device-width:1024px) {
  .intro-container {
    width: 75%;
  }

  .intro {
    padding: 200px 0;
  }
}
</style>
