<template>
  <section class="Projects" id="projects" ref="animation">
    <div class="container">
      <h3>Projects or Contributions</h3>
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
              <div v-if="box.link">
                <a class="live-demo" :href="box.link" target="_blank"
                  >Live demo</a
                >
              </div>
              <div v-if="box.source">
                <a class="source-code" :href="box.source" target="_blank"
                  >Source Code</a
                >
              </div>
            </div>
          </div>
          <div class="right-box">
            <a :href="box.link" target="_blank"
              ><img :src="require(`../assets/${box.name}.png`)" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { animation } from "./mixins/animation";
export default {
  mixins: [animation],
  data() {
    return {
      boxes: [
        {
          id: 1,
          name: "recipe",
          title: "Recipe Database (frontend)",
          link: "https://agitated-hermann-0d809c.netlify.app/",
          img: "",
          source: "https://github.com/antinomezco/calaveria",
          tech: "Vuejs, Firebase, Auth0",
          desc: "Simple searchable recipe website using VueJS with authentication through Auth0. Dynamically created recipe pages, CRUD and image storage through Firebase storage buckets available.",
        },
        {
          id: 2,
          name: "reciperest",
          title: "Recipe Database (backend)",
          link: "https://github.com/antinomezco/cookingdb",
          img: "",
          source: "https://github.com/antinomezco/cookingdb",
          tech: "Django, Postgres, Rest",
          desc: "Django API for use in the Recipe Database (frontend). Allows for REST CRUD connection for users and recipes.",
        },
        {
          id: 3,
          name: "portfolio",
          title: "Portfolio page",
          link: "https://www.csaldana.xyz",
          img: "",
          source: "https://github.com/antinomezco/portfolio2021",
          tech: "Vuejs, Gsap",
          desc: "Simple portfolio page using only HTML, CSS, Vuejs and Gsap for the animations.",
        },
        {
          id: 4,
          name: "vuetify",
          title: "Vuetify documentation",
          link: "",
          img: "",
          source: "",
          tech: "None",
          desc: "Ongoing Spanish documentation translation for the Vuetify component library v3.",
        },
        {
          id: 5,
          name: "montreal-greeters",
          title: "Montreal Greeters",
          link: "",
          img: "",
          source: "",
          tech: "None",
          desc: "Web development assistance for the Montreal Greeters webpage.",
        },
      ],
    };
  },
  mounted() {
    const boxesAnim = this.gsap.utils.toArray(".boxes");
    boxesAnim.forEach((box) => {
      this.gsap.fromTo(
        box,
        {
          autoAlpha: 0,
          x: -50,
        },
        {
          scrollTrigger: {
            trigger: box,
            start: "top center+=200px",
            end: "top center+=100px",
          },
          duration: 1,
          autoAlpha: 1,
          x: 0,
        }
      );
    });
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

.Projects {
  padding-top: 10px;
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
  transition: all ease-in 0.25s;
  border: solid 1px gray;
}

img:hover {
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

img:active {
  -webkit-transform: scale(0.99);
  -ms-transform: scale(0.99);
  transform: scale(0.99);
}

.live-demo {
  margin-left: 3rem;
  margin-right: 6rem;
  width: auto;
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

.live-demo:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.live-demo:active {
  -webkit-transform: scale(0.99);
  -ms-transform: scale(0.99);
  transform: scale(0.99);
}

.live-demo,
.source-code {
  font-family: "Press Start 2P";
  font-size: 90%;
}

.source-code {
  color: purple;
  cursor: pointer;
  -webkit-transition: all ease-in 0.25s;
  -o-transition: all ease-in 0.25s;
  transition: all ease-in 0.25s;
  text-decoration: none;
}
.source-code:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.source-code:hover:active {
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

.below-text-desc {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: -2rem;
}

.text-desc {
  text-align: left;
}

.full-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}

.project-title {
  font-size: 150%;
  font-family: "Montserrat";
  color: purple;
}

@media only screen and (max-device-width: 1024px) {
  .full-box {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 80%;
  }

  .skills-list-container {
    justify-content: normal;
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
