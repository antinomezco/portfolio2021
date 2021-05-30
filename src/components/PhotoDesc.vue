<template>
  <div class="hero"  id="hero">
    <img src="../assets/myself.jpg">
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "I'm Constantino, a trilingual (English, French and Spanish) Full Stack developer based in Montreal, specializing in web development using VueJS as a frontend alongside Django or Express as a backend, as well as a translator."
    }
  }
}
</script>

<style scoped>
img {
  border: 3px solid gray;
  border-radius: 50%;
  height: 200px;
  float: left;
  margin-right: 1rem;
  transition-duration: 5s;
  
  cursor: pointer;
}

p {
  float: right;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 120%;
  /* max-width: 50%; */
}

.hero {
  padding-top: 300px;
  margin-bottom: 500px;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  display:flex;
}

/* img:active {
  transition-timing-function: linear;
  animation: rotate 5s infinite;
} */

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

/* .fade-in-image {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}
@keyframes fadeIn {
  
  0% {opacity:0; transform: translateX(-50px);}
  100% {opacity:1; transform: translateX(0);}
}

@-moz-keyframes fadeIn {
  0% {opacity:0; }
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
} */
</style>