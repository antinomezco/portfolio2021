<template>
  <div class='header'>
    <div class="navy-header">
      <!-- <router-link class="links-header" to="/">Home</router-link> -->
      <div class="links-header" @click="scroll(about)">Home</div> 
      <div class="links-header" @click="scroll(projects)">Projects</div> 
      <div class="links-header" @click="scroll(contact)">Contact</div> 
      <!-- <router-link class="links-header" to="/mystery">Mystery</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: "about",
      projects: "projects",
      contact: "contact"
    }
  },
  methods: {
    scroll(id) {  
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  /* background-color: grey; */
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}

.navy-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2rem;
  
}

.links-header {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 110%;
  color: black;
  cursor: pointer;
}

.links-header:hover {
  border-bottom: 2px solid #ffff01;
  color: #ffff01;
}

/* @media only screen and (min-width: 600px) {
  .links-header {
    opacity: 0;
    transition: all .25s;
    visibility: hidden;
  }
} */
</style>