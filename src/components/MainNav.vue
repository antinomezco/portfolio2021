<template>
  <div class='nav'>
    <slot></slot>
  </div>
</template>

<style scoped>
.nav {
  background-color: lightblue;
  height: calc(100% - 50px);
  width: 100px;
  top: 50;
  position: fixed;
  transition: width 1s
}

/* .nav:active {
  width: 500px
} */

@media only screen and (max-width: 600px) {
  .nav {
    width: 0;
  }
}
</style>