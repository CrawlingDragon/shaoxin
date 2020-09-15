import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //64467
    uid: window.localStorage.getItem("uid"),
    mid: window.localStorage.getItem("mid") || 56915,
    token: window.localStorage.getItem("token") || undefined // 从缓存中获取token
  },
  mutations: {
    setToken(state, data) {
      // 设置token
      state.token = data;
      window.localStorage.setItem("token", data);
    },
    setUid(state, uid) {
      state.uid = uid;
      window.localStorage.setItem("uid", uid);
    },
    setMid(state, mid) {
      state.mid = mid;
      window.localStorage.setItem("mid", mid);
    }
  },
  actions: {},
  modules: {}
});
