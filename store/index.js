import Vuex from 'vuex';
import state from './state/index.js'
import actions from './actions/index.js';
import mutations from './mutations/index.js';

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions
    })
}

export default createStore;