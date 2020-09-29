
<template>
  <div id="app">
    <keep-alive exclude="Login,mLogin,findPassword,sign,lookExpert,live,searchOnline" include="index,hospital,applyVip">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["uid", "initMid"]),
  },
  watch: {
    uid() {
      this.getUserInfo();
    },
  },
  mounted() {
    this.getUserInfo();
    this.getAiId();
  },
  methods: {
    ...mapMutations([
      "setIsMember",
      "setUserName",
      "setUserAvatar",
      "setAiExpertId",
    ]),
    getUserInfo() {
      if (this.uid == undefined) {
        return;
      }
      this.$axios
        .fetchPost("Mobile/User/userCenter", {
          uId: this.uid,
          mId: this.initMid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.setIsMember(res.data.data.ismember);
            this.setUserName(res.data.data.username);
            this.setUserAvatar(res.data.data.avatar);
          }
        });
    },
    getAiId() {
      this.$axios.fetchPost("Mobile/Sysconfig/getAiExpert").then((res) => {
        if (res.data.code == 0) {
          this.setAiExpertId(res.data.data);
        }
      });
    },
  },
};
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align left
  background #EBEBEB
  min-height 100%
  position relative
  padding-top 40px
</style>
