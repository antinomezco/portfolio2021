<template>
  <div class="contact" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <p>Want to work with me?</p>
      <div class="sendMessage">Send me a message</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-size: 250%;
  font-family: "Montserrat"
}

p {
  /* display: flex; */
  align-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 200%;
  /* max-width: 50%; */
}

.contact {
  padding-top: 100px;
  padding-bottom: 100px;
  clip-path: polygon(0 0, 100% 24%, 100% 100%, 0 100%);
  /* width: 100%; */
  /* padding-left: 0; */
  /* padding-top: -1rem; */
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  flex-direction: column;
  background-color: gray;
}

.sendMessage {
  margin: auto;
  width: 200px;
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

.sendMessage:hover {
  background-position: left bottom;
  background-color: purple;
  color: black;
}

.sendMessage:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

@media only screen and (max-device-width: 1024px) {
  p {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
}
</style>
