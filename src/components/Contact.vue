<template>
  <div class="contact" id="contact">
    <div class="container" ref="animation">
      <h2>Contact</h2>
      <p>Want to work with me?</p>
      <a :href="email" class="sendMessage">Send me a message</a>
    </div>
  </div>
</template>

<script>
import { animation } from "./mixins/animation";
export default {
  mixins: [animation],
  data() {
    return {
      email: "mailto:info@csaldana.xyz",
    };
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

h2 {
  font-size: 250%;
  font-family: "Montserrat";
}

p {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 200%;
}

.contact {
  padding-top: 100px;
  padding-bottom: 100px;
  -webkit-clip-path: polygon(0 0, 100% 24%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 24%, 100% 100%, 0 100%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: orange;
}

.sendMessage {
  margin: auto;
  width: 200px;
  padding: 5px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, purple),
    color-stop(50%, white)
  );
  background: -o-linear-gradient(left, purple 50%, white 50%);
  background: linear-gradient(to right, purple 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: purple solid 2px;
  color: purple;
  cursor: pointer;
  -webkit-transition: all ease-in 0.25s;
  -o-transition: all ease-in 0.25s;
  transition: all ease-in 0.25s;
  font-size: 125%;
  text-decoration: none;
}

.sendMessage:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.sendMessage:active {
  -webkit-transform: scale(0.99);
  -ms-transform: scale(0.99);
  transform: scale(0.99);
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

@media only screen and (max-device-width: 1024px) {
  p {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
  .contact {
    -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  }
}
</style>
