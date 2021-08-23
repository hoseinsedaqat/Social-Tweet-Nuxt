<template>
  <div>
    <app-header></app-header>
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
 // for vuelidate
     e>
