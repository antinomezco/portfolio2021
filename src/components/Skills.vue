<template>
  <div class="skills" id="skills">
    <div class="skills-container" ref="skillsContainer">
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
      <div class="who-am-i" @click="scroll()">
          Who am I?
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comp: "skills",
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
  methods: {
    scroll() {  
      document.getElementById("hero").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.gsap.to(".skills-container" , {
      scrollTrigger: {
      trigger: this.$refs.skillsContainer,
      start: "top center+=200px",
      end: "top center+=100px",
    },
  borderRadius: 50,
  x: 100,
  scale: 1.5,
  duration:1
})
    // this.gsap.fromTo(this.$refs.skillsContainer, { 
    //   autoAlpha: 0,
    //   x: -50,
    // },{
    //   scrollTrigger: {
    //   trigger: this.$refs.skillsContainer,
    //   start: "top center+=200px",
    //   end: "top center+=100px",
    // },
    //   duration: 1,
    //   autoAlpha: 1,
    //   x: 0,
    // });
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
  padding-bottom: 2rem;
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

.who-am-i {
  margin: auto;
  width: 7%;
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

.who-am-i:hover {
  background-position: left bottom;
  background-color: purple;
  color: white;
}

.who-am-i:active {
  transform: scale(0.99);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>
