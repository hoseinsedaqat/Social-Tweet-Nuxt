<template>
  <div class="errorPage">
    <h3 class="error">Sorry Page Is Not Found</h3>
    <nuxt-link to="/">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>

<style>
.errorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15rem 15rem 0 15rem;
  border: 2px solid gray;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 2px 6px 5px #ccc;
}

.error {
  font-family: "Courier New", Courier, monospace;
  color: red;
}

.errorPage a {
  color: #333;
  text-decoration: none;
}
</style>
