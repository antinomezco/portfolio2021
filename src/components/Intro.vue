<template>
  <div class="intro">
    <div class="intro-container">
      <div class="name-container">
        Hello, my name is <span class="name">Constantino Saldana</span>, web developer.
      </div>
      <div class="starship-troopers">
        Would you like to know more?
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  padding: 300px 0 250px;
}

.intro-container {
  width: 43%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.name {
  color: purple;
}

.name-container {
  font-family: Montserrat;
  font-size: 250%;
  padding-bottom: 1.5rem;
}

.starship-troopers {
  margin: auto;
  width: 35%;
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

.starship-troopers:hover {
  background-position: left bottom;
  background-color: purple;
  color: black;
}

.starship-troopers:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>