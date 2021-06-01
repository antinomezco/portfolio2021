<template>
  <div class="home">
    <Intro />
    <Skills />
    <PhotoDesc/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects.vue'
import PhotoDesc from '@/components/PhotoDesc.vue'
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue'
import Intro from '@/components/Intro.vue'


export default {
  name: 'Home',
  components: {
    Projects,
    PhotoDesc,
    Contact,
    Skills,
    Intro
  }
}
</script>
