<template>
  <div class="skills">
    <div class="skills-container">
      <h2 class="title">
        Skills
      </h2>
      <h3>
        My developer and tech skills
      </h3>
      <div class="skills-list-container">
        <div v-for="skill in skills" :key="skill.name" class="skills-list">
          <a target="_blank" class="skills-list" :href="skill.web"
            ><img
              :src="require(`../assets/${skill.name}.png`)"
              :alt="skill.alt"
              :title="skill.alt"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "js",
          alt: "JavaScript",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript",
        },
        {
          name: "html",
          alt: "HTML5",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          name: "css",
          alt: "CSS3",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
        },
        { name: "vue", alt: "VueJS", web: "https://vuejs.org/v2/guide/" },
        {
          name: "node",
          alt: "NodeJS",
          web: "https://developer.mozilla.org/en-US/docs/Glossary/Node.js",
        },
        { name: "expressjs", alt: "express", web: "https://expressjs.com/" },
        // { name: "python", alt: "Python" },
        {
          name: "django",
          alt: "Django",
          web: "https://learndjango.com/tutorials/what-django-python",
        },
        { name: "prismic", alt: "Prismic", web: "https://prismic.io/" },
        {
          name: "postgres",
          alt: "Postgres",
          web: "https://www.postgresql.org/about/",
        },
        { name: "git", alt: "git", web: "https://git-scm.com/" },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  background-color: orange;
  padding: 200px 0 100px;
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

h3,
.title {
}

.skills-list-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.skills-list {
  display: flex;
  margin: 1rem;
  width: 100px;
  height: 100px;
}

@media only screen and (max-device-width: 1024px) {
  .skills-list-container {
    width: 80%;
  }
  .skills {
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
  padding: 180px 0 100px;
}
}

img {
  transition: all linear 0.1s;
}

img:hover {
  transform: scale(1.01);
}
</style>
