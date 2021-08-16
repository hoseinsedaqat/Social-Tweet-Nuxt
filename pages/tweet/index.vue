<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto py-4">
          <div class="p-3 py-4">
            <div class="card-body">
              <form @submit.prevent="createTweet">
                <div class="form-group">
                  <label for="tweet" class="py-2 text-muted">What's happening?</label>
                  <textarea
                    class="form-control"
                    id="tweet"
                    rows="11"
                    v-model="tweet"
                  ></textarea>
                </div>
                <button class="my-3 btn btn-primary text-light w-100">Tweet it</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
// components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "tweet",
  data() {
    return {
      tweet: "",
    };
  },
  validations: {
    tweet: {
      required,
    },
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  computed: {
    ...mapState(["allTweet"]),
  },
  methods: {
    ...mapActions(["addTweet"]),
    createTweet() {
      if (this.$v.$invalid) {
        this.$swal("Please Enter Content!");
        return;
      } else {
        this.$v.$touch();
        const newTweet = {
          id: Math.random().toString(36).slice(2),
          tweet: this.tweet,
          data: new Date().getHours() + ":" + new Date().getMinutes(),
        };
        this.addTweet(newTweet);
        this.tweet = "";
        this.$router.push("/post");
      }
    },
  },
  mounted() {
    this.allTweet;
    if (localStorage.getItem("user") === null) {
      this.$router.push("/");
    } else {
      return;
    }
  },
};
</script>

<style></style>
