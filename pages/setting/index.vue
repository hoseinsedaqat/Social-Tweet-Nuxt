<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto py-4">
          <h3 class="display-5 text-dark">I have not Idea yet</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  mounted() {
    if (localStorage.getItem("user") === null) {
      this.$router.push("/");
    } else {
      return;
    }
  },
};
</script>
