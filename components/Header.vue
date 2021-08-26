<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">Tweet Nuxt</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/login" v-if="!auth"
              >Join Us</nuxt-link
            >
          </li>
          <li class="nav-item" v-if="auth">
            <nuxt-link class="nav-link active" to="/post">Post</nuxt-link>
          </li>
          <li class="nav-item dropdown" v-if="auth">
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ userData.name }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <nuxt-link class="dropdown-item" to="/profile"
                  ><i class="fas fa-user"></i> Profile</nuxt-link
                >
              </li>
              <li>
                <!-- i got lesson -->
                <!-- <a class="dropdown-item" href="/tweet"
                  ><i class="fas fa-newspaper"></i> Add Tweet
                </a> -->
                <!-- i got lesson -->
                <nuxt-link class="dropdown-item" to="/tweet"
                  ><i class="fas fa-newspaper"></i> Add Tweet</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="dropdown-item" to="/setting"
                  ><i class="fa fa-cog"></i> Setting</nuxt-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="/login" @click="logOut()">
                  <i class="fa fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      auth: false,
      userData: [],
    };
  },
  methods: {
    ...mapActions(["logOut"]),
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.userData = JSON.parse(localStorage.getItem("user"));
      this.auth = true;
    } else {
      this.auth = false;
    }
  },
};
</script>

<style></style>