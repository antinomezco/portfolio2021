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
          <img :src="require(`../assets/${skill.name}.png`)" :alt="skill.alt" :title="skill.alt"/>
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
        { name: "js", alt: "JavaScript" },
        { name: "html", alt: "HTML5" },
        { name: "css", alt: "CSS3" },
        { name: "vue", alt: "VueJS" },
        { name: "node", alt: "NodeJS" },
        { name: "expressjs", alt: "express" },
        // { name: "python", alt: "Python" },
        { name: "django", alt: "Django" },
        { name: "prismic", alt: "Prismic" },
        { name: "postgres", alt: "Postgres" },
        { name: "git", alt: "git" },
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

h3{
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  
}

h3,.title {
  color: white;
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

.skills-list{
  display: flex;
  margin: 1rem;
  width: 100px;
  height: 100px;
}
</style>
