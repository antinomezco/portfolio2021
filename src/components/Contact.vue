<template>
  <div class="contact"  id="contact">
    <p>Send me an email at<a href="mailto:csaldanawebdev@gmail.com">csaldanawebdev@gmail.com</a> or call me at </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 120%;
  /* max-width: 50%; */
}

.contact {
  padding-top: 300px;
  margin-bottom: 500px;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  display:flex;
}
</style>