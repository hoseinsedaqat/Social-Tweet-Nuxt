<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto py-4">
          <div class="p-3 py-4">
            <div class="card-body">
              <form @submit.prevent="changeTweet">
                <div class="form-group">
                  <label for="tweet" class="py-2 text-muted">Change Your Tweet?</label>
                  <textarea
                    class="form-control"
                    id="tweet"
                    rows="11"
                    v-model="tweetData.tweet"
                  ></textarea>
                </div>
                <button class="my-3 btn btn-primary text-light w-100">
                  Change Tweet
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      tweetData: {},
      id: null,
    };
  },
  validations: {
    tweetData: {
      tweet: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["changeTweetOne"]),
    changeTweet() {
      // for vuelidate
      if (this.$v.$invalid) {
        this.$swal("Please Enter Content!");
        return;
      } else {
        // for vuelidate
        this.$v.$touch;
        this.changeTweetOne({
          id: this.tweetData.id,
          tweet: this.tweetData.tweet,
          data: this.tweetData.data,
          route: this.number,
        });
        // regular code
        // this.allTweet[this.$route.params.id - 1].tweet = this.tweetData.tweet;
        // localStorage.setItem("tweet", JSON.stringify(this.allTweet));
        this.$router.push("/post");
      }
    },
  },
  computed: {
    ...mapMutations(["saveTweet"]),
    ...mapState(["allTweet"]),
  },
  mounted() {
    this.saveTweet;
    this.tweetData = this.allTweet[this.$route.params.id - 1];
    this.number = this.$route.params.id;
    if (localStorage.getItem("user") === null) {
      this.$router.push("/");
    } else {
      return;
    }
  },
};
</script>
