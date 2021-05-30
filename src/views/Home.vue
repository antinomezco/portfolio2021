<template>
  <div class="home">
    <PhotoDesc/>
    <HelloWorld/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PhotoDesc from '@/components/PhotoDesc.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PhotoDesc,
    Contact
  }
}
</script>
