<template>
  <div class="hero" id="hero">
    <div class="hero-container">
      <div class="who-am-i">Who am I?</div>
      <div>
        <img src="../assets/myself.jpg" />
        <div class="hero-desc">
          <p>{{ desc }}</p>
          <div>button</div>
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
        "I'm Constantino, a trilingual (English, French and Spanish) Full Stack developer based in Montreal, specializing in web development using VueJS as a frontend alongside Django or Express as a backend, as well as a translator.",
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
  transition-duration: 5s;

  cursor: pointer;
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
  padding-bottom: 150px;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
}

.hero-container {
  padding-top: 300px;

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
}
</style>
