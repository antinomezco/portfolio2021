<template>
  <div class="hello" id="projects">
    <div v-for="box in boxes" :key="box.name" class="boxes">
      <div class="full-box">
        <div class="front-box">
          <img :src="require(`../assets/${box.name}.png`)" alt="">
          <!-- <img src="../assets/recipe.png" alt=""> -->
        </div>
        <div class="back-box">
          {{box.desc}}
        </div>
      </div>
      <a :href=box.link class="project-name" target="_blank">{{box.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      boxes: [
        { id: 1, name: "recipe", link: "https://cookingnuxt.herokuapp.com/", img: "", desc: "Simple searchable recipe website using VueJS (with Vuetify) and Django (custom API). Dynamically created recipe pages. Authentication through Auth0, varied search, CRUD and image storage through Firebase storage buckets. Visuals and admin page are currently pending." },
        { id: 2, name: "quasargram", link: "https://quasargram-89a89.firebaseapp.com/#/", img: "", desc: "Simple Instagram look-alike page using a Vuejs (with Quasar) NodeJS Express. Allows for uploading of photos from the local file system or from the device's webcam if available. Features pending: multi-users, authentication through Auth0, deletion of posts" },
        // { id: 3, name: "quasargram", link: "www.google.com", img: "", desc: "" },
        // { id: 4, name: "quasargram", link: "www.google.com", img: "", desc: "" },
        // {id: 5, name: "testbox5", link: "www.google.com", img:""},
        // {id: 6, name: "testbox6", link: "www.google.com", img:""},
        // {id: 7, name: "testbox7", link: "www.google.com", img:""},
        // {id: 8, name: "testbox8", link: "www.google.com", img:""},
        // {id: 9, name: "testbox9", link: "www.google.com", img:""},
        // {id: 10, name: "testbox10", link: "www.google.com", img:""},
      ],
    };
  },
  computed: {
    pageImage() {
      if (!this.boxes.name) {
        return "logo"
      }
      return "nothing"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  /* background-color: greenyellow; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* max-width: 90%; */
  padding-top: 15%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20%;
  max-width: 80%;
}

.project-name {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  /* margin: 0 40%; */
  font-size: 110%;
  color: black;
  transition: all ease-in 0.25s;
}

.project-name:hover {
  border-bottom: 2px solid #ffff01;
  color: #ffff01;
}

img {
  height: 100%;
  width: 100%;
}

.boxes {
  border-radius: 2.5px;
  height: 225px;
  width: 400px;
  min-width: 250px;
  
  background-color: rgb(177,174,238);
  /* padding: 1rem; */
  /* display: block; */
  
  /* flex-direction: column; */
  /* align-content: center; */
  margin: 1.39rem;
  transition: all ease-in 0.25s;
}

/* .boxes:hover {
  width: 302px;
  box-shadow: -2px 2px #77aaff, -4px 4px #77aaff, -6px 6px #77aaff,
    -8px 8px #77aaff, -10px 10px #77aaff;
} */

/* This container is needed to position the front and back side */
.full-box {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin-bottom: 1rem;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.boxes:hover .full-box {
  transform: rotateY(180deg);
}

.front-box, .back-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.front-box {
  background-color: #bbb;
  color: black;
}

.back-box {
  background-color: rgb(177,174,238);
  padding: 0 1rem;
  color: black;
  transform: rotateY(180deg);
}
</style>
