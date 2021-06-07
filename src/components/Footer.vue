<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <div @click="scroll()" class="footer-top-container">
          <img class="footer-top" src="../assets/up-arrow.png" alt="" />
        </div>
      </div>
      <div class="navy-footer">
        <a href="https://github.com/antinomezco" target="_blank"
          ><img class="links-footer" src="../assets/github.png" title="Github"
        /></a>
        <a
          class="resume"
          href="https://drive.google.com/file/d/1j8Tsc7AGqAvY_QPRSnIY-d7QFMdKAGyx/view?usp=sharing"
          target="_blank"
          ><img class="links-footer" src="../assets/cv.png" title="Resumé"
        /></a>
        <a
          href="https://www.linkedin.com/in/constantinosaldana/?locale=en_US"
          target="_blank"
          ><img class="links-footer" src="../assets/linkedin.png" title="LinkedIn"
        /></a>
      </div>
      <hr />
      <div class="footer-name">
        <p>© 2021 - Constantino Saldana</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scroll() {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth",
      });
    },
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

.footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: black;
  height: 275px;
  width: 100%;
  bottom: 0;
}

.container {
  width: 300px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 0 auto;
}

hr {
  margin-top: 1rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #2c3e50;
}

.navy-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

.links-footer {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 110%;
  margin: 1rem 1rem;
  width: 40px;
  height: 40px;
  -webkit-transition: all linear 0.1s;
  -o-transition: all linear 0.1s;
  transition: all linear 0.1s;
}

.footer-top-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding-bottom: 1rem;
}

.footer-top {
  width: 25px;
  height: 25px;
  cursor: pointer;
  -webkit-transition: all linear 0.1s;
  -o-transition: all linear 0.1s;
  transition: all linear 0.1s;
}

.footer-top:hover {
  -webkit-transform: translateY(-2px);
      -ms-transform: translateY(-2px);
          transform: translateY(-2px);
}

.links-footer:hover {
  -webkit-transform: translateY(-2px);
      -ms-transform: translateY(-2px);
          transform: translateY(-2px);
}

.footer-name {
  text-align: center;
  color: darkgray;
  font-size: 75%;
  width: 300px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 0 auto;
}
</style>
