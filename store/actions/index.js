export default {

    addTweet: ({ commit }, tweet) => {
        commit('addTweet', tweet)
    },

    deletedTweet: ({ commit }, id) => {
        commit('deletedTweet', id)
    },
    
    changeTweetOne: ({ commit }, tweet) => {
        commit('changeTweetOne', tweet)
    }
}