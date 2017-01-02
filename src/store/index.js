import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import { state, mutations } from './mutations';
//import createLogger from 'vuex/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug
});
