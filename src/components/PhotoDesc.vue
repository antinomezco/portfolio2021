<template>
  <div class="hero" id="hero">
    <div class="hero-container" ref="heroContainer">
      <h2 class="who-am-i">Who am I?</h2>
      <div class="who-am-i-container">
        <img src="../assets/myself.jpg" />
        <div class="hero-desc">
          <p>{{ desc }}</p>
        </div>
      </div>
      <div class="projects-link" @click="scroll()">Check out my projects</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cv: "https://drive.google.com/file/d/1j8Tsc7AGqAvY_QPRSnIY-d7QFMdKAGyx/view?usp=sharing",
      desc:
        "I'm Constantino, a trilingual (English, French and Spanish) Full Stack developer based in Montreal, specializing in web development using VueJS as a frontend alongside Django or Express as an API backend, as well as a translator.",
    };
  },
  methods: {
    scroll() {  
      document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.gsap.fromTo(
      this.$refs.heroContainer,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        scrollTrigger: {
          trigger: this.$refs.heroContainer,
          start: "top center+=200px",
          end: "top center+=100px",
        },
        duration: 1,
        autoAlpha: 1,
        x: 0,
      }
    );
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

img {
  border: 3px solid gray;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 1rem;
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
  -webkit-transition: all 0.25s ease-in;
  -moz-transition: all 0.25s ease-in;
  -o-transition: all 0.25s ease-in;
  -ms-transition: all 0.25s ease-in;

  cursor: pointer;
}
img:active {
  -webkit-transform: rotate(330deg);
  -moz-transform: rotate(330deg);
  -o-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
}

p {
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 120%;
  color: white;
  /* max-width: 50%; */
}

.hero {
  width: 100%;
  background-color: black;
  padding-bottom: 200px;
  padding-top: 100px;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
}

.hero-container {
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.hero-desc {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.who-am-i {
  font-size: 200%;
  color: purple;
  padding-bottom: 50px;
  font-family: Montserrat;
}

.who-am-i-container {
  padding-bottom: 3rem;
}

.projects-link {
  margin: auto;
  width: 150px;
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
  text-decoration: none;
}

.projects-link:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.projects-link:active {
  -webkit-transform: scale(0.99);
      -ms-transform: scale(0.99);
          transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

@media only screen 
and (max-device-width : 1024px) {
  .who-am-i-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .who-am-i {
    width: 110%;
  }

  img {
    margin-left: auto;
    margin-right: auto;
  }

  .hero {
    padding-top: 25px;
    margin-left: auto;
    margin-right: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 94%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 94%);
  }
}
</style>
