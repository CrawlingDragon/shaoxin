import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem("token") || undefined // 从缓存中获取token
  },
  mutations: {
    setToken(state, data) {
      // 设置token
      window.localStorage.setItem("token", data);
    }
  },
  actions: {},
  modules: {}
});
