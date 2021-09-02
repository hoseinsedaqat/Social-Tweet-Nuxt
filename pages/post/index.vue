<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div v-if="allTweet.length > 0">
          <div class="col-md-8 mx-auto py-5 my-4 px-4 p-5">
            <ul class="list-group" v-for="(post, index) in allTweet" :key="(post, index)">
              <li class="list-group-item bg-dark text-light my-2">
                <div class="card bg-dark tect-light p-3">
                  <div class="card-body">
                    <p class="card-title text-muted">
                      Created by {{ userData.name }} at {{ post.data }}
                    </p>
                    <p class="card-text border border-muted p-3 py-5">
                      {{ post.tweet }}
                    </p>
                    <div class="d-flex flex-row">
                      <p class="me-4">
                        <i
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Deleted Tweet"
                          class="fa fa-trash"
                          :style="{ color: 'red', cursor: 'pointer' }"
                          @click="deletedIdxTweet(index)"
                        ></i>
                      </p>
                      <p>
                        <nuxt-link class="no" :to="`post/${index + 1}`"
                          ><i
                            class="fas fa-edit"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Change Tweet"
                          ></i
                        ></nuxt-link>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <div class="container">
            <div class="row">
              <div class="col-md-6 mx-auto py-4">
                <h3>Not Tweet</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
// components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "post",
  data() {
    return {
      userData: [],
      like: 0,
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  methods: {
    ...mapActions(["deletedTweet"]),
    deletedIdxTweet(index) {
      this.$swal("deleted Tweet Successfully");
      this.deletedTweet(index);
    },
  },
  computed: {
    ...mapState(["allTweet"]),
    ...mapMutations(["saveTweet"]),
  },
  mounted() {
    this.saveTweet;
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user") === null) {
      this.$router.push("/");
    } else {
      return;
    }
  },
};
</script>