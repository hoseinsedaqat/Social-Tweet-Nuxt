<template>
  <div>
    <app-header></app-header>
    <div class="showcase">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h1 class="mt-5 text-dark">Welcome to Social Tweet Nuxt</h1>
            <div>
              <a class="btn btn-dark text-light w-50" href="/login">Join Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style>

</style>
