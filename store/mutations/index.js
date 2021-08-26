export default {

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
            // console log for test
            console.log('true');
            forChangeTweet.tweet = tweet.tweet;
            localStorage.setItem('tweet', JSON.stringify(state.allTweet));
        } else {
            // console log for test
            console.log('false');
        }
    },

    logOut: () => {
        localStorage.clear();
    }
}