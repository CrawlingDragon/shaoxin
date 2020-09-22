import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem("token") || undefined, // 从缓存中获取token
    uid: window.localStorage.getItem("uid"), //登录用户uid
    initMid: 56915, //绍兴市顶级医院mid
    mid: window.localStorage.getItem("mid"), //医院mid
    joinTime: window.localStorage.getItem("joinTime"), //用户加入医院的时间
    hospitalName: window.localStorage.getItem("hospitalName"), //医院名字
    hospitalIsStore: window.localStorage.getItem("hospitalIsStore") //医院
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
    },
    clearMid() {
      window.localStorage.clearItem("mid");
    },
    setJoinTime(state, joinTime) {
      state.joinTime = joinTime;
      window.localStorage.setItem("joinTime", joinTime);
    },
    setHospitalName(state, hospitalName) {
      state.hospitalName = hospitalName;
      window.localStorage.setItem("hospitalName", hospitalName);
    },
    setHospitalIsStore(state, hospitalIsStore) {
      state.hospitalIsStore = hospitalIsStore;
      window.localStorage.setItem("hospitalIsStore", hospitalIsStore);
    }
  },
  actions: {},
  modules: {}
});
