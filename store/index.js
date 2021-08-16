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
                localStorage.setItem('tweet', JSON.stringify(state.allTweet))
            }
        },

        actions: {
            addTweet: ({ commit }, tweet) => {
                commit('addTweet', tweet)
            },
            deletedTweet: ({ commit }, id) => {
                commit('deletedTweet', id)
            }
        },
    })
}

export default createStore;