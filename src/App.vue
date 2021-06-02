<template>
  <div id="app">
    <!-- <MainHeader /> -->
    <!-- <MainNav>
      <div class="navy">
        <router-link class="links" to="/">Home</router-link> 
        <router-link class="links" to="/about">About</router-link> 
        <router-link class="links" to="/mystery">Mystery</router-link>
      </div>
    </MainNav> -->
    <div class="main-content"  id="about">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import MainHeader from "@/components/MainHeader.vue";
import Footer from "@/components/Footer.vue";
// import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    // MainHeader,
    Footer
    // MainNav,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: white;
  font-family: 'Montserrat', 'VT323', sans-serif;
}

.main-content {
  display: grid;
  margin-top: 50px;
  /* margin-left: 100px; */
  /* padding: 1rem; */
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
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-top: 1rem
}

.links {
  margin-bottom: 1rem;
  opacity: 1;
  transition: all 2s;
}

@media only screen and (max-width: 600px) {
  .links {
    opacity: 0;
    transition: all .25s;
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
