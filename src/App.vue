<template>
  <div id="app">
    <div class="main-content" id="about">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: white;
  font-family: "Montserrat", "Press Start 2P", "Arvo", sans-serif;
}

.main-content {
  text-align: center;
  place-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

.navy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 1rem;
  margin-top: 1rem;
}

.links {
  margin-bottom: 1rem;
  opacity: 1;
  -webkit-transition: all 2s;
  -o-transition: all 2s;
  transition: all 2s;
}

@media only screen and (max-width: 600px) {
  .links {
    opacity: 0;
    -webkit-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
