<template>
  <div>
    <div class="login-show">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto py-5">
            <h3>Login From</h3>
            <p class="text-dark">
              you should be fill form to login tweet Nuxt thank you
              <i class="fa fa-exclamation-triangle text-danger" aria-hidden="true"></i>
            </p>
            <div class="card p-3">
              <div class="card-body">
                <form @submit.prevent="signup">
                  <div class="form-group py-2">
                    <label for="name" class="py-1" :style="{ style }">Name:</label>
                    total price: {{ total }}
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-control"
                      v-model="user.name"
                    />
                  </div>
                  <div class="form-group py-2">
                    <label for="email" class="py-1">Email:</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-control"
                      v-model="user.email"
                    />
                  </div>
                  <div class="form-group py-2">
                    <label for="password" class="py-1">Password:</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      class="form-control"
                      v-model="user.password"
                    />
                  </div>
                  <div class="py-2">
                    <button class="btn btn-primary text-light w-100" @click="signup()">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as validators from "vuelidate/lib/validators";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
export default {
  name: "login",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(30),
      },
      email: {
        required,
        email,
        minLength: minLength(3),
        maxLength: maxLength(30),
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(30),
      },
    },
  },
  computed: {
    style() {
      return { width: "200" + "px" };
    },
  },
  methods: {
    // $v for vuelidate package
    signup() {
      if (this.$v.$invalid) {
        this.$swal(
          "Please sure right name,email and good password thanks Hosein Sedaqat"
        );
        return;
      } else {
        this.$v.$touch();
        localStorage.setItem("user", JSON.stringify(this.user));
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.$router.push("/");
    } else {
      return;
    }
  },
};
</script>
