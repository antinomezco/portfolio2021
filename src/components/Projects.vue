<template>
  <div class="Projects" id="projects">
    <div class="container">
      <h3>Projects</h3>
      <div v-for="box in boxes" :key="box.name" class="boxes">
        <div class="full-box">
          <div class="left-box">
            <h4 class="project-title">
              {{ box.title }}
            </h4>
            <div class="text-desc">
              <p>
                {{ box.desc }}
              </p>
              <p>
                Technologies used: <span> {{ box.tech }}</span>
              </p>
            </div>
            <div class="below-text-desc">
              <div class="live-demo">Live demo</div>
              <div class="source-code">Source Code</div>
            </div>
          </div>
          <div class="right-box">
            <img :src="require(`../assets/${box.name}.png`)" alt="" />
            <!-- <img src="../assets/recipe.png" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      boxes: [
        {
          id: 1,
          name: "recipe",
          title: "Recipe Database",
          link: "https://cookingnuxt.herokuapp.com/",
          img: "",
          tech: "Nuxt (Vuejs + Vuetify), Django, Auth0, Firebase",
          desc:
            "Simple searchable recipe website using VueJS (with Vuetify) and Django (custom API). Dynamically created recipe pages. Authentication through Auth0, varied search, CRUD and image storage through Firebase storage buckets. Visuals and admin page are currently pending.",
        },
        {
          id: 2,
          name: "quasargram",
          title: "Quasargram",
          link: "https://quasargram-89a89.firebaseapp.com/#/",
          img: "",
          tech: "Quasar (Vuejs, Express, NodeJS, Firebase",
          desc:
            "Simple Instagram look-alike page using a Vuejs (with Quasar) NodeJS Express. Allows for uploading of photos from the local file system or from the device's webcam if available. Features pending: multi-users, authentication through Auth0, deletion of posts",
        },
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
        return "logo";
      }
      return "nothing";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Projects {
  /* background-color: greenyellow; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: royalblue; */
  align-items: center;
  /* max-width: 90%; */
  padding-top: 10px;
  padding-bottom: -15rem;
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 20%; */
  /* max-width: 80%; */
}

.container {
  width: 55%;
}

h3 {
  margin-bottom: 5rem;
}

img {
  margin-top: 2rem;
  margin-left: 10rem;
  height: 275px;
  width: 450px;
  border-radius: 5%;
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

img:active {
  transform: scale(0.99);
}

.live-demo {
  /* margin: auto; */
  margin-left: 3rem;
  margin-right: 6rem;
  width: auto;
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

.live-demo:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.live-demo:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

.source-code {
  color: purple;
  cursor: pointer;
  transition: all ease-in 0.25s;
}
.source-code:hover {
  transform: scale(1.1);
}
.source-code:hover:active {
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}


.below-text-desc {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text-desc {
  text-align: left;
}

.full-box {
  /* background-color: salmon; */
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
}

 .left-box {
  margin-left: 5rem;
}

.project-title {
  font-size: 150%
}
</style>
