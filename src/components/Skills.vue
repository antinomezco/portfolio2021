<template>
  <section class="skills" id="skills">
    <div class="skills-container" ref="animation">
      <h2 class="title">Skills</h2>
      <h3>My developer and tech skills</h3>
      <div class="skills-list-container">
        <div v-for="skill in skills" :key="skill.title" class="skills-list">
          <a target="_blank" class="skills-list" :href="skill.web"
            ><img
              :src="require(`../assets/${skill.title}.png`)"
              :alt="skill.alt"
              :title="skill.alt"
          /></a>
        </div>
      </div>
      <div class="who-am-i" @click="scroll()">Who am I?</div>
    </div>
  </section>
</template>

<script>
import { animation } from "./mixins/animation";
export default {
  mixins: [animation],
  data() {
    return {
      skills: [
        {
          title: "js",
          alt: "JavaScript",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript",
        },
        {
          title: "html",
          alt: "HTML5",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          title: "css",
          alt: "CSS3",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
        },
        { title: "vue", alt: "VueJS", web: "https://vuejs.org/v2/guide/" },
        { title: "react", alt: "react", web: "https://reactjs.org/" },
        {
          title: "node",
          alt: "NodeJS",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/Node.js",
        },
        { title: "expressjs", alt: "express", web: "https://expressjs.com/" },
        {
          title: "django",
          alt: "Django",
          web: "https://learndjango.com/tutorials/what-django-python",
        },
        {
          title: "gatsby",
          alt: "Gatsby",
          web: "https://www.gatsbyjs.com",
        },
        { title: "graphql", alt: "graphql", web: "https://graphql.org/" },
        {
          title: "postgres",
          alt: "Postgres",
          web: "https://www.postgresql.org/about/",
        },
        { title: "git", alt: "git", web: "https://git-scm.com/" },
      ],
    };
  },
  methods: {
    scroll() {
      //scrolls to the following component, hero
      document.getElementById("hero").scrollIntoView({
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

.skills {
  background-color: orange;
  padding: 200px 0 100px;
  -webkit-clip-path: polygon(0 22%, 100% 0%, 100% 100%, 0 100%);
  clip-path: polygon(0 22%, 100% 0%, 100% 100%, 0 100%);
}

.title {
  margin-bottom: 1rem;
  font-size: 200%;
  font-family: Montserrat;
}

h3 {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
}

.skills-list-container {
  width: 795px;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 5rem;
}

.skills-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1rem auto;
  width: 100px;
  height: 100px;
}

@media only screen and (max-device-width: 1024px) {
  .skills-list-container {
    width: 80%;
  }
  .skills {
    -webkit-clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    padding: 60px 0 100px;
  }
}

img {
  -webkit-transition: all linear 0.1s;
  -o-transition: all linear 0.1s;
  transition: all linear 0.1s;
  width: 100px;
}

img:hover {
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
}

.who-am-i {
  margin: auto;
  width: 110px;
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
}

.who-am-i:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.who-am-i:active {
  -webkit-transform: scale(0.99);
  -ms-transform: scale(0.99);
  transform: scale(0.99);
  -webkit-box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
</style>
