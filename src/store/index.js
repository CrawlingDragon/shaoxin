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
    hospitalIsStore: window.localStorage.getItem("hospitalIsStore"), //医院
    isMember: window.localStorage.getItem("isMember"), //是否是会员
    userName: window.localStorage.getItem("userName"), //用户名字
    userAvatar: window.localStorage.getItem("userAvatar"), //用户头像
    hospitalIsMember: window.localStorage.getItem("hospitalIsMember"), //是否是医院会员
    aiExpertId: window.localStorage.getItem("aiExpertId") //ai 智能专家id
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
    },
    setIsMember(state, isMember) {
      state.isMember = isMember;
      window.localStorage.setItem("isMember", isMember);
    },
    setUserName(state, userName) {
      state.userName = userName;
      window.localStorage.setItem("userName", userName);
    },
    setUserAvatar(state, userAvatar) {
      state.userAvatar = userAvatar;
      window.localStorage.setItem("userAvatar", userAvatar);
    },
    setHospitalIsMember(state, hospitalIsMember) {
      state.hospitalIsMember = hospitalIsMember;
      window.localStorage.setItem("hospitalIsMember", hospitalIsMember);
    },
    setAiExpertId(state, aiExpertId) {
      state.aiExpertId = aiExpertId;
      window.localStorage.setItem("aiExpertId", aiExpertId);
    }
  },
  actions: {},
  modules: {}
});
