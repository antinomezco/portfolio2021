<template>
  <div class="hero" id="hero">
    <div class="hero-container">
      <h2 class="who-am-i">Who am I?</h2>
      <div>
        <img src="../assets/myself.jpg" />
        <div class="hero-desc">
          <p>{{ desc }}</p>
          <div class="resume">Check out my resumé</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc:
        "I'm Constantino, a trilingual (English, French and Spanish) Full Stack developer based in Montreal, specializing in web development using VueJS as a frontend alongside Django or Express as an API backend, as well as a translator.",
    };
  },
};
</script>

<style scoped>
img {
  border: 3px solid gray;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 1rem;
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
  display: flex;
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
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
}

.hero-container {
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.hero-desc {
  display: flex;
  flex-direction: column;
}

.who-am-i {
  font-size: 200%;
  color: purple;
  padding-bottom: 50px;
  font-family: Montserrat;
}

.resume {
  margin: auto;
  width: 18%;
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

.resume:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.resume:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>
