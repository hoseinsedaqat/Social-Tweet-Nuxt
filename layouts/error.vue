<template>
  <div>
    <h3 class="error">This is Error Page</h3>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>

<style>
.error {
  color: red;
}
</style>

