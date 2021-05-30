<template>
  <div class="form-field">
    <label class="form-field__label" for="js-test">{{ label }}</label>
    <input
      id="js-test"
      class="form-field__input"
      name="test"
      type="text"
      v-model="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
};
</script>

<style scoped>
.form-field__label {
  display: block;
}
</style>
