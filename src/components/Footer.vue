<template>
  <div class='header'>
    <div class="navy-header">
      <router-link class="links-header" to="/">Home</router-link> 
      <router-link class="links-header" to="/about">About</router-link> 
      <router-link class="links-header" to="/mystery">Mystery</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  /* background-color: grey; */
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
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