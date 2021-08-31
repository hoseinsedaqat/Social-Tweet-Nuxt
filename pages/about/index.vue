<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-8 py-4">
          <h1 class="display-5">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
            voluptas ducimus rerum veniam, tempore ipsam fugiat, odit nostrum minus quis
            sapiente eius explicabo magni. Est ipsam alias quasi rerum accusamus fugiat
            quae obcaecati tempora? Quo itaque, dicta ullam ipsum odio, aperiam quae optio
            doloremque quam hic facilis veniam unde mollitia aliquam blanditiis harum
            sunt, possimus quas perferendis! Quasi nostrum eos architecto aliquam,
            adipisci eaque repudiandae, minima at commodi rem nulla quaerat, maiores
            minus! Ipsa, nobis et! Itaque ipsum nam fugiat laboriosam officiis dolore
            doloribus explicabo accusantium nulla sint iusto maiores quasi aliquam ad
            numquam minus architecto harum, fuga alias beatae. Id cum soluta tempore, ad
            blanditiis sapiente alias deleniti recusandae quos quod, quisquam expedita
            laudantium eveniet beatae architecto maiores minus ipsum nostrum placeat
            pariatur voluptatum rem fuga repellat. Asperiores beatae impedit laudantium,
            placeat repellat quo repellendus? Enim nesciunt, molestias aperiam, amet
            tempora, veritatis reiciendis labore doloribus et nihil accusantium debitis
            corporis aliquid? Amet voluptate quae modi reprehenderit atque ad quibusdam
            molestiae error quas pariatur. Natus distinctio architecto fugiat quo
            recusandae velit numquam neque, hic laborum debitis mollitia repellendus
            ducimus id et sapiente. Temporibus reprehenderit distinctio ducimus? Ducimus,
            quae quia quisquam incidunt quidem a. Temporibus reprehenderit adipisci quo
            ullam, et officia natus ab corrupti, laudantium saepe nihil soluta minus?
            Esse, dolorum itaque eum earum voluptas alias quidem repellendus maxime
            dolores, rem iusto odit laboriosam? Molestiae ullam reprehenderit suscipit
            deleniti odit numquam exercitationem asperiores consequuntur. Accusamus ea
            similique et maiores nesciunt. Id perspiciatis, numquam deleniti expedita
            velit cupiditate, modi nobis saepe tenetur dignissimos ducimus natus? Suscipit
            officia maxime temporibus repudiandae totam quas at assumenda consequatur
            tempore animi magni voluptas quaerat asperiores necessitatibus nulla nisi
            aperiam vitae eius praesentium, culpa perferendis dolorem modi! Iure dicta,
            animi dolorem modi quas aliquid quasi voluptatibus! Explicabo eos magnam
            nesciunt veniam, accusantium sit facere hic quaerat incidunt.
          </p>
        </div>
        <div class="col-md-4 py-5">
          <div v-for="img in about" :key="img.id" class="my-5">
            <img :src="img.src" :alt="img.text" class="img-fluid" />
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-6 mx-auto py-4">
          <h3 class="text-center display-6 mb-4">Core Team</h3>
          <div class="d-flex flex-column align-items-center">
            <img
              src="@/assets/img/IMG_20210706_143416_edit1.jpg"
              alt=""
              class="my-team"
            />
            <h5 class="ms-2 mt-3">Hosein Sedaqat</h5>
            <p class="ms-2 text-muted">just a develoepr</p>
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
// import Image
import Nuxtjs from "@/assets/img/nuxt.png";
import Paypal from "@/assets/img/paypal.png";
import Laravel from "@/assets/img/laravel.png";

export default {
  name: "about",
  data() {
    return {
      about: [
        { src: Nuxtjs, text: "Nuxtjs" },
        { src: Paypal, text: "Paypal" },
        { src: Laravel, text: "Laravel" },
      ],
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>