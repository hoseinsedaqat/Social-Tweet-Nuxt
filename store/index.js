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
            },
            saveTweet: (state) => {
                if (localStorage.getItem('tweet')) {
                    state.allTweet = JSON.parse(localStorage.getItem('tweet'));
                }
            },
            deletedTweet: (state, id) => {
                state.allTweet.splice(id, 1);
                localStorage.setItem('tweet', JSON.stringify(state.allTweet));
            },
            changeTweetOne: (state, tweet) => {
                var forChangeTweet = state.allTweet[Number(tweet.route) - 1];
                if (forChangeTweet.id === tweet.id) {
                    // of course for test and after that redesign it
                    console.log('true')
                    forChangeTweet.tweet = tweet.tweet;
                    localStorage.setItem('tweet', JSON.stringify(state.allTweet));
                } else {
                    // of course for test and after that redesign it
                    console.log('false')
                }
            }
        },

        actions: {
            addTweet: ({ commit }, tweet) => {
                commit('addTweet', tweet)
            },
            deletedTweet: ({ commit }, id) => {
                commit('deletedTweet', id)
            },
            changeTweetOne: ({ commit }, tweet) => {
                commit('changeTweetOne', tweet)
            }
        },
    })
}

export default createStore;
