<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto py-5">
          <h3 class="text-center"><i class="fa fa-user"></i></h3>
          <h3 class="text-center my-3">User Profile</h3>
          <div>
            <div class="card-body p-4">
              <ul class="list-group">
                <li class="list-group-item bg-dark text-light my-1">
                  <b class="badge bg-light text-dark">User Name</b> : {{ userData.name }}
                </li>
                <li class="list-group-item bg-dark text-light my-1">
                  <b class="badge bg-light text-dark">Email</b> : {{ userData.email }}
                </li>
                <hr />
                <h3 class="text-center my-2">Privacy and Policy</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                  cumque culpa rem, voluptatibus, itaque sapiente quos soluta quas
                  cupiditate consequuntur asperiores nobis adipisci, dolore veritatis
                  magni at. Ex aliquid hic cumque soluta ratione.
                </p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >I agree about privacy and policy</label
                  >
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Private Mode your Profile</label
                  >
                </div>
              </ul>
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
  name: "profile",
  data() {
    return {
      userData: {},
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user") === null) {
      this.$router.push("/login");
    } else {
      return;
    }
  },
};
</script>