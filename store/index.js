import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({

        state: {
            allTweet: []
        },

        mutations: {
            addTweet: (state, tweet) => {
                state.allTweet.unshift(tweet);
                localStorage.setItem('tweet', JSON.stringify(state.allTweet));

