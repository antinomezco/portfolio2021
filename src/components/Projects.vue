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
              <a class="live-demo" :href=box.link target="_blank">Live demo</a>
              <a class="source-code" :href=box.source target="_blank">Source Code</a>
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
          source:"https://github.com/antinomezco/cookingnuxt",
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
          source:"https://github.com/antinomezco/cookingnuxt",
          tech: "Quasar (Vuejs), Express, NodeJS, Firebase",
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

<style scoped>
.Projects {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; */
  padding-top: 10px;
  /* padding-bottom: -15rem;
  margin-left: auto;
  margin-right: auto; */
}

.container {
  /* width: 500px;
  margin-right: auto; 
  margin-left: auto; */
}

.boxes {
  /* width: 500px;
  margin-right: auto; 
  margin-left: auto; */
}

h3 {
  margin-bottom: 5rem;
  font-size: 200%;
  font-family: Montserrat;
  color: purple;
}

img {
  margin-top: 2rem;
  margin-left: 4rem;
  height: 275px;
  width: 450px;
  border-radius: 1%;
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
  text-decoration: none;
}

.live-demo:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.live-demo:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  /* box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); */
  /* Lowering the shadow */
}

.live-demo, .source-code {
  font-family: "Press Start 2P";
  font-size: 90%;
}

.source-code {
  color: purple;
  cursor: pointer;
  transition: all ease-in 0.25s;
  text-decoration: none;
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
  margin-left: -2rem;
}

.text-desc {
  text-align: left;
}

.full-box {
  /* background-color: salmon; */
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}

 .left-box {
  /* margin-left: 5rem; */
}

.project-title {
  font-size: 150%;
  font-family: "Montserrat";
  color: purple;
}

@media only screen and (max-device-width: 1024px) {
  .full-box {
    flex-direction: column;
    /* margin-left: -5rem; */
    width: 80%;
    /* padding: 5%; */
  }

  .projects {
    padding-top: 0;
  }

  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    margin-left: 0;
  }
}
</style>
