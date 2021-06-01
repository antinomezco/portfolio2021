<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <div @click="scroll()" class="footer-top-container"><img class="footer-top" src="../assets/up-arrow.png" alt=""
        /></div> 
      </div>
      <div class="navy-footer">
        <a href="https://github.com/antinomezco" target="_blank"
          ><img class="links-footer" src="../assets/github.png" alt=""
        /></a>
        <a href="https://www.linkedin.com/in/constantinosaldana" target="_blank"
          ><img class="links-footer" src="../assets/linkedin.png" to="/about"
        /></a>
        <a href="https://www.instagram.com/choconstant" target="_blank"
          ><img class="links-footer" src="../assets/instagram.png" to="/mystery"
        /></a>
      </div>
      <hr />
      <div class="footer-name">
        <p>2021 Constantino Saldana</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scroll() {  
      document.getElementById("about").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* padding-left: 1rem; */
  background-color: black;
  height: 275px;
  width: 100%;
  /* position: fixed; */
  bottom: 0;
}

.container {
  width: 20%;
  align-items: center;
  margin: 0 auto;
}

hr {
  margin-top: 1rem;
  align-items: center;
  color: #2c3e50;
}

.navy-footer {
  /* width: 20%; */
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5% auto;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
}

.links-footer {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 110%;
  width: 40px;
  height: 40px;
  transition: all linear 0.1s;
}

.footer-top-container {
  display: flex;
  justify-content: center;
}

.footer-top {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.footer-top:hover {
  transform: translateY(-2px);
}


/* .navy-footer:after{
  position: relative;
  content: '';
  width: 100%;
  height: 1px;
  background-color: gray;
  top: 50px;
  left: 0;
} */

.links-footer:hover {
  transform: translateY(-2px);
}

.footer-name {
  text-align: center;
  color: white;
}

/* @media only screen and (min-width: 600px) {
  .links-header {
    opacity: 0;
    transition: all .25s;
    visibility: hidden;
  }
} */
</style>
